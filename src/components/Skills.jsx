import SkillBar from 'react-skillbars';
import { useState } from "react";
import styles from "../components/Skills.module.css"
import programmingIcon from "../assets/Skills Icons/programming.svg";
import embeddedIcon from "../assets/Skills Icons/embedded.svg";
import simulationIcon from "../assets/Skills Icons/simulation.svg";
import cadIcon from "../assets/Skills Icons/cad.svg";
import mlIcon from "../assets/Skills Icons/ml.svg";
import softSkillsIcon from "../assets/Skills Icons/soft_skills.svg";

const categorizedSkills = [
  {
    category: "Programming",
    image: programmingIcon,
    skills: [
      { type: "C++", level: 90 },
      { type: "Python", level: 90 },
      { type: "Matlab", level: 60 },
      { type: "VHDL", level: 70 },
      { type: "Ladder Logic", level: 50 },
      { type: "Structured Text", level: 50 },
      { type: "FBD", level: 50 }
    ]
  },
  {
    category: "Tools & Frameworks",
    image: embeddedIcon,
    skills: [
      { type: "ROS2", level: 90 },
      { type: "Simulink", level: 75 },
      { type: "Jetson", level: 70 },
      { type: "Raspberry Pi", level: 80 },
      { type: "Arduino", level: 90 },
      { type: "Git", level: 90 },
      { type: "Eigen C++", level: 90 },
      { type: "Git", level: 90 },
      { type: "Linux", level: 80 },
      { type: "Isaac Sim", level: 85 },
      { type: "Gazebo", level: 85 },
    ]
  },
  {
    category: "Robotics & Control",
    image: simulationIcon,
    skills: [
      { type: "MPC", level: 85 },
      { type: "PID", level: 85 },
      { type: "EKF", level: 70 },
      { type: "SLAM", level: 55 },
      { type: "IK", level: 75 },
      { type: "LQR", level: 75 },
      { type: "FOC", level: 80 },
      { type: "TF", level: 65 },
    ]
  },
  {
    category: "Hardware & CAD",
    image: cadIcon,
    skills: [
      { type: "SolidWorks", level: 95 },
      { type: "Creo", level: 85 },
      { type: "Onshape", level: 75 },
      { type: "Sensors", level: 80 },
      { type: "Actuators", level: 75 },
      { type: "3D Printing", level: 100 }
    ]
  },
  {
    category: "Machine Learning",
    image: mlIcon,
    skills: [
      { type: "TensorFlow", level: 65 },
      { type: "YOLO", level: 90 },
      { type: "Autoencoders", level: 90 },
      { type: "OpenCV", level: 85 },
      { type: "SORT", level: 50 },
    ]
  },
  {
    category: "Soft Skills",
    image: softSkillsIcon,
    skills: [
      { type: "Teamwork", level: 90 },
      { type: "Fast Learner", level: 88 },
      { type: "Problem-Solving", level: 92 },
      { type: "Flexible", level: 85 },
      { type: "Creative Thinking", level: 80 },
      { type: "Team Player", level: 90 }
    ]
  }
];

function SkillCategoryMinimized({ image, category, skills }) {
  const [hovered, setHovered] = useState(false);
  const sortedSkills = [...skills].sort((a, b) => b.level - a.level)
  const colors = {
    bar: "rgba(83, 168, 189, 0.98)",
    title: {
      text: "#fff",
      background: "#0D7377",
    },
  };

  return (
    <div
      className={`${styles.categoryContainerMin} ${hovered ? styles.expanded : ""
        }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered ? (
        <>
          <img className={styles.categoryImg} src={image} alt={category} />
          <p>{sortedSkills.map(skill => skill.type).join(", ")}</p>
        </>
      ) : (
        <div style={{ width: "100%" }}>
          <img className={styles.categoryImg} src={image} alt={category} />
          <SkillBar skills={sortedSkills} colors={colors} height={30} animationDuration={500} animationDelay={0} symbolColor='rgba(255, 255, 255, 0)' />
        </div>
      )}
    </div>
  );
}

export default function SkillBars() {

  return (
    <div className={styles.skillsContainer}>
      {categorizedSkills.map(({ category, image, skills }) => (
        <SkillCategoryMinimized key={category} category={category} image={image} skills={skills} />
      ))}
    </div>
  );
}
