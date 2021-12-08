import React,{useState, useEffect} from 'react'
import axios from './axios'; // as we have declared export default instance, we can change the name while importing
// If it was not default then we had to do like import instance from './axios'.
import "./row.css";


const Row = ({title, fetchURL, isLargeRow}) => {
    const[movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        // if [], run once when the row loads, and dont run again
        async function fetchData() {
            const requests = await axios.get(fetchURL);                                                                                                        
            setMovies(requests.data.results);
            return requests;
        }
        fetchData();
    }, [fetchURL]);


    // console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posts">
                {movies.map(movie =>(
                    <img 
                    key={movie.id}
                    className={`row_post ${isLargeRow && "row_postLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}/>
                ))}
            </div>
        </div>
    )
}

export default Row;
