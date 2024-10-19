import { useState, useEffect  } from "react";
import kid01 from '../assets/images/kidImg04.jpg'
import kid02 from '../assets/images/kidImg02.jpg'
import kid03 from '../assets/images/kidImg03.jpg'
import BlogList from "./BlogList";

const Home = () => {
   const [blogs, setBlogs] = useState(null)
   const [isLoading, setIsLoading] = useState(true)
   
   const handleDelete = (id) => {
    const newBlogs =  blogs.filter((blog) => blog.id !== id);

    setBlogs(newBlogs);
   }

   const [name, setName] = useState('Angel')

   useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(response => response.json())
    .then(data => setBlogs(data))
    setIsLoading(false)

    // console.log('use effect ran');
    }, [name]); // the square [] is the useEffect dependency ensuriong it ocurs only on the first page (first render) load and not at every change of state. anlso the second kind of dependency [name]
            // manages/monitors or used to controll when the set useEffect function runs.   
    
    return ( <>
        <div className="home">
          {isLoading && <div>loading...</div>}
          {blogs && <BlogList blogs={blogs} title="Designs and Styles"/> }

            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Adiel' )} title="Trending" handleDelete={handleDelete}/> */}
            {/* <button onClick={() => setName('Angella')}>Click</button>
            <p>{name}</p> */}
        </div>
        
    </> );
}
 
export default Home;