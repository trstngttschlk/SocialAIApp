import PropTypes from "prop-types"
import deletePostRequest from "../api/deletePostRequest"
import { useQueryClient, useMutation } from "react-query"
import { Link } from "react-router-dom"

export default function FeedPosts({ post }) {
  const queryClient = useQueryClient()

  const { mutate: deletePost } = useMutation(
    (updatedPost) => deletePostRequest(updatedPost),
    {
      onSettled: () => {
        queryClient.invalidateQueries("posts")
      },
    }
  )

  return (
    <div>
      <p>{post.caption}</p>
      <Link to={"/post/" + post._id}>Link to Post</Link>
      <button onClick={() => deletePost(post)}>delete</button>
    </div>
  )
}

FeedPosts.propTypes = {
  post: PropTypes.object,
}
