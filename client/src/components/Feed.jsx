import PropTypes from "prop-types"
import deletePostRequest from "../api/deletePostRequest"
import readFeedRequest from "../api/readFeedRequest"
import { useQuery, useQueryClient, useMutation } from "react-query"
import { Link } from "react-router-dom"
import React from "react"

export default function FeedPosts() {
  const { isLoading, data: posts } = useQuery("posts", readFeedRequest)
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
      {isLoading ? (
        <div>loading ...</div>
      ) : (
        posts.map((post) => (
          <React.Fragment key={post._id}>
            <p>{post.caption}</p>
            <Link to={"/post/" + post._id}>Link to Post</Link>
            <button onClick={() => deletePost(post)}>delete</button>
          </React.Fragment>
        ))
      )}
    </div>
  )
}

FeedPosts.propTypes = {
  post: PropTypes.object,
}
