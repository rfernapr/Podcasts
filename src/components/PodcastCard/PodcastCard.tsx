import { IPodcastCardProps } from "./PodcastCard.model";
import "./PodcastCard.scss"

export const PodcastCard = (props: IPodcastCardProps): JSX.Element => {
    return (
        <article className="podcast-card">
            <img src={props.podcastImage} className="rounded-circle image" />
            <h2 className="title">{props.podcastTitle}</h2>
            <span className="author">Author: {props.podcastAuthor}</span>
        </article>
    );
}