import './Main.css';
import mockup from '../images/image-mockups.png'
function Main() {
    return (

        <div className="main-content">
            <img src={mockup} alt="mobile-mockup" className="content-img"></img>
            <div className="content-txt">
                <h1 className="main-head">Next generation digital banking</h1>
                <p className="main-para">Take your financial life online. Your Eaybanking account
                will be a one-stop-shop for spending, saving, budgeting, investing
                and much more.</p>
                <button className="content-btn">Request Invite</button>
            </div>
        </div>
    )
}

export default Main;