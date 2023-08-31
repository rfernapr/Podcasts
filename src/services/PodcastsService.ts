import { IPodcastDetailResponse, IPodcastListResponse } from "./ServiceModels";

export default class PodcastsService {
    
    private apiHost = "https://itunes.apple.com";

    private static _instance: PodcastsService;

	private constructor() { }

	public static getInstance = (): PodcastsService => {
		if (!PodcastsService._instance) {
			PodcastsService._instance = new PodcastsService();
		}
		return PodcastsService._instance;
	};

    public getPodcasts = async (): Promise<IPodcastListResponse> => {
        return await this._call(this.apiHost + "/us/rss/toppodcasts/limit=100/genre=1310/json", { method: "GET" })
    }

    public getPodcastDetail = async (podcastId: string): Promise<IPodcastDetailResponse> => {
        return await this._call("https://api.allorigins.win/raw?url=" + encodeURIComponent(this.apiHost + `/lookup?id=${podcastId}&country=US&media=podcast&entity=podcastEpisode&limit=100`), { method: "GET" })
    }

    private _call = async <T>(url: string, request: RequestInit): Promise<T> => {
        const response = await fetch(url, request);
		if (response.status !== 200) {
			return Promise.reject(response);
		}
		return await response.json();
    }

}