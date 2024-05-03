import {Adapter, AdapterAccount, AdapterSession, AdapterUser, VerificationToken} from "next-auth/adapters";
import format from "@/util/format";
import {fetchClient} from "@/util/fetch";

export function RestAdapter(): Adapter {
    const client = fetchClient({
        headers: {
            'Content-Type': 'application/json',
            'x-auth-secret': process.env.NEXTAUTH_SECRET || ''
        }, baseUrl: `http://localhost:8000/auth`
    });

    return {
        createUser: async (user: Omit<AdapterUser, 'id'>) => {
            console.log("Creating user", user)
            const response = await client.post({path: '/users', body: user});
            const data = await response.json();
            return format<AdapterUser>(data);
        },
        getUserByEmail: async (email: string) => {
            console.log("Getting user by email", email)
            const response = await client.get({path: '/users', params: {key: 'email', value: email}});
            if (!response.ok) {
                return null;
            }
            const data = await response.json();
            return data ? format<AdapterUser>(data) : null;
        },
        getUserByAccount: async ({
                                     providerAccountId,
                                     provider
                                 }: Pick<AdapterAccount, 'provider' | 'providerAccountId'>) => {
            console.log("Getting user by account", providerAccountId, provider)
            const response = await client.get({
                path: `/providers/${provider}/accounts/${providerAccountId}`
            });
            if (!response.ok) {
                return null;
            }
            const data = await response.json();
            return data ? format<AdapterUser>(data) : null;
        },
        getUser: async (id: string) => {
            console.log("Getting user by id", id)
            const response = await client.get({path: `/users/${id}`});
            if (!response.ok) {
                return null;
            }
            const data = await response.json();
            return data ? format<AdapterUser>(data) : null;
        },
        updateUser: async (user: Partial<AdapterUser> & Pick<AdapterUser, 'id'>) => {
            console.log("Updating user", user)
            const response = await client.patch({path: `/users/${user.id}`, body: user});
            const data = await response.json();
            return data ? format<AdapterUser>(data) : data;
        },
        deleteUser: async (userId: string) => {
            console.log("Deleting user", userId)
            const response = await client.delete({path: `/users/${userId}`});
            const data = await response.json();
            return data ? format<AdapterUser>(data) : data;
        },
        linkAccount: async (account: AdapterAccount) => {
            console.log("Linking account", account)
            const response = await client.post({
                path: `/providers/${account.provider}/accounts`,
                body: account
            });
            const data = await response.json();
            return data ? format<AdapterAccount>(data) : data;
        },
        unlinkAccount: async ({
                                  providerAccountId,
                                  provider
                              }: Pick<AdapterAccount, 'provider' | 'providerAccountId'>) => {
            console.log("Unlinking account", providerAccountId, provider)
            const response = await client.delete({
                path: `/providers/${provider}/accounts/${providerAccountId}`
            });
            const data = await response.json();
            return data ? format<AdapterAccount>(data) : data;
        },
        createSession: async (session: { sessionToken: string; userId: string; expires: Date }) => {
            console.log("Creating session", session)
            const response = await client.post({path: '/sessions', body: session});
            const data = await response.json();
            return data ? format<AdapterSession>(data) : data;
        },
        getSessionAndUser: async (sessionToken: string) => {
            console.log("Getting session and user", sessionToken)
            const response = await client.get({path: `/sessions/${sessionToken}`});
            const data = await response.json();
            if (!data || data.detail === 'Not Found' || !data.session || !data.user) {
                return null;
            }
            const session = format<AdapterSession>(data.session);
            const user = format<AdapterUser>(data.user);
            return {session, user};
        },
        updateSession: async (session: Partial<AdapterSession> & Pick<AdapterSession, 'sessionToken'>) => {
            console.log("Updating session", session)
            const response = await client.patch({path: `/sessions/${session.sessionToken}`, body: session});
            const data = await response.json();
            return data ? format<AdapterSession>(data) : data;
        },
        deleteSession: async (sessionToken: string) => {
            console.log("Deleting session", sessionToken)
            const response = await client.delete({path: `/sessions/${sessionToken}`});
            const data = await response.json();
            return data ? format<AdapterSession>(data) : data;
        },
        createVerificationToken: async (verificationToken: VerificationToken) => {
            console.log("Creating verification token", verificationToken)
            const response = await client.post({path: '/verification', body: verificationToken});
            const data = await response.json();
            return data ? format<VerificationToken>(data) : data;
        },
        useVerificationToken: async (params: { identifier: string; token: string }) => {
            console.log("Using verification token", params)
            const response = await client.patch({path: `/verification/${params.token}`, body: {token: params.token}});
            const data = await response.json();
            return data ? format<VerificationToken>(data) : data;
        }
    };
}