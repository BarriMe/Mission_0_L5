import './App.css'
import Cappy from '../public/cappybara.webp'
import Cappy2 from "../public/cappybara2.webp";
import Cappy3 from "../public/cappybara3.jpg";


function App() {

  return (
    <>
      <div>
        <header>
          <h2 className="header">TrashPanda Co.</h2>
          <br></br>
          <div className="Search">
            <button> Home</button>
            <button>Contact Us</button>
            <button>About Us</button>
            <button>Login</button>
          </div>
        </header>
        <div>
          <br></br>
          <h3 style={{color: "black", background: "white", display: "inline", padding: "7px"}}>Search Bar:</h3>
          <br></br>
          <input></input>
          <button className='searchBtn'>Search!</button>
          <br></br>
        </div>

        <div className="centreDiv">
          <img className="centreImages" src={Cappy}></img>
          <h3 className="title">Cappybara with Children</h3>
          <img className="centreImages" src={Cappy2}></img>
          <h3 className="title">Cappybara with Children 2</h3>
          <img className="centreImages" src={Cappy3}></img>
          <h3 className="title">Cappybara with Siblings</h3>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
      <footer className="footer">MADE BY TRASHPANDA CO. 2024</footer>
    </>
  );
}

export default App
