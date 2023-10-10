import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"

export default function Navbar() {
  const { logout } = useLogout()

  const handleClick = () => {
    logout()
  }
  return (
    <header>
      <div>
        <Link to="/">
          <h1>SocialMediaAI</h1>
        </Link>
        <nav>
          <div>
            <button onClick={handleClick}>Logout</button>
          </div>
          <div>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </div>
          <Link to="/feed">Feed</Link>
          <Link to="/post/createpost">Create Post</Link>
          {/* <ul>
            <li>
            </li>
            <li>
            </li>
            <li>
            </li>
            <li>
            </li>
          </ul> */}
        </nav>
      </div>
    </header>
  )
}
