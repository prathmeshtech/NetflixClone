import axios from '../axios';
import React,{useState,useEffect} from 'react'
import requests from '../requests';
import "./Banner.css";

const Banner = () => {
    const [movie, setMovie] =  useState([]);

    useEffect(() => {
        async function fetchData()
        {
            const request = await axios.get(requests.fetchNetflixOriginals);
            // console.log(request.data.results);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);
    return (
        <header className="banner"
            style = {{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_title} 
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    {movie?.overview}
                </h1>
            </div>
            <div className="banner_fadeBottom"/>
        </header>
    )
}

export default Banner
