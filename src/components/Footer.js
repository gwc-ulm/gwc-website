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
               <p><FaPhone size={20}/>  123-1234-123</p><br/>
               <p><FaUniversity size={20}/>  Uni Ave 700, Monroe, La, 71212</p><br/>
               <p><MdEmail size={20}/> GWCULMonroe@ulm.edu</p><br/>
             </div>

             <div className="footer-right">
               <p>SOCIALS</p>
               
               <a href=""><FaLinkedin size={20}  style={{marginRight:"30px", color:"black"}}/></a>
               <a href=""><FaInstagram size={20} style={{marginRight:"30px", color: "black"}}/></a>
               <a href=""><FaDiscord size={20} style={{marginRight:"30px", color: "black"}}/></a>
               <a href=""><SiGroupme size={20} style={{marginRight:"30px", color: "black"}}/></a>
               <a href=""><BsMessenger size={20} style={{marginRight:"30px", color: "black"}}/></a>
      
             </div>
        </div>
        </>
    );
}
export default Footer;
