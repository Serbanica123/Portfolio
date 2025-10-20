import SkillBar from 'react-skillbars';
import React, { useState } from "react";
import styles from "../components/Skills.module.css"
const categorizedSkills = {
  "Programming": {
    image: "src/assets/Skills Icons/programming.svg",
    skills: [
      "C++",
      "Python",
      "Ladder Logic",
      "Structured Text",
      "Function Block Diagrams"
    ]
  },
  "Tools & Frameworks": {
    image: "src/assets/Skills Icons/embedded.svg",
    skills: [
      "ROS2",
      "Matlab/Simulink",
      "Jetson",
      "Raspberry Pi",
      "Arduino",
      "Git",
      "Linux"
    ]
  },
  "Robotics & Control": {
    image: "src/assets/Skills Icons/simulation.svg",
    skills: [
      "MPC",
      "PID",
      "EKF",
      "SLAM",
      "Path Planning",
      "Inverse Kinematics"
    ]
  },
  "Hardware & CAD": {
    image: "src/assets/Skills Icons/cad.svg",
    skills: [
      "SolidWorks",
      "Creo",
      "Onshape",
      "Sensors",
      "Actuators",
      "3D Printing"
    ]
  },
  "Machine Learning": {
    image: "src/assets/Skills Icons/ml.svg",
    skills: [
      "TensorFlow",
      "YOLO",
      "Autoencoders",
      "OpenCV",
      "SORT"
    ]
  },
  "Soft Skills": {
    image: "src/assets/Skills Icons/soft_skills.svg",
    skills: [
      "Teamwork",
      "Fast Learner",
      "Problem-Solving",
      "Flexible",
      "Creative Thinking",
      "Team Player"
    ]
  }
};


const colors = {
  bar: "rgba(216, 54, 54, 0.603)",
  title: {
    text: "#fff",
    background: "rgba(216, 54, 54, 0.603)"
  }
};

 function SkillCategoryMinimized({ image, category, skills }) {
  const [hovered, setHovered] = useState(false);

  // Define proficiency levels for each skill (optional, adjust as needed)
  const skillLevels = skills.map((skill) => ({
    type: skill,
    level: Math.floor(Math.random() * 30) + 70, // random 70–100 for demo
  }));

  const colors = {
    bar: "rgba(70, 209, 252, 0.98)",
    title: {
      text: "#fff",
      background: "rgba(102, 182, 95, 0.85)",
    },
  };

  return (
    <div
      className={`${styles.categoryContainerMin} ${
        hovered ? styles.expanded : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered ? (
        <>
          <img className={styles.categoryImg} src={image} alt={category} />
          <p>{skills.join(", ")}</p>
        </>
      ) : (
        <div style={{ width: "100%"}}>
          <img className={styles.categoryImg} src={image} alt={category} />
          <SkillBar skills={skillLevels} colors={colors} height={30} animationDuration={500} animationDelay={0} symbolColor='rgba(255, 255, 255, 0)' />
        </div>
      )}
    </div>
  );
}

export default function SkillBars() {

  return (
    <div className={styles.skillsContainer}>
      {Object.entries(categorizedSkills).map(([category, data])=>{return(
        <SkillCategoryMinimized key={category} category={category} image={data.image} skills={data.skills} />
      )       
      })}
    </div>
  );
}
