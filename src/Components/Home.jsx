const Home = () => {

    const handleClick = (e) => {
        console.log('Button clicked', e);
    }

    const handleClickAgain = (name, e) => {
        console.log(`${name}, You clicked the Button again`, e);
    }
    return ( <>
        <h1 className="home"> This is the body of the post</h1>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={(e) => {handleClickAgain('Jane', e)}}>Click Again</button>
    </> );
}
 
export default Home;