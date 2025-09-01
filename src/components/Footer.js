import "./FooterStyle.css";

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { SiGroupme } from "react-icons/si";
import { BsMessenger } from "react-icons/bs";


function Footer(){
    return(
        <>

        <div className="footer-main">
             <div className="footer-left">
               <p><FaPhone size={20}/>  (318) 342-1000</p><br/>
               <p><FaUniversity size={20}/>  700 University Ave, Monroe, LA 71209</p><br/>
               <p><MdEmail size={20}/> girlswhocodeulm@gmail.com</p><br/>
             </div>

             <div className="footer-right">
               <p>SOCIALS</p>
               
               <a href="https://www.linkedin.com/company/girlswhocode-ulm/posts/?feedView=all"><FaLinkedin size={20}  style={{marginRight:"30px", color:"black"}}/></a>
               <a href="https://www.instagram.com/girlswhocode_ulm/"><FaInstagram size={20} style={{marginRight:"30px", color: "black"}}/></a>
               <a href=""><SiGroupme size={20} style={{marginRight:"30px", color: "black"}}/></a>
               <a href=""><BsMessenger size={20} style={{marginRight:"30px", color: "black"}}/></a>
      
             </div>
        </div>
        </>
    );
}
export default Footer;
