import './App.css';
import FilmsContainer from './containers/FilmsContainer';

function App() {
  return (
    <div className="films-container">
      <h1>Upcoming Film Releases for UK</h1>
      <hr></hr>
      <div className="films-list">
      <FilmsContainer/>
      </div>
      <hr></hr>
      <div class="footer">
      <a href="https://www.imdb.com/calendar/?region=gb">Click here to view more upcoming releases!</a>
      </div>
    </div>
  );
}

export default App;
