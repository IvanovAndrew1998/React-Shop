import axios from "axios";

type KeyValuePair = {
    key: string,
    value: string
}

export class BaseApi {
    baseUrl = "http://uv-mir.ru/"
    formatUrl(relativeUrl: string, params: KeyValuePair[]): string {
        
        let paramsString;

        console.log(params);
        if (params) {
            paramsString = params.map(
                (pair: KeyValuePair) => `${pair.key}=${pair.value}`
                ).join('&') ?? "";
            }
        else {
            paramsString = ""
        }
            
            
        console.log(this.baseUrl + relativeUrl + paramsString);
        return this.baseUrl + relativeUrl + paramsString
    }

    async get(relativeUrl: string, params: KeyValuePair[]) {
        console.log(this.formatUrl(relativeUrl, params));
        return (await axios.get(this.formatUrl(relativeUrl, params))).data;
    }
}

