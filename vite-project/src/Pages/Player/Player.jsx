import React, { useEffect } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams, useNavigate } from 'react-router-dom' // <-- FIXED

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // <-- FIXED

  const [apiData, setApiData] = React.useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjkwNGUxYWUxYTYwZTMzMzZkYmFkYzBhNmY2NDQ2NSIsIm5iZiI6MTc1MzUxNTA2MC41MzIsInN1YiI6IjY4ODQ4NDM0ZWYzYzQ3YWI4YjU1ZWI1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8PRd5N1__K20Ejjl1m9OcZxtL5iuZoclhYA0VOkQ4hk'
    }
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results?.[0] || {}))
      .catch(err => console.error(err))
  }, [id])

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-1)}}/> {/* <-- FIXED */}
      <div className="player-video-wrapper">
        <iframe
          width="100%"
          height="390"
          src={apiData.key ? `https://www.youtube.com/embed/${apiData.key}` : ''}
          title="trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="player-info">
        <p>{apiData.published_at ? apiData.published_at.slice(0, 10) : ''}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
