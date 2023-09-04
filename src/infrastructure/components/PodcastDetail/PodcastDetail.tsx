import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import "./PodcastDetail.scss";
import { PodcastDetailCard } from "../../components/PodcastDetailCard/PodcastDetailCard";
import { PodcastService } from "../../../domain/services/PodcastsService";
import { millisToMinutesAndSeconds } from "../../../domain/utils/timeUtils";
import { Loading } from "../Loading/Loading";
import { Error } from "../Error/Error";

export const PodcastDetail = (): JSX.Element => {

    const { podcastId } = useParams();

    const { isLoading, error, data } = useQuery([`podcast-${podcastId}`], () => {
        return PodcastService.getInstance().getPodcastDetail(podcastId ?? "");
    });

    if (isLoading)
        return (<Loading />)

    if (error)
        return (<Error />)

    const episodes = data?.filter(res => res.wrapperType === "podcastEpisode") ?? [];
    const podcast = data?.find(res => res.wrapperType === "track");

    return (
        <>
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
        </>
    );

}