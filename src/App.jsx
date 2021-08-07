import Square from './components/Square';
import './App.scss';

function App() {
  const squares = 500;

  return (
    <div className="App">
      <div className="container">
        {squares > 0 &&
          [...Array(squares)].map((_, index) => <Square key={index} />)}
      </div>
    </div>
  );
}

export default App;
