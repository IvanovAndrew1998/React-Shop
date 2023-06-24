import axios from "axios";

type KeyValuePair = {
    key: string,
    value: string
}

export class BaseApi {
    baseUrl = "http://uv-mir.ru/"

    formatUrl(relativeUrl: string, params: KeyValuePair[]): string {
        
        let paramsString;

        if (params) {
            paramsString = "?" + params.map(
                (pair: KeyValuePair) => `${pair.key}=${pair.value}`
                ).join('&') ?? "";
            }
        else {
            paramsString = ""
        }
            
            
        return this.baseUrl + relativeUrl + paramsString
    }
    
    async get(relativeUrl: string, params: KeyValuePair[]) {        
        const url = this.formatUrl(relativeUrl, params);
        console.log(`GET on ${url}`);
        return (await axios.get(url)).data;
    }
}

