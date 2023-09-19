import { useQuery } from "react-query"
import readPostRequest from "../api/readPostRequest"
import { useParams } from "react-router-dom"

export default function Post() {
  const { id } = useParams()
  const { isLoading, data: post } = useQuery(["post", id], () =>
    readPostRequest(id)
  )

  return (
    <div>
      <h1>Hello</h1>
      {isLoading ? <div>...loading</div> : <p>{post.caption}</p>}
    </div>
  )
}
