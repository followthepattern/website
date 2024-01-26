import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { BASE_PATH, RequestArgs, BaseAPI, Configuration } from './base';
import { Email } from './models/email';

export const EmailApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        apiV1EmailSendGuestMessagePost: async (body?: Email, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/mail/sendguestmessage`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

export const EmailApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {EmailSignInRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1EmailSendGuestMessagePost(body?: Email, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await EmailApiAxiosParamCreator(configuration).apiV1EmailSendGuestMessagePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

export const EmailApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        apiV1EmailSendGuestMessagePost(body?: Email, options?: any): AxiosPromise<void> {
            return EmailApiFp(configuration).apiV1EmailSendGuestMessagePost(body, options).then((request) => request(axios, basePath));
        },
    };
};

export class EmailApi extends BaseAPI {
    public apiV1EmailSendGuestMessagePost(body?: Email, options?: any) {
        return EmailApiFp(this.configuration).apiV1EmailSendGuestMessagePost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
