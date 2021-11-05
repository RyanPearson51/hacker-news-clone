import React, {useState, useEffect} from "react";
import Articles from './components/Articles'

//need to add api link
const API_URL = ``


function App() {

  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setArticles(data.results));
      console.log('i mounted')
  }, [])


  return (
    <div className="App">
      <Articles articles={articles}/>
    </div>
  );
}

export default App;
