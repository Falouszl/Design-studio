import React from "react";
import './Team.css';
function Team() {
  return  (<>
  <div className="main">
    <h2>Designers.</h2>
    <hr/>
    <p>The best team in the world.</p>
            <p>
                We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p><b>Our designers are thoughtfully chosen</b>:</p>

    </div>
    <div id="team">
    <div className="member">
    <img src="img/team2.jpg" alt="Здесь была картинка"/>
    <div className="description">
        <h2><b>John Doe</b></h2>
        <p className="position">CEO  Founder</p>
        <p className="simple">Phaellus eget enim eu lectus faucibus vestibulum. Suspendisse sondales pellentesque elementum.</p>
    </div>

    </div>
    



    <div className="member2">
    <img src="img/team1.jpg" alt="Здесь была картинка"/>
    <div clasName="description">
        <h2><b>Jane Doe</b></h2>
        <p className="position">Designer</p>
        <p className="simple">Phaellus eget enim eu lectus faucibus vestibulum. Suspendisse sondales pellentesque elementum.</p>
    </div>

    </div>


    <div className="member3">
        <img src="img/team3.jpg" alt="Здесь была картинка"/>
        <div className="description">
            <h2><b>Mike Ross</b></h2>
            <p className="position">Architects</p>
            <p className="simple">Phaellus eget enim eu lectus faucibus vestibulum. Suspendisse sondales pellentesque elementum.</p>
        </div>

        </div>
    
    </div>
    </>
  );
}
export default Team; 