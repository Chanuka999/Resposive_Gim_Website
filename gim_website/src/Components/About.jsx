import React from "react";
import aboutimage from "../images/image3.jpg";

function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <h3>LERN MORE ABOUT US</h3>
        <p>
          GymX Fitness Welcome to GymXFitness,
          <br />
          where strength meets dedication! At GymX, we believe that fitness is
          more than just a routine—it’s a lifestyle. Our state-of-the-art
          facility is designed to help individuals of all fitness levels achieve
          their health and wellness goals. Whether you’re a beginner or a
          professional athlete, we provide the perfect environment for you to
          train, grow, and transform.
          <br />
          <br />
          Why Choose GymX?
          <br></br>
          ✅ Modern Equipment: Train with the latest and most advanced fitness
          machines.
          <br />
          ✅Certified Trainers: Get guidance from experienced professionals who
          are committed to your progress.
          <br />
          ✅ Group Classes: Stay motivated with high-energy workouts, including
          yoga, HIIT, and strength training.
          <br />
          ✅ Personalized Plans: Customized fitness programs to help you reach
          your goals faster.
          <br />✅ Healthy Community: A supportive and inspiring environment
          that keeps you motivated,{" "}
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
}

export default About;
