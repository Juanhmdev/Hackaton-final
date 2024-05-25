
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="row">
                    <a className='icon' href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a className='icon' href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a className='icon' href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                    <a className='icon' href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>

                <div className="row">
                    <ul>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Career</a></li>
                    </ul>
                </div>

                <div className="row">
                    <h4>Hackaton Final | Juan Hazaña Muñoz</h4>
                </div>
            </div>
        </footer>
    );
};

export default Footer;