import React from "react";
import './Showcase.css';
import bedroom from '../img/bedroom.jpg';
/*
import atrium from '..img/atrium.jpg';
import diningroom from '../img/dinning.jpg';
import kitchen from '../img/kitchenconcrete.jpg';
*/function Showcase() {
    return (<>
    <div className="main">
        <h1>Interior Design</h1> 
        <h2>Showcase.</h2>
      <div className="con">
        <img src="img/kitchenconcrete.jpg" alt="Здесь была картинка"/>
        <hr/>   
        <img src="img/kitchenconcrete.jpg" alt="Здесь была картинка"/>
        </div> 
        <div className="cun">
        <img src="img/atrium.jpg" alt="Здесь была картинка"/>
        </div>
        <div className="con">
           <img src="img/livingroom.jpg" alt="Здесь была картинка"/>
        </div>
        <div className="cun">
           <img src="img/diningroom.jpg" alt="Здесь была картинка"/>
        </div>
        <div className="con">
           <img src = {bedroom} alt="Здесь была картинка"/>
        </div>
        <div className="cun"> 
           <img src="img/livingroom2.jpg" alt="Здесь была картинка"/>
        </div>
   </div> </>
    );
} 
export default Showcase