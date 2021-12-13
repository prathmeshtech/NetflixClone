import React from 'react'
import Row from '../../Row/Row';
import requests from '../../requests';
import Banner from '../../Banner/Banner';
import Navbar from '../../Navbar/Navbar';

const HomeScreen = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Row title= "NETFLIX ORIGINALS" 
            fetchURL={requests.fetchNetflixOriginals}
            isLargeRow
            />
            <Row title=" Trending Now" fetchURL={requests.fetchTrending}/>
            <Row title=" Top Rated" fetchURL={requests.fetchTopRated}/>
            <Row title=" Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
            <Row title=" Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
            <Row title=" Action Movies" fetchURL={requests.fetchActionMovies}/>
            <Row title=" Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
            <Row title=" Documentry Movies" fetchURL={requests.fetchDocumentaries}/>
        </div>
    )
}

export default HomeScreen
