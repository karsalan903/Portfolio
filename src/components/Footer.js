import "../components/FooterStyles.css";
import CottageIcon from '@mui/icons-material/Cottage';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footerContainer">
            <div className="left">
                <div className="location">
                  <CottageIcon style={{color: "#fff", marginRight: "2rem", marginTop: "10px"}}/>
                  <div>
                    <p>12, Ginnori, Bhopal</p>
                    <p>India</p>
                  </div>
                </div>
                <div className="phone">
                  <PhoneEnabledIcon style={{color: "#fff", marginRight: "2rem", marginTop: "10px"}}/>
                  <h4>
                    9827553665
                  </h4>
                </div>
                <div className="mail">
                  <EmailIcon style={{color: "#fff", marginRight: "2rem", marginTop: "10px"}}/>
                  <h4>
                    karsalan903@gmail.com
                  </h4>
                </div>
            </div>
            <div className="right">
              <h4 className="about">Hey, myself Arsalan Khan</h4>
              <p>Dedicated technology enthusiast with an insatiable curiosity for unravelling the complexities of our digital world.</p>
              <div className="social">
                <img src="/facebook.png" alt="social" height={30} style={{marginRight: "1rem"}}/>
                <img src="/twitter (1).png" alt="social" height={30} style={{marginRight: "1rem"}}/>
                <img src="/linkedin (1).png" alt="social" height={30} style={{marginRight: "1rem"}}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer