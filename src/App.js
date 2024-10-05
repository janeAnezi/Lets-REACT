import './App.css';

function App() {
  const title = "welcome to pabv kidies"
  const link = "https://www.google.com"

  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
        <p>{title}</p>
        <p>{ Math.random() * 10 }</p>
        <p><a href={link} target="_blank" rel="noopener noreferrer">Google link</a></p>
      </div>
    </div>
  );
}

export default App;
