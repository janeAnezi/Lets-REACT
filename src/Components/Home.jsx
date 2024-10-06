import { useState } from "react";

const Home = () => {
   const [name, setName] = useState('Jane')
    const handleClick = () => {
       setName('Anezi');
    }

   
    return ( <>
        <h1 className="home"> This is the body of the post</h1>
        <p>{name}</p>
        <button onClick={handleClick}>Click Me</button>
        
    </> );
}
 
export default Home;