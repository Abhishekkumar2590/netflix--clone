import React, { useRef, useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'; // Fix import
import './TitleCard.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCard = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();
  const cardsRef = useRef();
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjkwNGUxYWUxYTYwZTMzMzZkYmFkYzBhNmY2NDQ2NSIsIm5iZiI6MTc1MzUxNTA2MC41MzIsInN1YiI6IjY4ODQ4NDM0ZWYzYzQ3YWI4YjU1ZWI1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8PRd5N1__K20Ejjl1m9OcZxtL5iuZoclhYA0VOkQ4hk'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results || []))
      .catch(err => console.error(err));

    const handleWheel = (event) => {
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaY;
    };
    const refCurrent = cardsRef.current;
    if (refCurrent) {
      refCurrent.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener('wheel', handleWheel);
      }
    };
  }, [category]);

  return (
    <div className='title-card'>
      <h2>{title ? title : "popular on netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link className='card-link' to={`/player/${card.id}`} key={index}>
            <div className="card" style={{ cursor: 'pointer' }}>
              <img src={'https://image.tmdb.org/t/p/w500' + card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TitleCard
