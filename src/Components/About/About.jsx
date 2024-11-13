import './About.css';
import AboutImg from '../../assets/about.webp';
import Info from './Info';


const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className='section__title'>Know About Us..</h2>
            <span className='section__subtitle'>Everything you need to know</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className='about__img' />

                <div className="about__data">
                    <Info />

                    <p className="about__description">
                        At Freelance It, we connect talented freelancers with clients seeking top-tier skills and innovative solutions. Our platform is designed to empower both freelancers and businesses, fostering a collaborative community where creativity and professionalism thrive. We believe in seamless, flexible working partnerships that drive success, helping projects flourish and bringing visions to life.
                    </p>

                    <a href="#" className="button button--flex">Know More</a>
                </div>
            </div>
        </section>
    )
}

export default About;
