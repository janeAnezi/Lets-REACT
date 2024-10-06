const Home = () => {

    const handleClick = () => {
        console.log('Button clicked');
    }

    const handleClickAgain = (name) => {
        console.log(`${name}, You clicked the Button again`);
    }
    return ( <>
        <h1 className="home"> This is the body of the post</h1>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={() => {handleClickAgain('Jane')}}>Click Again</button>
    </> );
}
 
export default Home;