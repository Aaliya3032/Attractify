import './Header1.css';
import Hlogo  from './main-logo.jpg';

const Header1 = () => {
    return(
        <header id='TOP' className='header'>
         <ul className="header-ul">
            <li className="header-li"><img src={Hlogo} alt="logo" height = '90px' width = '90px' /></li>
            <li className="header-li">Home</li>
            <li className="header-li">Service</li>
            <li className="header-li">Project</li>
            <li className="header-li">About</li>
            <li className="header-li">Contact</li>
         </ul>
        </header>
    )
}
export default Header1;