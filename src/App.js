import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Row title= "NETFLIX ORIGINALS" 
      fetchURL={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title=" Trending Now" fetchURL={requests.fetchTrending}/>
      <Row title=" Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title=" Comedy" fetchURL={requests.fetchComedyMovies}/>
      <Row title=" Horror" fetchURL={requests.fetchHorrorMovies}/>
      <Row title=" Action" fetchURL={requests.fetchActionMovies}/>
      <Row title=" Romance" fetchURL={requests.fetchRomanceMovies}/>
      <Row title=" Documentry" fetchURL={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
