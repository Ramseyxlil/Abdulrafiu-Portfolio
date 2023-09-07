/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/tech.png";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm Abdulrafiu Izuafa, a Software Developer and UI/UX Designer passionate about crafting exceptional and intuitive user experiences. Currently, I'm studying at Barnett Technical University, where I'm honing my skills to create innovative and user-centric designs. I thrive on designing elegant and simplistic user interfaces that engage users and deliver meaningful interactions.";


/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Software Development",
  "UI/UX Design",
  "Artificial Intelligence",
  "Web Design",
  "User Experience",
  "Inclusive Design",
  "Focus Group Testing",
  "Mobile User Interfaces",
  "Graphic Design",
];


/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "As a Software Developer and UI/UX Designer, I'm driven by a passion for solving challenges in innovative ways, pushing the boundaries of what's possible. I believe in making technology inclusive and accessible to everyone. Through my UI/UX experience, I constantly seek fresh approaches to enhance user experiences and drive innovation, ensuring that technology serves as a force for positive change.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
