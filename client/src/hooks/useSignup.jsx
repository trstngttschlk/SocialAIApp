import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { API_URL } from "../api/config"

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const res = await fetch(`${API_URL}/api/user/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
    const json = await res.json()

    if (!res.ok) {
      setIsLoading(false)
      setError(json.error)
    }

    if (res.ok) {
      // save user's jwt to localStorage
      localStorage.setItem("user", JSON.stringify(json))

      // upate auth context
      dispatch({ type: "LOGIN", payload: json })

      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}
