import { Link } from "react-router-dom";
import { IPodcastDetailCardProps } from "./PodcastDetailCard.model";
import "./PodcastDetailCard.scss";

export const PodcastDetailCard = (props: IPodcastDetailCardProps): JSX.Element => {
    return (
        <aside className={props.className}>
            <Link to={`/podcast/${props.podcastId}`} className="link">
                <img className="rounded w-100" src={props.podcastArtworkUrl} />
                <hr />
                <h4>{props?.podcastName}</h4>
                <span>by {props.podcastArtist}</span>
            </Link>
            <hr />
            <h4>Description:</h4>
            <p>{props.podcastDescription}</p>
        </aside>
    );
}