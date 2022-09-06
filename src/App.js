import './App.css';
import FilmList from './components/FilmList';

function App() {
  return (
    <div className="films-container">
      <h1>Upcoming Film Releases for UK</h1>
      <hr></hr>
      <FilmList/>
      <hr></hr>
      <p>This will be the footer which will be a link</p>
    </div>
  );
}

export default App;
