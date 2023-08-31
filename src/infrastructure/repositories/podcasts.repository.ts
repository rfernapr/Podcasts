import { IEpisodeEntry } from "../../domain/models/EpisodeEntry";
import { IPodcastEntry } from "../../domain/models/PodcastEntry";
import { httpCall } from "../../infrastructure/http/http";
import { IPodcastDetailDTO } from "../http/dto/PodcastDetailDTO";
import { IPodcastListDTO } from "../http/dto/PodcastListDTO";

const apiHost = "https://itunes.apple.com";

export const podcastRespository = {

    getPodcasts: async (): Promise<IPodcastEntry[]> => {
        const response: IPodcastListDTO = await httpCall(apiHost + "/us/rss/toppodcasts/limit=100/genre=1310/json", { method: "GET" });
        return response.feed.entry.map(podcast => {
            return {
                ...podcast
            }
        });
    },

    getPodcastDetail: async (podcastId: string): Promise<IEpisodeEntry[]> => {
        const response: IPodcastDetailDTO = await httpCall("https://api.allorigins.win/raw?url=" + encodeURIComponent(apiHost + `/lookup?id=${podcastId}&country=US&media=podcast&entity=podcastEpisode&limit=100`), { method: "GET" });
        return response.results.map(episode => {
            return {
                ...episode
            }
        })
    }

}