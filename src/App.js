import {useState} from 'react';
import './App.css';

const awsNoVPN = 'http://54.219.73.135:8080/todos/1'
const awsVPN = 'http://172.31.4.148:8080/todos/1'

function App() {
  const [data, setData] = useState({});

  const fetchData = async () => await fetch(awsVPN)
    .then(response => response.json())
    .then(json => {
      setData(json);
      console.log(json)
    });

  return (
    <div className="App">
      <body>

        {data ? 
        <div className='App-header'>
          <button onClick={() => fetchData()}>
            Hit endpoint
          </button>
          <p data-testid='id'>Id: {data.id}</p>
          <p data-testid='title'>Title: {data.title}</p>
          <p data-testid='userId'>UserId: {data.userId}</p>
        </div>: null}
      </body>
    </div>
  );
}

export default App;
