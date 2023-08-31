import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PodcastCard } from './PodcastCard';

describe('Test Podcast Card', () => {
    const podcastTitle = "The Joe Budden Podcast"
    const podcastAuthor = "The Joe Budden Network";
    const podcastImage = "https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg";

    test('has image', () => {
        render(<PodcastCard podcastTitle={podcastTitle} podcastAuthor={podcastAuthor} podcastImage={podcastImage} />);
        const image = screen.getByRole("img");
        expect(image).toBeInTheDocument();
    });

    test('has title', () => {
        render(<PodcastCard podcastTitle={podcastTitle} podcastAuthor={podcastAuthor} podcastImage={podcastImage} />);
        const title = screen.getAllByText(podcastTitle)[0];
        expect(title).toBeInTheDocument();
    });

    test('has author', () => {
        render(<PodcastCard podcastTitle={podcastTitle} podcastAuthor={podcastAuthor} podcastImage={podcastImage} />);
        const author = screen.getAllByText("Author: " + podcastAuthor)[0];
        expect(author).toBeInTheDocument();
    });
});