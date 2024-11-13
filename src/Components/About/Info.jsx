/* eslint-disable react/no-unescaped-entities */

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className='bx bxs-award about__icon'></i>
                <h3 className="about__title">Future Vision</h3>
                <span className="about__subtitle">To Work WorldWide.</span>
            </div>

            <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">Satisfied Users</h3>
                <span className="about__subtitle">Over 20k+ satisfied users.</span>
            </div>

            <div className="about__box">
                <i className="bx bx-support about__icon"></i>
                <h3 className="about__title">Safety and Security</h3>
                <span className="about__subtitle">All the users's data is safe</span>
            </div>
        </div>
    )
}

export default Info;
