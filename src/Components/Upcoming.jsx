import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Upcoming = () => {
  let [coming, setComing] = useState([])
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
    .then(res => res.json().then(data => {
        console.log(data.results);
        setComing(data.results);
    }))
},[])
let navigate=useNavigate();
  return (
    <div>
       <div>
          <h1>UpComing Movies</h1>
          <div className='cards'>
            {
              coming.map(data => {
                return (
                  <div className="card">
                    <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt={data.title} />
                    <div className="card-content">
                      <h2>{data.title}</h2>
                      <h3>{data.vote_average}</h3>
                      <button onClick={() => navigate("/view", { state: { data } })} >show</button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
    </div>
  )
}

export default Upcoming
