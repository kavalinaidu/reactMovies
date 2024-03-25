import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/Navbar.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


const Navbar = () => {
    let[search,setSearch]=useState("")
    let [movie, setMovie] = useState([])
    function fetchData() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=6957b9a83c7a116cb337aebd2343b310`)
          .then(res => res.json())
          .then(data => {
              // console.log(data.results);
             setMovie(data.results)
          })
      }
return (
    <div className='header'>
        <div className="headerLeft">
            <Link to="/"><img className='header_icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" /></Link>
            <Link to="/popular">Popular</Link>
            <Link to="/rated">Top Rated</Link>
            <Link to="/coming">Upcoming</Link>
        </div>
         <div>
            <input
              type="search"
              placeholder="Enter a Movie Name"
              className="m"
              value={search}
              onChange={(e)=>{setSearch(e.target.value)}}
            />
            <Button variant="outline-success" className='me' onClick={fetchData} >Search</Button>
          
         </div>
    </div>
)
}

export default Navbar
