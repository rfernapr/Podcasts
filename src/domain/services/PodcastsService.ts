import { IPodcastRepository } from "../../infrastructure/repositories/podcasts.repository";
import { IEpisodeEntry } from "../models/EpisodeEntry";
import { IPodcastEntry } from "../models/PodcastEntry";

export class PodcastService {

    private podcastRepository: IPodcastRepository

    public constructor(podcastRepository: IPodcastRepository) {
        this.podcastRepository = podcastRepository;
    }

    public getPodcasts = async (): Promise<IPodcastEntry[]> => {
        return this.podcastRepository.getPodcasts()
    }

    public getPodcastDetail = async (podcastId: string): Promise<IEpisodeEntry[]> => {
        return this.podcastRepository.getPodcastDetail(podcastId);
    }

}