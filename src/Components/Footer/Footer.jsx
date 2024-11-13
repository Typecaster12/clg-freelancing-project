// Footer.js
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Navigation Links */}
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#joinus">JoinUs</a></li>
                        <li><a href="#hire">Hire</a></li>
                        <li><a href="#qa">Quaries</a></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="footer-section social">
                    <h2>Follow Me</h2>
                    <div className="social-links">
                        <a href="#"><i className='bx bxl-facebook'></i></a>
                        <a href="#"><i className='bx bxl-linkedin'></i></a>
                        <a href="#"><i className='bx bxl-instagram'></i></a>
                        <a href="#"><i className='bx bxl-twitter'></i></a>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="footer-section contact">
                    <h2>Contact</h2>
                    <p><i className="fas fa-envelope"></i> email@yourdomain.com</p>
                    <p><i className="fas fa-phone"></i> +123 456 7890</p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>&copy; 2024 FreeLance It. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;