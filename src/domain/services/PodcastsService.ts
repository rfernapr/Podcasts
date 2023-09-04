import { httpPodcastRespository } from "../../infrastructure/repositories/httpPodcasts.repository";
import { IPodcastRepository } from "../../infrastructure/repositories/podcasts.repository";
import { IEpisodeEntry } from "../models/EpisodeEntry";
import { IPodcastEntry } from "../models/PodcastEntry";

export class PodcastService {

    private static _instance: PodcastService;

    private podcastRepository: IPodcastRepository

    public constructor(podcastRepository: IPodcastRepository) {
        this.podcastRepository = podcastRepository;
    }

    public static getInstance = (): PodcastService => {
		if (!PodcastService._instance) {
			PodcastService._instance = new PodcastService(httpPodcastRespository);
		}

		return PodcastService._instance;
	};

    public getPodcasts = async (): Promise<IPodcastEntry[]> => {
        return this.podcastRepository.getPodcasts()
    }

    public getPodcastDetail = async (podcastId: string): Promise<IEpisodeEntry[]> => {
        return this.podcastRepository.getPodcastDetail(podcastId);
    }

}