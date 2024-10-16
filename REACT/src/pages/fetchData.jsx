const fetchData = ()=>{
    const [posts,setPosts] = useState([])
    const [showData,setShowData] = useState(false)

    const fetchPosts = async()=>{
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setPosts(response.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchPosts()
    },[])

    const handleData = ()=>{
        setShowData(true)
    }

    return (
      <div>
        {!showData &&(
          <button onClick={handleData}>Click to fetch Data</button>
        )}
        {showData &&(
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
              {posts.map((post)=>{
                return (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.userId}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </div>
    )
}