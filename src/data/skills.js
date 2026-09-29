import programmingIcon from "../assets/Skills Icons/programming.svg";
import embeddedIcon from "../assets/Skills Icons/embedded.svg";
import simulationIcon from "../assets/Skills Icons/simulation.svg";
import cadIcon from "../assets/Skills Icons/cad.svg";
import mlIcon from "../assets/Skills Icons/ml.svg";

// Skill groups. Strongest skills first.
// `main` skills are highlighted in their group.

export const skillGroups = [
    {
        category: "Programming",
        icon: programmingIcon,
        main: ["C++", "Python"],
        skills: ["C++", "Python", "VHDL", "Matlab", "Ladder Logic", "Structured Text", "FBD"],
    },
    {
        category: "Tools & Frameworks",
        icon: embeddedIcon,
        main: ["ROS2", "Git", "Eigen C++"],
        skills: ["ROS2", "Arduino", "Git", "Eigen C++", "Isaac Sim", "Gazebo", "Raspberry Pi", "Linux", "Simulink", "Jetson"],
    },
    {
        category: "Robotics & Control",
        icon: simulationIcon,
        main: ["MPC", "PID"],
        skills: ["MPC", "PID", "FOC", "IK", "LQR", "EKF", "TF", "SLAM"],
    },
    {
        category: "Hardware & CAD",
        icon: cadIcon,
        main: ["3D Printing", "SolidWorks"],
        skills: ["3D Printing", "SolidWorks", "Creo", "Sensors", "Onshape", "Actuators"],
    },
    {
        category: "Machine Learning & Vision",
        icon: mlIcon,
        main: ["YOLO", "Autoencoders"],
        skills: ["YOLO", "Autoencoders", "OpenCV", "TensorFlow", "SORT"],
    },
];
