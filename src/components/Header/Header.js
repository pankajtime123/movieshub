import "./Header.css";
import movie from './movie.png'

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      <img 
      style={{
        width:"2rem",
        height:"2rem",
        paddingRight:"1rem"
      }}
      src={movie} /> Movie Details 
    </span>
  );
};

export default Header;
