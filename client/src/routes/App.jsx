import "./App.css"
import { useQuery } from "react-query"
import readFeedPostsRequest from "../api/readFeedPostsRequest"
import FeedPosts from "../components/FeedPosts"
import CreatePostForm from "../components/CreatePostForm"

function App() {
  const { isLoading, data: posts } = useQuery("posts", readFeedPostsRequest)

  return (
    <>
      <h1>Home Page</h1>
      {isLoading ? (
        <div>loading ...</div>
      ) : (
        posts.map((post) => <FeedPosts post={post} key={post._id} />)
      )}
      <CreatePostForm />
    </>
  )
}

export default App
