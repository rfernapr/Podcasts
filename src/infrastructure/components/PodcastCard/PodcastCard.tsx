import { IPodcastCardProps } from "./PodcastCard.model";
import "./PodcastCard.scss"

export const PodcastCard = (props: IPodcastCardProps): JSX.Element => {
    return (
        <article className="podcast-card">
            <img src={props.podcastImage} className="rounded-circle podcast-card__image" />
            <h2 className="podcast-card__title">{props.podcastTitle}</h2>
            <span className="podcast-card__author">Author: {props.podcastAuthor}</span>
        </article>
    );
}