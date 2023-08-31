import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { Home } from "./pages/Home/Home"
import { EpisodeDetail } from "./pages/EpisodeDetail/EpisodeDetail"
import { QueryClient, QueryClientProvider } from "react-query"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.scss"
import { PodcastDetail } from "./pages/PodcastDetail/PodcastDetail"

function App() {

  const router = createBrowserRouter([
    {
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/podcast/:podcastId",
          element: <PodcastDetail />
        },
        {
          path: "/podcast/:podcastId/episode/:episodeId",
          element: <EpisodeDetail />
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

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App
