interface FetchClientParameters {
    headers: Record<string, string>;
    baseUrl: string;
}

interface BaseFetchParameters extends FetchParameters, FetchClientParameters {
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';
}

interface FetchParameters {
    path: string;
    params?: {
        key: string;
        value: string
    };
    body?: unknown;
}

async function baseFetch({baseUrl, headers, method, path, params, body}: BaseFetchParameters) {
    const url = `${baseUrl}${path}${params ? `?${params.key}=${params.value}` : ''}`;
    console.log("Request to: ", url, " with method: ", method, " and body: ", body ?? "none");
    return fetch(url, {
        method,
        headers: {
            ...headers
        },
        body: JSON.stringify(body) ?? undefined
    });
}

export function fetchClient({headers, baseUrl}: FetchClientParameters) {
    return {
        get: async ({path, params}: FetchParameters) => {
            return baseFetch({baseUrl, headers, method: 'GET', path, params});
        },
        post: async ({path, params, body}: FetchParameters) => {
            return baseFetch({baseUrl, headers, method: 'POST', path, params, body});
        },
        patch: async ({path, params, body}: FetchParameters) => {
            return baseFetch({baseUrl, headers, method: 'PATCH', path, params, body});
        },
        delete: async ({path, params}: FetchParameters) => {
            return baseFetch({baseUrl, headers, method: 'DELETE', path, params});
        },
        put: async ({path, params, body}: FetchParameters) => {
            return baseFetch({baseUrl, headers, method: 'PUT', path, params, body});
        }
    };
}