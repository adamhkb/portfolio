import { useState } from "react";
import "./works.scss";
import {SportsEsports, MonetizationOn, SportsSoccer, Mood, Search, Visibility} from "@material-ui/icons";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: <SportsEsports/>,
      title: "Space Invaders Clone",
      desc:
      "Developed a Space Invader clone, where the aim of the game is to defeat wave after wave of descending aliens with a horizontally moving laser.",
      img:
        "assets/spaceinvader.png",
      // link:
      //   "https://fifa22.herokuapp.com/",
      tech: "Python, Pygame"
    },
    {
      id: "2",
      icon: <MonetizationOn/>,
      title: "Cryptocurrency Discord Bot",
      desc:
      "Build and deployed a cryptocurrency discord bot to find out the price of any supported cryptocurrency and to display a time series graph of the supported cryptocurrency.",
      img:
        "assets/cryptobot1.png",
      // link:
      //   "https://fifa22.herokuapp.com/",
      tech: "Python, Pandas, CoinGecko API, Plotly."
    },
    {
      id: "3",
      icon: <SportsSoccer/>,
      title: "FIFA 22 Data Visualisation Web App",
      desc:
      "Build and deployed a web app to view any information of players or football clubs and a data analysis of all FIFA 22 players. The dataset used was avaliable on Kaggle.",
      img:
        "assets/fifa22.png",
      link:
        "https://fifa22.herokuapp.com/",
      tech: "Python, Pandas, NumPy, Streamlit, Plotly, Matplotlib, Mplsoccer."
    },
    {
      id: "4",
      icon: <Mood/>,
      title: "Smart Access System",
      desc:
        "Built and deployed a fast and accurate face recognition attendance system with a liveness detection, as well as document verification for a person’s registration.",
      img:
        "assets/smartaccess.png",

      tech: "Python, MySQL, Tensorflow/Keras, OpenCV, dlib, Scikit-Learn, PyTesseract, Flask, AWS, Raspberry Pi"

    },
    {
      id: "5",
      icon: <Search/>,
      title: "Sarcasm Detector in Headlines",
      desc:
        "Developed and deployed a sarcasm detector to detect sarcasm in news headlines.",
      img:
        "assets/sarcasmdetector.png",
      link:
        "https://ahkb-sarcasm-detector.herokuapp.com/",
      tech: "Python, Flask, Tensorflow/Keras, Pickle, NumPy, Pandas, Heroku"

    },
    {
      id: "6",
      icon: <Visibility/>,
      title: "Eye Contact Detector",
      desc:
        "Developed a convolutional neural network (CNN) to detect eye contact between a person and the camera, which the video feed is from.",
      img:
        "assets/eyefig.png",
      tech: "Python, Tensorflow/Keras, OpenCV, NumPy, Pickle, Scikit-Learn, Google Cloud Platform"

    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    {d.icon}
                  </div>
                  <h2>
                    <a href = {d.link}  rel="noreferrer">
                    {d.title}
                    </a>
                  </h2>
                  <p>{d.desc}</p>
                  <p><u>Tech Stack:</u> {d.tech}</p>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
                
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
