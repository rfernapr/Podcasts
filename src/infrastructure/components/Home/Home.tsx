import { useQuery } from "react-query";
import { PodcastCard } from "../../components/PodcastCard/PodcastCard";
import "./Home.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IPodcastEntry } from "../../../domain/models/PodcastEntry";
import { podcastService } from "../../../domain/services/PodcastsService";

export const Home = (): JSX.Element => {

    const [search, setSearch] = useState("");

    const filterResults = (response: IPodcastEntry[], search: string) => {
        if (!search.length)
            return response;
        else
            return response.filter(podcast => {
                return podcast["im:artist"].label.toLowerCase().includes(search.toLowerCase()) || podcast["im:name"].label.toLowerCase().includes(search.toLowerCase())
            })
    }

    const { isLoading, error, data } = useQuery('podcasts', () => {
        return podcastService.getPodcasts()
    }, {
        select: response => filterResults(response, search)
    })

    return (
        <div className="home">
            <div className="home__header">
                <span className="badge badge-primary home__counter-badge">{data?.length}</span>
                <input placeholder="Filter podcasts..." onChange={e => setSearch(e.target.value)} />
            </div>
            {isLoading
                ? "Cargando..."
                : error
                    ? "Ha ocurrido un error"
                    : (
                        <div className="d-flex flex-wrap">
                            {data?.map(podcast => (
                                <Link to={`/podcast/${podcast.id.attributes["im:id"]}`} className="home__podcast-link">
                                    <PodcastCard
                                        key={podcast.id.label}
                                        podcastTitle={podcast.title.label}
                                        podcastAuthor={podcast["im:artist"].label}
                                        podcastImage={podcast["im:image"][0].label}
                                    />
                                </Link>
                            ))}
                        </div>
                    )}
        </div>
    );
}