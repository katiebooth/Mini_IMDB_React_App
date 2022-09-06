import './App.css';
import FilmsContainer from './containers/FilmsContainer';

function App() {
  return (
    <div className="films-container">
      <h1>Upcoming Film Releases for UK</h1>
      <hr></hr>
      <FilmsContainer/>
      <hr></hr>
      <a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases</a>
    </div>
  );
}

export default App;
