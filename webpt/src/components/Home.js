import './Home.css';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className="Home">
      <home>
        <nav className="navbar">
          <ul className="homeNav">
            <li className="logo"><span>Web</span>PT</li>
            <a href="#" className="navItem"><li>About</li></a>
            <a href="#" className="navItem"><li>Features</li></a>
            <a href="#" className="navItem"><li>Become a remote PT</li></a>
            <Link to="/signin" className="navButton"><li>Log in</li></Link>
            <Link to="/signup" className="navButton"><li>Sign up</li></Link>
          </ul>
        </nav>
        <div className="home">
          <div className="webTutor">
            <h2 className="web">Web</h2>
            <h2 className="tutor">Tutor</h2>
          </div>
        </div>
        <div className="about">
          <div>
            <h3>What is Web Tutor?</h3>
            <p>webPT is a cross-platform application for personal trainers, coaches, and nutritionists to help their clients succeed in their goals. The application allows for direct messaging, voice and video calls to make remote sessions easier and helps form a personal connection. Your coach will help you start a healthier lifestyle and guide you through your journey, as well as helping you develop healthier habits that will benefit you long term. webPT is available for free for clients.</p>
          </div>
        </div>
        <div className="features">

          <div className="feature odd">
            <div className="text">
              <h2>Voice and Video calling</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="featureimg">
            </div>
          </div>

          <div className="feature">
            <div className="featureimg"></div>
            <div className="text">
              <h2>Direct messaging</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>

          <div className="feature odd">
            <div className="text">
              <h2>Weekly remote sessions</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="featureimg"></div>
          </div>

          <div className="feature">
            <div className="featureimg"></div>
            <div className="text">
              <h2>Customised programs</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>

          <div className="feature odd">
            <div className="text">
              <h2>Nutrition coaching</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="featureimg"></div>
          </div>

          <div className="feature">
            <div className="featureimg"></div>
            <div className="text">
              <h2>Meal plans</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>

        <div className="plans">

          <div className="plan">

            <h3>Starter Plan</h3>
            <p>749currency/time</p>
            <p>This includes a training program, or training plan, made for you, goals, schedule, and preferences. You will be getting 2 weekly 50 minute video sessions with your tutorer, your tutorer will also be available to answer your questions in the app and help you along the way.</p>

            <div className="buttonWrapper">
              <button>Choose Plan</button>
            </div>

          </div>


          <div className="plan">

            <h3>Standard Plan</h3>
            <p>1499currency/time</p>
            <p>This includes a training program, or training plan, made for you, goals, schedule, and preferences. You will be getting 2 weekly 50 minute video sessions with your tutorer, your tutorer will also be available to answer your questions in the app and help you along the way.</p>

            <div className="buttonWrapper">
              <button>Choose Plan</button>
            </div>

          </div>


          <div className="plan">

            <h3>Premium Plan</h3>
            <p>2499currency/time</p>
            <p>This includes a training program, or training plan, made for you, goals, schedule, and preferences. You will be getting 2 weekly 50 minute video sessions with your tutorer, your tutorer will also be available to answer your questions in the app and help you along the way.</p>

            <div className="buttonWrapper">
              <button>Choose Plan</button>
            </div>

          </div>

        </div>
        <div className="footer">

        </div>
      </home>
    </div>
  );
}

export default Home;
