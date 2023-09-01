import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PodcastDetail.scss";
import { PodcastDetailCard } from "../../components/PodcastDetailCard/PodcastDetailCard";
import { IEpisodeEntry } from "../../../domain/models/EpisodeEntry";
import { podcastService } from "../../../domain/services/PodcastsService";
import { millisToMinutesAndSeconds } from "../../../domain/utils/timeUtils";

export const PodcastDetail = (): JSX.Element => {

    const { podcastId } = useParams();

    const [episodes, setEpisodes] = useState<IEpisodeEntry[]>([]);
    const [podcast, setPodcast] = useState<IEpisodeEntry>();

    const { isLoading, error, data } = useQuery([`podcast-${podcastId}`], () => {
        return podcastService.getPodcastDetail(podcastId ?? "");
    });

    useEffect(() => {
        setEpisodes(data?.filter(res => res.wrapperType === "podcastEpisode") ?? []);
        setPodcast(data?.find(res => res.wrapperType === "track"));
    }, [data])

    return (
        <>
            {isLoading
                ? "Cargando..."
                : error
                    ? "Ha ocurrido un error"
                    : (
                        <div className="podcast-detail-container container mt-4">
                            <div className="row justify-content-between">
                                <PodcastDetailCard
                                    className="col-3 content-container mb-4"
                                    podcastArtworkUrl={podcast?.artworkUrl600 ?? ""}
                                    podcastName={podcast?.collectionName ?? ""}
                                    podcastArtist={podcast?.artistName ?? ""}
                                    podcastDescription={episodes?.[0]?.shortDescription ?? episodes?.[0]?.description ?? ""}
                                    podcastId={podcast?.trackId}
                                />
                                <div className="col-8 mb-4">
                                    <span className="content-container episodes-title">Episodes: {episodes.length}</span>
                                    <div className="content-container">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Duration</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {episodes?.map(episode => (
                                                    <tr>
                                                        <td scope="row"><Link to={`/podcast/${podcastId}/episode/${episode.trackId}`}>{episode.trackName}</Link></td>
                                                        <td>{(new Date(episode.releaseDate ?? "")).toLocaleDateString()}</td>
                                                        <td>{millisToMinutesAndSeconds(episode.trackTimeMillis ?? 0)}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
        </>
    );

}