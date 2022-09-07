import "./Header.css";
import movie from './movie.png'

const Header = () => {
  return (

    <div className="main-h">
        <img src={movie} />
    <span onClick={() => window.scroll(0, 0)} className="header">
    
     Movie Details 
    </span>

    </div>
  );
};

export default Header;
