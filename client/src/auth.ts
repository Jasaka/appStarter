import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";
import Credentials from "@auth/core/providers/credentials";
import {RestAdapter} from "@/restAdapter";


export const {handlers, signIn, signOut, auth} = NextAuth({
        adapter: RestAdapter(),
        session: {
          strategy: "database"
        },
        providers: [
            GitHub,
            Credentials({
                credentials: {
                    email: {},
                    password: {}
                },
                async authorize(credentials) {
                    console.log("Provided Credentials", credentials);
                    const response = {ok: false, json: {}}
                    if (credentials.email === "john.doe@lol.xd" && credentials.password === "password13") {
                        response.json = {
                            ok: true,
                            json: {
                                id: 1,
                                name: "John Doe",
                                email: "john.doe@lol.xd",
                                image: "https://www.gravatar.com/avatar/ddlklkd"
                            }
                        };
                    }
                    if (!response.ok)
                        return {msg: "Wrong Credentials", status: "error"};
                    return response.json ?? {
                        msg: "Login succeeded. No user returned. Please contact admin.",
                        status: "error"
                    };
                }
            })],
    })
;
