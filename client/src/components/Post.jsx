import { useQuery } from "react-query"
import readPostRequest from "../api/readPostRequest"

export default function Post() {
  const { isLoading, data: post } = useQuery("post", readPostRequest)

  return (
    <div>
      <h1>Hello</h1>
      {isLoading ? <div>...loading</div> : <p>{post}</p>}
    </div>
  )
}
