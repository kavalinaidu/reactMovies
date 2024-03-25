import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Popular = () => {
  let[view,setView]=useState([])
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
    .then(res => res.json().then(data => {
        console.log(data.results);
        setView(data.results);
    }))
},[])
let navigate=useNavigate();
  return (
    <div>
      <div>
            <h1>Popular  Movies</h1>
          <div className='cards'>
          {
            view.map(data=>{
              return(
                <div className="card">
                <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt={data.title} />
                <div className="card-content">
                  <h2>{data.title}</h2>
                  <button onClick={()=>navigate("/view",{state:{data}})} >show</button>
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

export default Popular
