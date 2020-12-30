import './App.css';
import Img from './assets/cats.jpg'

import List from './containers/List/List'

const products = [
  { img: Img, title: "Title 1", description: "Description 1" },
  { img: Img, title: "Title 2", description: "Description 2" },
  { img: Img, title: "Title 3", description: "Description 3" },
  { img: Img, title: "Title 4", description: "Description 4" },
  { img: Img, title: "Title 5", description: "Description 5" },
];

const App = () => {
  return (
    <div className="App">
        <List products = {products}/>
    </div>
  );
}

export default App;
