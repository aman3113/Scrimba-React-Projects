import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <FaTwitterSquare className="icon" size={30} />
      <FaFacebookSquare className="icon" size={30} />
      <FaInstagramSquare className="icon" size={30} />
      <FaGithubSquare className="icon" size={30} />
    </div>
  );
}
