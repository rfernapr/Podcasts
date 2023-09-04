import { IEpisodeEntry } from "../../domain/models/EpisodeEntry";
import { IPodcastEntry } from "../../domain/models/PodcastEntry";

export interface IPodcastRepository {
    getPodcasts(): Promise<IPodcastEntry[]>;
    getPodcastDetail(podcastId: string): Promise<IEpisodeEntry[]>;
}