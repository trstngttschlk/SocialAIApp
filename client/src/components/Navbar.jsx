import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/feed">Feed</Link>
        </li>
        <li>
          <Link to="/post/createpost">Create Post</Link>
        </li>
      </ul>
    </nav>
  )
}
