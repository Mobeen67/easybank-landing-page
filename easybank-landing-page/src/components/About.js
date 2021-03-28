import './About.css';
import banking from '../images/icon-online.svg'
import budgeting from '../images/icon-budgeting.svg'
import onboarding from '../images/icon-onboarding.svg'
import api from '../images/icon-api.svg'

function About() {
    return (
        <div className="about">
          <div className="about-txt">
             <h1 className="about-head">Why choose Easybanking?</h1>
             <p className="aboutt-para">We leverage Open Banking to turn your bank account into your
             financial hub. Control your finances like never before.</p>
          </div>
          <div className="about-content">
             <div className="about-cardOne about--cards">
               <img src={banking} alt="online-banking"></img>
                <h2 className="card-head">Online Banking</h2>
                <p className="about-para">Our modern web and mobile applications allow you to
                keep track of your finances wharever you are in the world.</p>
             </div>
             <div className="about-cardTwo about--cards">
               <img src={budgeting} alt="Simple-budgeting"></img>
                <h2 className="card-head">Simple Budgeting</h2>
                <p className="about-para">Our modern web and mobile applications allow you to
                keep track of your finances wharever you are in the world.</p>
             </div>
             <div className="about-cardThree about--cards">
                <img src={onboarding} alt="Simple-budgeting"></img>
                 <h2 className="card-head">Fast Onboarding</h2>
                 <p className="about-para">We don't do branches. Open your account in minutes
                 online and start taking control of your finances right away.</p>
            </div>
            <div className="about-cardFour about--cards">
                <img src={api} alt="Simple-budgeting"></img>
                 <h2 className="card-head">Open API</h2>
                 <p className="about-para">Manage your saving, investments, pension, and much more
                 from one account. Tracking your money has never been easier.</p>
            </div>
          </div>
        </div>
    )
}
export default About;