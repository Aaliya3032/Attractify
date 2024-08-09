import video from './hero-background-video.mp4';
import './Header2.css';

const Header2 = () => {
return (
    <header className='landing'>
    <video src={video} autoPlay muted loop className='Hvideo'></video>
    <div className='Vcard'>
           <h3>A CREATIVE AGENCY Digital <br/> MARKETING NEAR</h3>
           <h4>We craft SEO,Web Design,<br/> and Digital Marketing Services</h4>
           {/* <button className='Hbutton'>ABOUT MORE</button> */}
           <button className="animation-btn">
              <span className="animation-btn_lg">
                <span className="animation-btn_sl"></span>
                <span className="animation-btn_text">ABOUT MORE</span>
              </span>
            </button>
    </div>
    </header>
)
}
export default Header2;