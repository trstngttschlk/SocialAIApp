import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"

export default function Navbar() {
  const { logout } = useLogout()

  const handleClick = () => {
    logout()
  }
  return (
    <header className="flex border-b space-x-6 justify-between h-24 items-center px-10">
      <Link to="/">
        <h2>App Logo</h2>
      </Link>
      <nav className="flex space-x-6">
        <div>
          <button onClick={handleClick}>Logout</button>
        </div>
        <div className="space-x-6">
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
        <Link to="/feed">Feed</Link>
        <Link to="/post/createpost">Create Post</Link>
      </nav>
    </header>
  )
}
