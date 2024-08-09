import "./Services.css";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
            mirror:true
        });
    }, []);


  return (
    <div className="ContainerServices">
      <h1>Our Services</h1>
      <div className="ServiceCardContainer">
        <div className="service-card service-card1" data-aos="fade-down">
          <div className="service-content">
          <h2>Web Design</h2>
          <h3>We will create and design your custom website from which you can gservice-service-row your
              business online.</h3>
          </div>
        </div>
        <div className="service-card service-card2" data-aos="fade-down">
          <div className="service-content">
          <h2>MANAGEMENT</h2>
                    <h3>Our management team brings years of industry experience to the table, ensuring effective
                        decision-making and successful outcomes.</h3>
          </div>
        </div>
        <div className="service-card service-card3" data-aos="fade-down">
          <div className="service-content">
          <h2>DIGITAL MARKETING STRATEGY</h2>
                    <h3> Our digital marketing strategies are crafted to drive measurable results, increase brand
                        visibility, and generate meaningful engagement.</h3>
          </div>
        </div>
      </div>
      <div className="ServiceCardContainer">
        <div className="service-card service-card4" data-aos="fade-down"> 
          <div className="service-content">
          <h2>DIGITAL BRANDING</h2>
                    <h3>Elevate your brand presence with our strategic digital branding solutions, designed to build
                        trust and credibility in the digital landscape.</h3>
          </div>
        </div>
        <div className="service-card service-card5" data-aos="fade-down">
          <div className="service-content">
          <h2> Social Media Intrgration</h2>
                    <h3>Leverage the power of social media integration to streamline communication, gather user
                        insights, and build a community around your brand.</h3>
          </div>
        </div>
        <div className="service-card service-card6" data-aos="fade-down">
          <div className="service-content">
          <h2> SEO Optimization</h2>
                    <h3>we provide wide range of seo service to make your site at top to reach your target customers
                        provided.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
