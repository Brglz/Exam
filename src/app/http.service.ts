export class HttpService {
    private appId = '1CC5FA94-3C48-315E-FF9F-32A41CCF2500';
    private apiKey = '43E7AF4E-FFA2-4AF4-A668-D9328C93B81D';

    private _url: string = `https://api.backendless.com/${this.appId}/${this.apiKey}/data/`;

    hostUrl() {
        return this._url;
    }
}