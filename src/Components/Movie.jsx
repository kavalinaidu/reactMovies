import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import {  useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../Components/Movie.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Movie = () => {
  let [movie, setMovie] = useState([])
  let[search,setSearch]=useState("")
     function fetchData() {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=6957b9a83c7a116cb337aebd2343b310`)
        .then(res => res.json())
        .then(data => {
            // console.log(data.results);
           setMovie(data.results)
        })
    }
  useEffect(() => {
      fetch('https://api.themoviedb.org/3/trending/movie/day?&api_key=6957b9a83c7a116cb337aebd2343b310&language=en-US').then(res => res.json().then(data => {
          // console.log(data.results);
          setMovie(data.results);
      }))
  },[])
  let navigate=useNavigate();
  return (
    <div>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e)=>{setSearch(e.target.value)}}
            />
            <Button variant="outline-success" onClick={fetchData}>Search</Button>
          </Form>
      <div>
      <Carousel>
                {
                    movie.map(items => {
                        return (
                            <div>
                                <img src={`https://image.tmdb.org/t/p/original/${items.backdrop_path}`} alt='' />
                                <p className="legend">
                                    <h1>{items.title}</h1>
                                    <h1>{items.overview}</h1>
                                    <h1>{items.vote_average}</h1>
                                </p>

                            </div>
                        )
                    })}
            </Carousel>
      </div>
      <div>
            <h1> All Movies</h1>
          <div className='cards'>
          {
            movie.map(data=>{
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

export default Movie
