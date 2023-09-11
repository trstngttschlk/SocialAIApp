import PropTypes from "prop-types"

export default function Post({ post }) {
  return (
    <div>
      {post.caption}
      <a href={`/posts/${post._id}`}>Link to Post</a>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object,
}
