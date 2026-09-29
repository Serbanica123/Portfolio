import profileImg from "../assets/ProfilePicture.png";
import resumePdf from "../assets/Alexandru-Nicolae-Serban-FlowCV-Resume-20251011.pdf";

// Everything about you: name, intro, about text, links and the roles you are open to.
// Use **double stars** around words to make them bold.

export const profile = {
    name: "Alexandru Serban",
    photo: profileImg,
    resume: resumePdf,
    email: "serbanalexandrunicolae@gmail.com",

    // The one line under your name at the top of the page
    tagline:
        "Mechatronics engineer building robots — from CAD and 3D printing to control and computer vision.",

    links: {
        linkedin: "https://www.linkedin.com/in/alexandru-serban-b25a31235/",
        github: "https://github.com/Serbanica123?tab=repositories",
        facebook: "https://www.facebook.com/alex.serban.1804",
    },

    // The About me section. One string = one paragraph.
    about: [
        "I am a motivated **Mechatronics Engineering graduate** with a strong passion for robotics, automation, and advanced control systems. Over the past years, I have gained hands-on experience in robotics software, control engineering, CAD design, and computer vision, through both international internships and competitive robotics projects.",
        "My expertise spans **C++, Python, ROS2, Matlab/Simulink**, and CAD design (**SolidWorks CSWP/CSWA**), combined with practical skills in 3D printing, embedded systems, and machine learning for robotics. I have developed and tuned advanced controllers (**MPC, PID, Kalman Filter**) and built modular robotic platforms integrating computer vision and mechanical design.",
        "I thrive in multidisciplinary teams, where I enjoy both developing scalable software solutions and designing innovative mechanical systems. I learn fast, adapt easily, and like solving problems in creative ways. Beyond technical work, I have a strong background in **mentoring and leadership**, supporting new team members and ensuring knowledge transfer in robotics teams.",
        "My long-term goal is to contribute to the development of **autonomous systems, intelligent robotics, and next-generation manufacturing solutions**, where I can combine my creativity, problem-solving mindset, and drive for innovation.",
    ],

    openToWork: [
        "Robotics Engineer",
        "Mechatronics Engineer",
        "Automation Engineer",
        "Control Systems Engineer",
        "Embedded Systems Engineer",
        "Simulation Engineer (ROS/Isaac Sim)",
        "Computer Vision Engineer",
        "Mechanical Design Engineer (CAD/SolidWorks)",
        "3D Printing & Prototyping Specialist",
        "PLC Programmer",
    ],

    // The short line in the Contact section
    contactText: "Looking for a robotics or mechatronics role — let's talk.",
};
