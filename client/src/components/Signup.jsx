import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

export default function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signup, isLoading, error } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign-up</h3>
      <label>Email</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button disabled={isLoading} type="submit">
        Signup
      </button>
      {error && <div>{error}</div>}
    </form>
  )
}
