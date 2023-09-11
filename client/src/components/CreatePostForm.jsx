import { useQueryClient, useMutation } from "react-query"
import createPostRequest from "../api/createPostRequest"
import { useState } from "react"

export default function CreatePostForm() {
  const [caption, setCaption] = useState("")

  const queryClient = useQueryClient()

  const { mutate: createPost } = useMutation(
    (newPost) => createPostRequest(newPost),
    {
      onSettled: () => {
        queryClient.invalidateQueries("posts")
      },
    }
  )

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (!caption) return
        createPost({ caption })
        setCaption("")
      }}
    >
      <input
        onChange={(e) => setCaption(e.target.value)}
        value={caption}
        type="text"
      />
      <button>Create</button>
    </form>
  )
}
