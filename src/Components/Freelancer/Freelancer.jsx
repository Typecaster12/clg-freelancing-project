
import './Freelancer.css';

const Freelancer = () => {
  return (
    <div className='main-container' id='freelancer'>

      {/* headings */}
      <div className="h1-heading">
        <h1 className='heading1'>Find The Right <span className='heading-span'>Freelancer</span></h1>
        <h1 className='heading2'>Service, Right Away..</h1>
      </div>

      {/* search bar  */}
      <div className="search-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="What services are you looking for?"
            className="search-input"
          />
          <button className="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* logos  */}
      <div className="logo-section">
        <span className='span1'>Trusted By:</span>

        <span className="logos">
          <i className='bx bxl-meta'></i>
          <i className='bx bxl-google'></i>
          <i className='bx bxl-linkedin-square'></i>
          <i className='bx bxl-paypal'></i>
          <i className='bx bxl-reddit'></i>
        </span>
      </div>

    </div>
  )
}

export default Freelancer;





