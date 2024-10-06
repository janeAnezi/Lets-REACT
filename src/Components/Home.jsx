import { useState } from "react";
import kid01 from '../assets/images/kidImg01.jpg'
import kid02 from '../assets/images/kidImg02.jpg'
import kid03 from '../assets/images/kidImg03.jpg'

const Home = () => {
   const [blogs, setBlogs] = useState([
    { id: 1, url: {kid01}, title: "Blog 1", content: "This is the content of the first blog", author: 'Anezi' },
    { id: 2, url: {kid02}, title: "Blog 2", content: "This is the...", author: "Adiel" },
    { id: 3, url: {kid03}, title: "Blog 3", content: "This is the content of the third blog...", author: "pabv" }
   ])
   

   
    return ( <>
        <h1 className="home"> This is the body of the post</h1>
        <p>{name}</p>
        <button onClick={handleClick}>Click Me</button>
        
    </> );
}
 
export default Home;