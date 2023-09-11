import PropTypes from "prop-types"
import deletePostRequest from "../api/deletePostRequest"
import { useQueryClient, useMutation } from "react-query"

export default function Post({ post }) {
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
      <a href={`/posts/${post._id}`}>Link to Post</a>
      <button onClick={() => deletePost(post)}>delete</button>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object,
}
