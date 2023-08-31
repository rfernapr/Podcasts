import { useParams } from "react-router-dom";
import PodcastsService from "../../services/PodcastsService";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { IEpisodeEntry } from "../../services/ServiceModels";
import { PodcastDetailCard } from "../../components/PodcastDetailCard/PodcastDetailCard";

export const EpisodeDetail = (): JSX.Element => {

    const { podcastId, episodeId } = useParams();

    const [episode, setEpisode] = useState<IEpisodeEntry>();
    const [podcast, setPodcast] = useState<IEpisodeEntry>();

    const { isLoading, error, data } = useQuery(`podcast-${podcastId}`, () => {
        return PodcastsService
            .getInstance()
            .getPodcastDetail(podcastId ?? "");
    })

    useEffect(() => {
        setEpisode(data?.results.find(res => res.wrapperType === "podcastEpisode" && res.trackId === Number(episodeId)));
        setPodcast(data?.results.find(res => res.wrapperType === "track"));
    }, [data, episodeId]);

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
                    )}
        </>
    );
}