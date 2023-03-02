import './Application.css';
import { useNavigate, Link } from "react-router-dom";
import { useState, useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Application = () => {
  const { signout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignout = async () => {
    try {
      await signout();
      navigate("/signin")
    } catch (err) {
      console.log(err)
    }
  };
  
//Possibly rewrite this shit, even though it technically works
  const [navRender, setNavRender] = useState(1);

  const viewFirst = () => {
    setNavRender(1);
  };
  const viewSecond = () => {
    setNavRender(2);
  };
  const viewThird = () => {
    setNavRender(3);
  };
  const viewFourth = () => {
    setNavRender(4);
  };
  const viewFifth = () => {
    setNavRender(5);
  };
  const viewSixth = () => {
    setNavRender(6);
  };

  const viewRender = () => {
    if (navRender == 1) {
      //Import and return component for each thingy in here
      return <h1>VOICE/VIDEO CALL</h1>
    } else if (navRender == 2) {
      return <h1>MESSAGING</h1>
    } else if (navRender == 3) {
      return <h1>SCHEDULE</h1>
    } else if (navRender == 4) {
      return <h1>PROGRESS</h1>
    } else if (navRender == 5) {
      return <h1>WORKOUT PLAN</h1>
    } else if (navRender == 6) {
      return <h1>MEAL PLAN</h1>
    }
  }
  return (
    <div className="app">
      <div className="application">
        <div className="nav">
          <nav className="navList">
            <ul>
              <a href="#" onClick={viewFirst}><li className="navTop">Video/Voice call</li></a>
              <a href="#" onClick={viewSecond}><li>Messaging</li></a>
              <a href="#" onClick={viewThird}><li>Schedule</li></a>
              <a href="#" onClick={viewFourth}><li>Progress</li></a>
              <a href="#" onClick={viewFifth}><li>Workout Plan</li></a>
              <a href="#" onClick={viewSixth}><li className="navBottom">Meal Plan</li></a>
            </ul>
            <ul className="bottomNav">
              <a href="#"><li>Options</li></a>
              <a href="#" onClick={handleSignout}><li className="navBottom">Sign Out</li></a>
            </ul>
          </nav>
        </div>
        <div className="view">
          {viewRender()}
        </div>
      </div>
    </div>
  );
}

export default Application;
