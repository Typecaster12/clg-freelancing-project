/* eslint-disable react/no-unescaped-entities */
import './JoinUs.css';
import { FaUserTie, FaLaptopCode } from 'react-icons/fa';
import './JoinUs.css';

const JoinUs = () => {
    return (
        <section className="join-us-section" id='joinus'>
            <div className="join-us-container">
                <h3 className='join__title'>Join Us</h3>
                <span className="join_subtitle">Become One Of Us..</span>
                <p className="join-description">
                    Whether you're looking to hire top talent or showcase your skills, we're here to make it happen.
                </p>
                <div className="join-options">
                    <div className="join-option">
                        <FaUserTie className="icon" />
                        <h3>For Customers</h3>
                        <p>Discover expert freelancers for your project needs.</p>
                        <button className="join-button">Join as a Customer</button>
                    </div>
                    <div className="join-option">
                        <FaLaptopCode className="icon" />
                        <h3>For Freelancers</h3>
                        <p>Showcase your skills and connect with clients.</p>
                        <button className="join-button">Join as a Freelancer</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JoinUs;
