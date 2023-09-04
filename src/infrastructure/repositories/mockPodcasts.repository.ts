import { IEpisodeEntry } from "../../domain/models/EpisodeEntry";
import { IPodcastEntry } from "../../domain/models/PodcastEntry";
import { IPodcastRepository } from "./podcasts.repository";

export const mockPodcastRespository: IPodcastRepository = {

    getPodcasts: async (): Promise<IPodcastEntry[]> => {
        return [
            {
                "im:name": {
                    "label": "The Joe Budden Podcast"
                },
                "im:image": [
                    {
                        "label": "https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png",
                        "attributes": {
                            "height": "55"
                        }
                    },
                    {
                        "label": "https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png",
                        "attributes": {
                            "height": "60"
                        }
                    },
                    {
                        "label": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png",
                        "attributes": {
                            "height": "170"
                        }
                    }
                ],
                "summary": {
                    "label": "Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends."
                },
                "im:price": {
                    "label": "Get",
                    "attributes": {
                        "amount": "0",
                        "currency": "USD"
                    }
                },
                "im:contentType": {
                    "attributes": {
                        "term": "Podcast",
                        "label": "Podcast"
                    }
                },
                "rights": {
                    "label": "© All rights reserved"
                },
                "title": {
                    "label": "The Joe Budden Podcast - The Joe Budden Network"
                },
                "link": {
                    "attributes": {
                        "rel": "alternate",
                        "type": "text/html",
                        "href": "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2"
                    }
                },
                "id": {
                    "label": "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2",
                    "attributes": {
                        "im:id": "1535809341"
                    }
                },
                "im:artist": {
                    "label": "The Joe Budden Network",
                    "attributes": {
                        "href": "https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2"
                    }
                },
                "category": {
                    "attributes": {
                        "im:id": "1310",
                        "term": "Music",
                        "scheme": "https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2",
                        "label": "Music"
                    }
                },
                "im:releaseDate": {
                    "label": "2023-08-26T00:00:00-07:00",
                    "attributes": {
                        "label": "August 26, 2023"
                    }
                }
            }
        ]
    },

    getPodcastDetail: async (podcastId: string): Promise<IEpisodeEntry[]> => {
        return [
            {
              "wrapperType": "track",
              "kind": "podcast",
              "collectionId": Number(podcastId),
              "trackId": Number(podcastId),
              "artistName": "Friday Night Karaoke",
              "collectionName": "Friday Night Karaoke",
              "trackName": "Friday Night Karaoke",
              "collectionCensoredName": "Friday Night Karaoke",
              "trackCensoredName": "Friday Night Karaoke",
              "collectionViewUrl": "https://podcasts.apple.com/us/podcast/friday-night-karaoke/id1574029840?uo=4",
              "feedUrl": "https://www.omnycontent.com/d/playlist/0fd93973-d7c7-41c7-9e07-ae9900ea1ad0/22e94bfc-b6ef-4fbb-859e-b04b01827e19/1afe2567-0f51-40da-9a52-b04b01827e48/podcast.rss",
              "trackViewUrl": "https://podcasts.apple.com/us/podcast/friday-night-karaoke/id1574029840?uo=4",
              "artworkUrl30": "https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/75/6f/21/756f219f-111f-b47f-48e5-f39946e643bf/mza_12168793512556367093.jpg/30x30bb.jpg",
              "artworkUrl60": "https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/75/6f/21/756f219f-111f-b47f-48e5-f39946e643bf/mza_12168793512556367093.jpg/60x60bb.jpg",
              "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/75/6f/21/756f219f-111f-b47f-48e5-f39946e643bf/mza_12168793512556367093.jpg/100x100bb.jpg",
              "collectionPrice": 0,
              "trackPrice": 0,
              "collectionHdPrice": 0,
              "releaseDate": "2023-07-28T22:06:00Z",
              "collectionExplicitness": "notExplicit",
              "trackExplicitness": "explicit",
              "trackCount": 52,
              "trackTimeMillis": 4547,
              "country": "USA",
              "currency": "USD",
              "primaryGenreName": "Music",
              "contentAdvisoryRating": "Explicit",
              "artworkUrl600": "https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/75/6f/21/756f219f-111f-b47f-48e5-f39946e643bf/mza_12168793512556367093.jpg/600x600bb.jpg",
              "genreIds": [
                "1310",
                "26",
                "1512",
                "1517"
              ],
              "genres": [
                "Music",
                "Podcasts",
                "Health & Fitness",
                "Mental Health"
              ]
            },
            {
              "country": "USA",
              "feedUrl": "https://www.omnycontent.com/d/playlist/0fd93973-d7c7-41c7-9e07-ae9900ea1ad0/22e94bfc-b6ef-4fbb-859e-b04b01827e19/1afe2567-0f51-40da-9a52-b04b01827e48/podcast.rss",
              "closedCaptioning": "none",
              "collectionId": 1574029840,
              "collectionName": "Friday Night Karaoke",
              "genres": [
                {
                  "name": "Music",
                  "id": "1310"
                }
              ],
              "episodeGuid": "f2a046cf-140b-4613-acd3-b04d01685508",
              "artistIds": [],
              "description": "Join the FNK stars as they proudly belt out their guilty pleasure hits, from Britney to Meatloaf. It's an unashamed celebration of music that will have you saying 'Oops, I love it again!",
              "trackId": 1000622706701,
              "trackName": "Nothing Compares to FNK's Guilty Pleasure Karaoke",
              "shortDescription": "",
              "releaseDate": "2023-07-28T22:06:14Z",
              "episodeUrl": "https://chrt.fm/track/35F11F/pdrl.fm/1d3ff8/dts.podtrac.com/redirect.mp3/traffic.omny.fm/d/clips/0fd93973-d7c7-41c7-9e07-ae9900ea1ad0/22e94bfc-b6ef-4fbb-859e-b04b01827e19/f2a046cf-140b-4613-acd3-b04d01685508/audio.mp3?utm_source=Podcast&in_playlist=1afe2567-0f51-40da-9a52-b04b01827e48",
              "trackTimeMillis": 4547000,
              "contentAdvisoryRating": "Explicit",
              "artworkUrl60": "https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/75/6f/21/756f219f-111f-b47f-48e5-f39946e643bf/mza_12168793512556367093.jpg/60x60bb.jpg",
              "previewUrl": "https://chrt.fm/track/35F11F/pdrl.fm/1d3ff8/dts.podtrac.com/redirect.mp3/traffic.omny.fm/d/clips/0fd93973-d7c7-41c7-9e07-ae9900ea1ad0/22e94bfc-b6ef-4fbb-859e-b04b01827e19/f2a046cf-140b-4613-acd3-b04d01685508/audio.mp3?utm_source=Podcast&in_playlist=1afe2567-0f51-40da-9a52-b04b01827e48",
              "artworkUrl600": "https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/75/6f/21/756f219f-111f-b47f-48e5-f39946e643bf/mza_12168793512556367093.jpg/600x600bb.jpg",
              "collectionViewUrl": "https://itunes.apple.com/us/podcast/friday-night-karaoke/id1574029840?mt=2&uo=4",
              "trackViewUrl": "https://podcasts.apple.com/us/podcast/nothing-compares-to-fnks-guilty-pleasure-karaoke/id1574029840?i=1000622706701&uo=4",
              "artworkUrl160": "https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/75/6f/21/756f219f-111f-b47f-48e5-f39946e643bf/mza_12168793512556367093.jpg/160x160bb.jpg",
              "episodeFileExtension": "mp3",
              "episodeContentType": "audio",
              "kind": "podcast-episode",
              "wrapperType": "podcastEpisode"
            }
          ]
    }

}