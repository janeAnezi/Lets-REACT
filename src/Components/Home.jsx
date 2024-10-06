import { useState } from "react";
import kid01 from '../assets/images/kidImg04.jpg'
import kid02 from '../assets/images/kidImg02.jpg'
import kid03 from '../assets/images/kidImg03.jpg'

const Home = () => {
   const [blogs, setBlogs] = useState([
    { id: 1, url: {kid01}, title: "Blog 1", content: "This is the content of the first blog", author: 'Anezi' },
    { id: 2, url: {kid02}, title: "Blog 2", content: "This is the...", author: "Adiel" },
    { id: 3, url: {kid03}, title: "Blog 3", content: "This is the content of the third blog...", author: "pabv" }
   ])
   

   
    return ( <>
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id} >
                    <img src={blog.url} alt={blog.title} />
                    <h2>{blog.title}</h2>
                    <p> Written By: {blog.author}</p>
                </div>
            ))}
        </div>
        
    </> );
}
 
export default Home;