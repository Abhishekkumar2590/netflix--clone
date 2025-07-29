import React from 'react'
import './Home.css'; // Assuming you have a Home.css for styles
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg'; // Update with your actual image path
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/Play_icon.png'; 
import info_icon from '../../assets/info_icon.png'; 
import TitleCard from '../../components/TitleCard/TitleCard'; // Assuming you have a TitleCard component
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className ="hero">
        <img src ={hero_banner}   alt=" "className='banner-img' />
        <div className="hero-caption"></div>
        <img src = {hero_title} alt ="" className = 'caption-img' />
        <p>Discovering his ties to  a  secret ancients order , a  young  man  living in  mordern Istanbul embark on  a quest to save the  city from  an  immortal energy</p>
        <div className="hero-btns">
            <button  className='btn'><img src={play_icon} alt="" />play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
        </div>
        <TitleCard />
      </div>
      <div className="more-card">
        <TitleCard title ={"Blockbuster movies"} category = {"top_rated"} />
        <TitleCard  title= {"Only on  Netflix"} category={"popular"}/>
        <TitleCard  title ={"upcoming"} category={"upcoming"}/>
        <TitleCard title= {"Top Pics for  You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
     
  )
}

export default Home


