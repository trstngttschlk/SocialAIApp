import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { QueryClient, QueryClientProvider } from "react-query"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./routes/Root"
import Login from "./components/Login"
import Feed from "./components/Feed"
import Post from "./components/Post"
import CreatePostForm from "./components/CreatePostForm"
import { AuthContextProvider } from "./context/AuthContext"

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>sorry nothing here</div>,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "feed",
        element: <Feed />,
      },
      {
        path: "post/:id",
        element: <Post />,
      },
      {
        path: "post/createpost",
        element: <CreatePostForm />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
