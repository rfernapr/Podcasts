import { podcastRespository } from "../../infrastructure/repositories/podcasts.repository";
import { IEpisodeEntry } from "../models/EpisodeEntry";
import { IPodcastEntry } from "../models/PodcastEntry";

export const podcastService = {

    getPodcasts: async (): Promise<IPodcastEntry[]> => {
        return podcastRespository.getPodcasts()
    },

    getPodcastDetail: async (podcastId: string): Promise<IEpisodeEntry[]> => {
        return podcastRespository.getPodcastDetail(podcastId);
    }

}