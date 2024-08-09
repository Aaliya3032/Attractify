import './Footer.css'
const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    return (
        <div className='FooterContainer'>
            <div className='footer-container'>
             <div className='footer_inner'>
              <div className='c-footer'>
                <div className='layout'>
                    <div className='layout_item w-50'>
                       <div className='newsletter'>
                         <h3 className='newsletter_title'>
                            <b> Unlock the full potential of your online presence with our comprehensive web
                                        development services.
                                        We design, build, and optimize websites tailored to your unique needs. Elevate
                                        your digital presence
                                        today.</b>
                         </h3>
                         <form action="" className='footer-form'>
                            <input type="text" placeholder="Email Address"/>
                            <button className='footer-btn'>
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                            height="24" class="footer-svg">
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                                        </svg>
                            </button>
                         </form>
                       </div>
                    </div>
                    <div className='layout_item w-25'>
                        <nav className='c-nav-tool'>
                        <h4 className="c-nav-tool_title">Ask</h4>
                                <ul className="c-nav-tool_list">
                                    <li>
                                        <a href="#TOP" className="c-link">Details</a>
                                    </li>

                                    <li>
                                        <a href="#TOP" className="c-link">projects </a>
                                    </li>

                                    <li>
                                        <a href="#AboutUs" className="c-link">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#TOP" className="c-link">Help</a>
                                    </li>
                                </ul>
                        </nav>
                    </div>
                    <div className='layout_item w-25'>
                    <nav className="c-nav-tool">
                                <h4 className="c-nav-tool_title">Support</h4>
                                <ul className="c-nav-tool_list">

                                    <li className="c-nav-tool_item">
                                        <a href="#Testimonials" className="c-link">Testimonials </a>
                                    </li>

                                    <li className="c-nav-tool_item">
                                        <a href="#FAQ" className="c-link">Help &amp; FAQ</a>
                                    </li>

                                    <li className="c-nav-tool_item">
                                        <a href="#TOP" className="c-link">Terms &amp; Conditions</a>
                                    </li>

                                    <li className="c-nav-tool_item">
                                        <a href="#TOP" className="c-link">Privacy Policy</a>
                                    </li>

                                    <li className="c-nav-tool_item">
                                        <a href="#TOP" className="c-link">Contact</a>
                                    </li>


                                </ul>
                            </nav>
                    </div>
                </div>
                <div className='layout c-2'>
                      <div className='layout_item w-50'>
                         <ul className='flex'>
                         <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"
                                        className="footer-svg">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path
                                            d="M12 6.654a6.786 6.786 0 0 1 2.596 5.344A6.786 6.786 0 0 1 12 17.34a6.786 6.786 0 0 1-2.596-5.343A6.786 6.786 0 0 1 12 6.654zm-.87-.582A7.783 7.783 0 0 0 8.4 12a7.783 7.783 0 0 0 2.728 5.926 6.798 6.798 0 1 1 .003-11.854zm1.742 11.854A7.783 7.783 0 0 0 15.6 12a7.783 7.783 0 0 0-2.73-5.928 6.798 6.798 0 1 1 .003 11.854z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"
                                        className="footer-svg">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path
                                            d="M1 4h22v2H1V4zm0 14h22v2H1v-2zm18.622-3.086l-.174-.87h-1.949l-.31.863-1.562.003c1.005-2.406 1.75-4.19 2.236-5.348.127-.303.353-.457.685-.455.254.002.669.002 1.245 0L21 14.912l-1.378.003zm-1.684-2.062h1.256l-.47-2.18-.786 2.18zM7.872 9.106l1.57.002-2.427 5.806-1.59-.001c-.537-2.07-.932-3.606-1.184-4.605-.077-.307-.23-.521-.526-.622-.263-.09-.701-.23-1.315-.419v-.16h2.509c.434 0 .687.21.769.64l.62 3.289 1.574-3.93zm3.727.002l-1.24 5.805-1.495-.002 1.24-5.805 1.495.002zM14.631 9c.446 0 1.01.138 1.334.267l-.262 1.204c-.293-.118-.775-.277-1.18-.27-.59.009-.954.256-.954.493 0 .384.632.578 1.284.999.743.48.84.91.831 1.378-.01.971-.831 1.929-2.564 1.929-.791-.012-1.076-.078-1.72-.306l.272-1.256c.656.274.935.361 1.495.361.515 0 .956-.207.96-.568.002-.257-.155-.384-.732-.702-.577-.317-1.385-.756-1.375-1.64C12.033 9.759 13.107 9 14.63 9z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"
                                        className="footer-svg">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M15 17a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zM2 2h4v20H2V2z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"
                                        className="footer-svg">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path
                                            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-6v2h2v-2h1a2.5 2.5 0 0 0 2-4 2.5 2.5 0 0 0-2-4h-1V6h-2v2H8v8h3zm-1-3h4a.5.5 0 1 1 0 1h-4v-1zm0-3h4a.5.5 0 1 1 0 1h-4v-1z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"
                                        className="footer-svg">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path
                                            d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 3.993-.032.17a.804.804 0 0 1-.794.679H7.72a.483.483 0 0 1-.477-.558L7.418 21h1.518l.95-6.02h1.385c4.678 0 7.75-2.203 8.796-6.502zm-2.96-5.09c.762.868.983 1.81.752 3.285-.019.123-.04.24-.062.36-.735 3.773-3.089 5.446-6.956 5.446H8.957c-.63 0-1.174.414-1.354 1.002l-.014-.002-.93 5.894H3.121a.051.051 0 0 1-.05-.06l2.598-16.51A.95.95 0 0 1 6.607 2h5.976c2.183 0 3.716.469 4.523 1.388z" />
                                    </svg>
                                </li>
                         </ul>
                      </div>
                      <div className='layout_item w-25'>
                           <ul className='flex'>
                           <li>
                                    <a href="https://www.facebook.com/profile.php?id=61558529093502">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32"
                                            height="32" className="footer-svg">
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://wa.me/+918743046672">


                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="32"
                                            height="32" className="footer-svg">
                                            <path
                                                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/attractify_infotech?igsh=MTBuNDNoMWthZm9mOA==">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32"
                                            height="32" className="footer-svg">
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                                        </svg>
                                    </a>
                                </li>
                           </ul>
                      </div>
                      <div onClick={scrollToTop}  className='layout_item w-25 top-btn' style={{display:'flex',justifyContent:'end',alignItems:'center'}} id="myBtn" title="Go to top">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"
                                className="footer-svg" id="#Home">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10h3l-4-4-4 4h3v4h2v-4z" />
                            </svg>
                      </div>
                </div>
              </div>
             </div>
             <div className='footer_copyright'>
                <p>&copy; 2023 Attractify-Infotech Inc.</p>
             </div>
            </div>
        </div>
    )
}
export default Footer;