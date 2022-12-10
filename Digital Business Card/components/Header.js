import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import image from "../images/image.png";

export default function Header() {
  return (
    <div className="header">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <h1>Elisha</h1>
        <h2>Frontend Developer</h2>

        <a href="antilaman.netlify.app" className="website">
          antilaman.netlify.app
        </a>
        <div className="buttons">
          <a href="antilaman3113@gmail.com" className="email">
            <MdEmail />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/antilaman3113/"
            className="linkedIn"
          >
            <BsLinkedin />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
