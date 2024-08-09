import "./Statistics.css";
import React, { useEffect } from "react";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faFaceSmile,
  faCoffee,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import WOW from "wowjs";
import AOS from "aos";
import "aos/dist/aos.css";

const Statistics = () => {
  useEffect(() => {
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
    }).init();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="StatisticsContainer">
      <div className="StatisticsTitle">
        <h2>Projects statistics</h2>
        <span className="PSLine"></span>
      </div>
      <div className="statisticsClass" data-aos="fade-down">
        <div className="fullWidth eight columns">
          <div className="projectsFactsWrap">
            <div
              className="item wow fadeInUpBig animated animated"
              style={{ visibility: "visible" }}
            >
              <FontAwesomeIcon icon={faBriefcase} className="icon" size="2x" />
              <p className="number">17</p>
              <span></span>
              <p>Projects done</p>
            </div>
            <div
              className="item wow fadeInUpBig animated animated"
              style={{ visibility: "visible" }}
            >
              <FontAwesomeIcon icon={faFaceSmile} className="icon" size="2x"/>
              <p className="number">25</p>
              <span></span>
              <p>Happy clients</p>
            </div>
            <div
              className="item wow fadeInUpBig animated animated"
              style={{ visibility: "visible" }}
            >
              <FontAwesomeIcon icon={faCoffee} className="icon" size="2x" />
              <p className="number">96</p>
              <span></span>
              <p>Cups of coffee</p>
            </div>
            <div
              className="item wow fadeInUpBig animated animated"
              style={{ visibility: "visible" }}
            >
              <FontAwesomeIcon icon={faCamera} className="icon" size="2x" />
              <p className="number">80</p>
              <span></span>
              <p>Team mambers</p>
            </div>                                                                                                                                                                                                                                                                                    
            <button className="animation-btn">
              <span className="animation-btn_lg">
                <span className="animation-btn_sl"></span>
                <span className="animation-btn_text">Show project</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Statistics;
