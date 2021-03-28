import './Blog.css';
import money from '../images/image-currency.jpg'
import resturant from '../images/image-restaurant.jpg'
import plane from '../images/image-plane.jpg'
import confetti from '../images/image-confetti.jpg'

function Blog() {
    return(
        <div className="blog">
          <h1 className="blog-head">Latest Articles</h1>
            <div class="thumbnail-container">
                <div className="thumbnail-one thumbnail">
                    <img src={money} alt="money" className="thumb-img imgone"></img>
                  <div className="blog-txt">
                    <h5>By Claire Robinson</h5>
                    <h4>Receive money in any currency with no fees</h4>
                    <p className="thumb-txt">The world is getting smaller and we're becoming
                    more mobile. So why should you be forced to only receive
                    money in a single...</p>
                  </div>
                </div>
                <div className="thumbnail-two thumbnail">
                    <img src={resturant} alt="resturant" className="thumb-img"></img>
                    <div className="blog-txt">
                        <h5>By Wilson Hutton</h5>
                        <h4>Treat yourself without worrying about money</h4>
                        <p className="thumb-txt">Our simple budgeting feature allows you to separate
                        out your spending and set realistic limits each month.
                        That means you...</p>
                    </div>
                </div>
                <div className="thumbnail-three thumbnail">
                    <img src={plane} alt="plane" className="thumb-img"></img>
                    <div className="blog-txt">
                        <h5>By Wilson Hutton</h5>
                        <h4>Take your Easyban card wherever you go</h4>
                        <p className="thumb-txt">We want you to enjoy your travels. This is why
                        we don't charge any fees on purchases while you're abroad.
                        We'll even show you...</p>
                    </div>
                </div>
                <div className="thumbnail-four thumbnail">
                    <img src={confetti} alt="confetti" className="thumb-img"></img>
                    <div className="blog-txt">
                        <h5>By Claire Robinson</h5>
                        <h4>Our invite-only Beta accounts are now live!</h4>
                        <p className="thumb-txt">After a lot of hard work by the whole team, we're
                        excited to launch our closed beta. It's easy to request
                        an invite through the site...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;