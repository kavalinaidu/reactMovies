import React from 'react'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import YouTube from 'react-youtube';
import '../Components/View.css';
const View = () => {
    const opts = {
        height: '390',
        width: '640',
      };
    let location=useLocation();
let specific = location.state.data;
let [trailer,setTrailer]=useState("")
async function searchTrailer(id){
    fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=6957b9a83c7a116cb337aebd2343b310`)
    .then(res=>res.json())
    .then(data=>setTrailer(data.results[0].key))
}
  return (
    <div className="view-container">
         <div className="movie-details">
         <h1>View Page </h1>
         <h1>{specific.title}</h1>
         <img src={`https://image.tmdb.org/t/p/original/${specific.backdrop_path}`} style={{height:"100px",width:"100px"}} alt="" /> <br />

           <button onClick={()=>searchTrailer(specific.id)}>Trailer</button>
           <Link to="/"><button>back</button></Link>
           {
            trailer && (
              <div className="trailer"> <YouTube videoId={trailer} opts={opts}/></div>
           )}
        </div>
    </div>
  )
}

export default View
