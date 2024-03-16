import "./Header.css";
import image from "../image-one.jpg";
const Header = () => {
  return (
    <div className="header">
      <h2>Header Component</h2>
      <img src={image} alt="image-1" />
      <p>{4 + 5}</p>
    </div>
  );
};

export default Header;
