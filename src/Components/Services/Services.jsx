// import { useState } from 'react';
import './Services.css';

const Services = () => {
    // const [toggleState, setToggleState] = useState(0);

    // const toggleTab = (index) => {
    //     setToggleState(index);
    // }

    return (
        <section className="services section" id="services">
            <h2 className='section__title'>What We Offer..</h2>
            <span className='section__subtitle'>Our most popural services</span>

            <div className="service__container container grid">
                <div className="service__content">
                    <div>
                        <i className='uil uil-web-grid services__icon'></i>
                        <h3 className='services__title'>Product <br /> Designer</h3>
                    </div>

                    {/* onClick  */}
                    <span className='services__button' >View More <i className='uil uil-arrow-right services__button-icon'></i></span>
                </div>

                <div className="service__content">
                    <div>
                        <i className='uil uil-arrow services__icon'></i>
                        <h3 className='services__title'>Ui/Ux <br /> Designer</h3>
                    </div>

                    <span className='services__button'>View More <i className='uil uil-arrow-right services__button-icon'></i></span>
                </div>

                <div className="service__content">
                    <div>
                        <i className='uil uil-edit services__icon'></i>
                        <h3 className='services__title'>Visual <br /> Designer</h3>
                    </div>

                    <span className='services__button'>View More <i className='uil uil-arrow-right services__button-icon'></i></span>
                </div>

                <div className="service__content">
                    <div>
                        <i className='uil uil-edit services__icon'></i>
                        <h3 className='services__title'>Visual <br /> Designer</h3>
                    </div>

                    <span className='services__button'>View More <i className='uil uil-arrow-right services__button-icon'></i></span>
                </div>

                <div className="service__content">
                    <div>
                        <i className='uil uil-edit services__icon'></i>
                        <h3 className='services__title'>Visual <br /> Designer</h3>
                    </div>

                    <span className='services__button'>View More <i className='uil uil-arrow-right services__button-icon'></i></span>
                </div>
                
                <div className="service__content">
                    <div>
                        <i className='uil uil-edit services__icon'></i>
                        <h3 className='services__title'>Visual <br /> Designer</h3>
                    </div>

                    <span className='services__button'>View More <i className='uil uil-arrow-right services__button-icon'></i></span>
                </div>
            </div>
        </section>
    )
}

export default Services;
