import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer bg-dark text-light">
            <Container>
                <Row className="rowbottom">
                    <Col md={3} className="footer-section">
                        <h6>If you need a bulk, wedding, or other function order, please call <span style={{color:'black'}}>6385622704</span>, and we will handle the event management for you.</h6>
                        <address>
                            <h5>Address</h5>
                            <p>Panaiyur, Virudhunagar, TamilNadu-626129</p>
                            <p>Email: <a href="mailto:vaigaicart@gmail.com">vaigaicart@gmail.com</a></p>
                            <p>Phone: <a href="tel:+916385622704">6385622704</a></p>
                        </address>
                    </Col>
                    <Col md={3} className="footer-section">
                        <h5>Policies & Info</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="footer-link">Home</Link></li>
                            <li><Link to="/" className="footer-link">About Us</Link></li>
                            <li><Link to="/disclaimer" className="footer-link">Disclaimer</Link></li>
                            <li><Link to="/privacypolicy" className="footer-link">Privacy Policies</Link></li>
                            <li><Link to="/termsconditions" className="footer-link">Terms & Conditions</Link></li>
                        </ul>
                    </Col>
                    <Col md={3} className="footer-section">
                        <h5>Delivery Areas</h5>
                        <ul className="list-unstyled">
                            <li>10km around Aruppukotai</li>
                            
                        </ul>
                    </Col>
                    <Col md={3} className="footer-section">
                        <h5>Follow Us</h5>
                        <div className="social-icons">
                            <Link to="https://www.facebook.com/profile.php?id=61561908425530" className="social-icon" aria-label="Facebook">
                                <i className="fa fa-facebook"></i>
                            </Link>
                            <Link to="https://www.instagram.com/vaigaicart.off" className="social-icon" aria-label="Instagram">
                                <i className="fa fa-instagram"></i>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-3">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Vaigai Cart. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
