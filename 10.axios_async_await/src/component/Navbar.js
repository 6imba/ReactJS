import {Link} from "react-router-dom";
function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/posts">View All Posts</Link>
                </li>
                <li>
                    <Link to="/create-post">Create Post</Link>
                </li>
            </ul>
      </nav>
    </div>
  )
}

export default Navbar
