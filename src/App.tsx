import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { QueryClient } from "@tanstack/react-query"
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client"
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.scss"
import { Header } from "./infrastructure/components/Header/Header"
import { EpisodeDetail } from "./infrastructure/components/EpisodeDetail/EpisodeDetail"
import { Home } from "./infrastructure/components/Home/Home"
import { PodcastDetail } from "./infrastructure/components/PodcastDetail/PodcastDetail"
import { PodcastService } from "./domain/services/PodcastsService"
import { httpPodcastRespository } from "./infrastructure/repositories/httpPodcasts.repository"

function App() {

  const podcastService = new PodcastService(httpPodcastRespository);

  const router = createBrowserRouter([
    {
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Home podcastService={podcastService} />
        },
        {
          path: "/podcast/:podcastId",
          element: <PodcastDetail podcastService={podcastService} />
        },
        {
          path: "/podcast/:podcastId/episode/:episodeId",
          element: <EpisodeDetail podcastService={podcastService} />
        }
      ]
    }
  ])

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 24 * 60 * 60 * 1000, // 1d
        cacheTime: 24 * 60 * 60 * 1000, // 1d
      },
    },
  });

  const persister = createSyncStoragePersister({
    storage: window.localStorage,
  })

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <RouterProvider router={router} />
    </PersistQueryClientProvider>
  );
}

export default App
