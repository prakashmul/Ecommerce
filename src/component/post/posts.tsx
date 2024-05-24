import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

const Post = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {

        const getPost = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                const posts = await res.json();
                setPosts(posts)
            } catch (error: any) {
                console.log(error)
            }
        }

        getPost();

    }, [])

    console.log(posts)

    return (
        <div className="grid grid-cols-4 gap-10 p-10">
            {
                posts.map((post) => (
                    <div key={post.userId} className="border p-5 rounded-lg space-y-5">
                        <div>
                            <p className="">User Id: {post.userId}</p>
                            <p className="">Id: {post.id}</p>
                            <p className="font-bold capitalize">Title: {post.title}</p> 
                            <p className=""><span className="font-bold capitalize">Body: </span>{post.body}</p>

                        </div>
                        {/* <div>
              <Link className="bg-red-500 text-white px-4 py-2 rounded-lg " to={`/posts/${post.userId}`}>
                View Details
              </Link>
            </div> */}
                    </div>
                ))
            }
        </div>
    )
}

export default Post