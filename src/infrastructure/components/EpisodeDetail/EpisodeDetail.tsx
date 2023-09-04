import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { PodcastDetailCard } from "../../components/PodcastDetailCard/PodcastDetailCard";
import { PodcastService } from "../../../domain/services/PodcastsService";
import { Loading } from "../Loading/Loading";
import { Error } from "../Error/Error";

export const EpisodeDetail = (): JSX.Element => {

    const { podcastId, episodeId } = useParams();

    const { isLoading, error, data } = useQuery([`podcast-${podcastId}`], () => {
        return PodcastService.getInstance().getPodcastDetail(podcastId ?? "");
    })

    if (isLoading)
        return (<Loading />)

    if (error)
        return (<Error />)

    const episode = data?.find(res => res.wrapperType === "podcastEpisode" && res.trackId === Number(episodeId));
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
                        podcastDescription={episode?.shortDescription ?? episode?.description ?? ""}
                        podcastId={podcast?.trackId}
                    />
                    <div className="col-8">
                        <div className="content-container">
                            <h1>{episode?.trackName}</h1>
                            <p dangerouslySetInnerHTML={{ __html: episode?.description ?? "" }} />
                            <audio controls>
                                <source src={episode?.episodeUrl} type={`${episode?.episodeContentType}/${episode?.episodeFileExtension}`} />
                            </audio>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}