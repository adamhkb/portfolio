import "./aboutme.scss";

export default function Aboutme() {
    return (
    <div className="aboutme" id="aboutme">
        <div className="container">
                <div className="left">
                    <div className = "wrapper">
                        <h2>About Me</h2>
                        <span>&nbsp;</span>  
                        <p>
                        I'm an Electronic Engineering with Management graduate from King’s College London (2016 - 2019), 
                        where I studied the hardware and software elements 
                        of engineering, as well as general management and my main passion is machine learning.
                        </p>
                        <span>&nbsp;</span>         
                        <p>
                        My interests include artificial intelligence, computer vision, natural language processing, 
                        data analysing, football, boxing and video games. My growing interest in Machine Learning 
                        began when I was doing my dissertation on Eye Contact Detection that involves using deep 
                        learning frameworks and data visualisation tools all implemented in Python.    
                        </p>
                        <span>&nbsp;</span>  
                        <h2>Skills</h2>
                        <p> Below are some of my skills and I'm always looking to learn more.</p>
                        <span>&nbsp;</span>  
                        <p>
                        <ul>
                            <li>Python</li>
                            <li>TensorFlow/Keras</li>
                            <li>OpenCV</li>
                            <li>Pandas</li> 
                            <li>Scikit-Learn</li>
                            <li>Matplotlib</li>
                            <li>Plotly</li>
                            <li>Seaborn</li>
                            <li>Flask</li>
                            <li>Streamlit</li>
                            <li>SQL/MySQL</li>
                            <li>HTML</li>
                            <li>React.js</li>
                            <li>AWS</li>
                            <li>Google Cloud Platform</li>
                            <li>Heroku</li>
                            <li>Raspberry Pi</li>
                        </ul>
                        </p>
                    </div>
                </div>
                <div className="right">
                    <div className="imgContainer">
                    <img src="assets/adam.jpg"
                        alt=""/>
                    </div>
                </div>
        </div>
    </div>
  );
}