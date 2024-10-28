import { useState } from "react"
import {useDispatch,useSelector} from 'react-redux'
import { fetchPosts } from "../redux/postsSlice"

const FetchData = () => {
  const dispatch = useDispatch()
  const { posts, loading, error } = useSelector((state) => state.posts)
  const [showData, setShowData] = useState(false)

  const handleData = () => {
    setShowData(true)
    dispatch(fetchPosts())
  }

  return (
    <div>
      {!showData && <button onClick={handleData}>Click to fetch Data</button>}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {showData && !loading && !error && (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>UserId</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default FetchData
