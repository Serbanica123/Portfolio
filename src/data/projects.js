// All the work shown on the site: internships, personal projects and competition teams.
// The order here is the order of the cards on the page. Put the best ones first.
// Use **double stars** around words to make them bold.

export const projectTypes = {
    internship: "Internship",
    personal: "Personal project",
    competition: "Competition",
};

export const projects = [
    {
        slug: "ai-vision-flex-feeder",
        title: "AI Vision Platform for Flex Feeders",
        type: "internship",
        company: "Affix Engineering",
        role: "Full-Time Software and Robotics Engineer Intern",
        dates: "02/2025 – 07/2025",
        summary:
            "A **universal software and hardware platform** that makes flex feeder systems more adaptable, using **computer vision** and modular robotics.",
        whatIDidTitle: "Key contributions",
        whatIDid: [
            "Developed a **Python-based vision system** using **YOLO-NAS-S** for real-time object detection and a **Convolutional Autoencoder** to identify defective or misaligned parts.",
            "Built a clean, intuitive **GUI with wxPython** for dataset creation, labeling, model training, and detection, no coding required for end-users.",
            "Designed modular custom classes for **dataset augmentation and training**, ensuring maintainability and future scalability.",
            "Optimized performance to achieve **detection speeds under 2 seconds** with high model accuracy (**mAP ≥ 0.8**).",
        ],
        result:
            "Delivered a fully functional **vision and robotics platform** that enables fast, accurate detection and quality control of parts, streamlining operations for flex feeder systems.",
        mainSkills: ["Python", "YOLO-NAS-S", "Autoencoder", "wxPython"],
        skills: ["Python", "Computer Vision", "YOLO-NAS-S", "Convolutional Autoencoder", "GUI Development", "wxPython", "Dataset Augmentation", "Machine Learning", "Modular Software Design", "Performance Optimization", "Real-Time Detection", "Model Training", "Quality Control", "Robotics Integration", "System Scalability"],
        mediaFolder: "Affix Engineering",
        cover: "Vision page",
        github: "",
    },
    {
        slug: "mpc-drone-control",
        title: "MPC Trajectory Control for Large Drones",
        type: "internship",
        company: "MultiRotorResearch",
        role: "Full-Time Software and Control Engineer Intern",
        dates: "09/2023 – 02/2024",
        summary:
            "Research and implementation of **trajectory control** for large multi-rotor aerial vehicles using a **Model Predictive Controller (MPC)**.",
        whatIDidTitle: "Key contributions",
        whatIDid: [
            "Developed a **C++ MPC library** to compute optimal velocity commands for following complex 3D trajectories on an **NVIDIA Jetson** board.",
            "Created a **Python communication layer** for real-time data exchange between the drone and the C++ MPC library.",
            "Tested and tuned the controller in both **Microsoft AirSim Simulator** and on a **real drone platform**.",
            "Applied **World-to-Body frame transformations** and **trajectory interpolation** for smooth path tracking.",
            "Tuned the drone’s **low-level PID controllers** for stable flight response.",
            "Used **Python multiprocessing** to run the MPC and communication processes simultaneously.",
        ],
        result:
            "Achieved a fully functional **Model Predictive Control system** capable of executing complex drone trajectories both in simulation and real-world tests, demonstrating precise and stable motion control.",
        mainSkills: ["MPC", "C++", "Python", "NVIDIA Jetson"],
        skills: ["Model Predictive Control", "C++", "Python", "Trajectory Planning", "World-to-Body Frame Transformations", "PID Tuning", "Interpolation", "Simulation", "Real-Time Systems", "NVIDIA Jetson", "Drone Control", "Multiprocessing", "Embedded Systems", "Control Theory", "System Integration"],
        mediaFolder: "MultiRotorResearch",
        cover: "MPC flight test on real drone",
        github: "",
    },
    {
        slug: "fluffy-digital-twin",
        title: "Digital Twin of the FLUFFY Factory in Isaac Sim",
        type: "personal",
        summary:
            "A fully functional **digital twin** of the FLUFFY (Flexible Automated Future Factory) system in **NVIDIA Isaac Sim**, built from scratch as a base for future **human–robot safety** work and system optimization.",
        whatIDidTitle: "Implementation",
        whatIDid: [
            "Imported and simplified the CAD model in **Onshape**, defined **joints**, **limits**, and **collision meshes** for accurate physics simulation.",
            "Configured sensors and collision detection within **Isaac Sim** using **Python**.",
            "Designed a **builder pattern** to automatically generate actuator paths for over **30 actuators**, streamlining the simulation setup.",
            "Implemented a **finite state machine (FSM)** to demonstrate the system’s functionality by cycling trays between assembly lines.",
        ],
        result:
            "Created a realistic, modular simulation environment where the FLUFFY system operates autonomously, enabling the integration and testing of **human safety algorithms** and future digital twin expansions.",
        mainSkills: ["Isaac Sim", "Python", "Onshape", "FSM"],
        skills: ["Python", "Software in the Loop", "Finite State Machine", "Builder Pattern", "Isaac Sim", "Onshape", "CAD", "Pneumatics", "Actuators", "PID control", "Linux", "Git"],
        mediaFolder: "Digital Twin",
        cover: "FLUFFY system in Isaac Sim",
        github: "https://github.com/Serbanica123/FLUFFY-Digital-Twin",
    },
    {
        slug: "magnetic-tool-changer",
        title: "Magnetic Tool Changer for a SCARA Robot",
        type: "internship",
        company: "Affix Engineering",
        role: "Part-Time Mechanical Engineer Intern",
        dates: "02/2025 – 07/2025",
        summary:
            "A **magnetic tool changer** for a SCARA robot in a flex feeder system, for fast and reliable swapping of end-effector tools.",
        whatIDidTitle: "Implementation",
        whatIDid: [
            "Permanent magnet design to couple and decouple tools efficiently.",
            "Pogo pins for transmitting power and signals to tools.",
            "Maximum holding weight of **4 kg** with a kinematic coupler to reduce precision requirements during pick-up.",
        ],
        result:
            "Created a **magnetic tool changer** that allows tools to be swapped easily by the SCARA robot or a human operator, holding up to 4 kg and achieving successful swaps in over 95% of sequences.",
        otherWork: [
            "Tool extender for a **6-DOF robot**.",
            "Gripper proof-of-concept for handling car parts.",
            "Spring-loaded end-effector mechanism to reduce force applied to parts.",
        ],
        mainSkills: ["Mechanical Design", "SCARA Robots", "Kinematic Couplers", "Prototyping"],
        skills: ["Mechatronics Design", "SCARA Robots", "Magnetic Tool Changer", "Kinematic Couplers", "End-Effector Design", "Spring-Loaded Mechanisms", "Mechanical Prototyping", "Precision Alignment", "Tool Swapping Systems", "Robotics Integration", "Force Reduction Mechanisms"],
        mediaFolder: "Affix Mechanical",
        cover: "Tool changer exploded view",
        github: "",
    },
    {
        slug: "laser-turret",
        title: "2DOF Laser Turret",
        type: "personal",
        status: "Work in progress",
        summary:
            "A **2DOF laser turret** used as a modular platform to experiment with **embedded systems**, **motor control**, **sensor fusion**, **vision**, **position control**, and **machine learning**. Currently finalizing the hardware and electrical assembly.",
        whatIDidTitle: "Implementation",
        whatIDid: [
            "Actuation using **brushless motors** with **FOC controllers** via **ESP32** for low-level velocity control.",
            "Multiple **magnetic encoders** connected through an **I2C multiplexer**: two on the motors for velocity feedback, two on the outputs for position feedback.",
            "Custom **coaxial cycloidal gearbox** providing two degrees of freedom on a single axle, fully designed in **SolidWorks** and 3D printed.",
            "Hardware and electrical systems are being finalized, with full integration underway.",
        ],
        nextSteps: [
            "System identification to derive the **state-space model**.",
            "Implement an **LQR controller** for precise position control.",
            "Train a **vision model** to detect targets and apply **inverse kinematics** for laser aiming.",
            "Integrate **reinforcement learning** for autonomous targeting and adaptive behavior.",
        ],
        mainSkills: ["C++", "ESP32", "FOC control", "SolidWorks"],
        skills: ["C++", "Python", "Linux", "ROS2", "Embedded Systems", "Sensors and Actuators", "BLDC motor", "Encoders", "I2C", "ESP32", "PID Tuning", "FOC control", "Machine Learning", "LQR", "State Space", "System Identification", "Inverse Kinematics", "CAD design", "FDM Printing"],
        mediaFolder: "Laser Turret",
        cover: "Front view of the assembly",
        github: "",
    },
    {
        slug: "frc-swerve-robot",
        title: "Swerve Drive Competition Robot",
        type: "competition",
        company: "FRC Team Pi 6968",
        role: "Part-Time Mechatronics Engineer",
        dates: "06/2022 – 07/2023",
        summary:
            "Design, manufacturing, and programming of a competition robot for the **2023 FIRST Robotics Competition – Charged Up** season.",
        whatIDidTitle: "Key contributions",
        whatIDid: [
            "Designed and manufactured a **modular intake system** for collecting soft balls from the field.",
            "Developed a **modular C++ control framework** to simplify testing and subsystem integration.",
            "Computed **inverse kinematics** and implemented an algorithm for controlling a **Swerve Drive chassis**.",
            "Performed **PID tuning** for precise **velocity and position control** of motors and mechanisms.",
            "Applied **object-oriented programming** principles to divide the robot’s subsystems into modular, testable classes.",
        ],
        result:
            "Delivered a fully functional **competition robot** that achieved **3rd place** at the **Arizona Regional** during the **2023 Charged Up FRC season**.",
        mainSkills: ["C++", "Swerve Drive", "PID tuning", "Inverse Kinematics"],
        skills: ["C++", "OOP", "PID tuning", "Pneumatics control", "Inverse Kinematics", "Swerve Drive", "BLDC control", "Sensors and actuators", "State machine", "Prototyping", "Teamwork"],
        mediaFolder: "Team Pi",
        cover: "Competition Robot",
        github: "",
    },
    {
        slug: "ftc-coaxial-swerve",
        title: "Coaxial Swerve Drive Robots",
        type: "competition",
        company: "FTC Team Xeo 14278",
        role: "Mechatronics Engineer",
        dates: "09/2018 – 02/2021",
        summary:
            "Mechanical design, prototyping, and programming of competitive robots for the **FIRST Tech Challenge** with **Team Xeo 14278**.",
        whatIDidTitle: "Key contributions",
        whatIDid: [
            "Designed and prototyped a **custom coaxial swerve drive chassis** for full 360° maneuverability and high-performance mobility.",
            "Integrated **CAD modeling**, **3D printing**, and **mechanical assembly** to build optimized and reliable mechanisms.",
            "Gained hands-on experience in **robot assembly**, **soldering**, and **programming** using **Creo Parametric**, **SolidWorks**, and **Onshape**.",
            "Served as **lead robot designer**, driving innovation and improving mechanical efficiency for competition performance.",
            "Established and maintained a complete **3D printing workflow**: filament sourcing, printer maintenance, material testing, and part post-processing.",
        ],
        result:
            "Earned the **1st Inspire Award (2017–2018)** and **2nd Inspire Award (2018–2019)** at the Romanian Nationals, reached the **Semifinals at the 2018 World Championship in Detroit**, and competed again at the **2019 Worlds**.",
        mainSkills: ["SolidWorks", "Swerve Drive", "3D Printing", "Leadership"],
        skills: ["CAD Design", "SolidWorks", "Creo Parametric", "Onshape", "3D Printing", "Swerve Drive", "Prototyping", "Mechanical Design", "Assembly", "Soldering", "Robotics", "Leadership", "Team Collaboration"],
        mediaFolder: "Team Xeo",
        cover: "2019-2020 robot on the field",
        github: "",
    },
    {
        slug: "cycloidal-gearbox",
        title: "Cycloidal Gearbox 13:1",
        type: "personal",
        summary:
            "A compact, modular **cycloidal gearbox** designed and manufactured as a reducer for future robotics projects, to increase actuator torque.",
        whatIDidTitle: "Implementation",
        whatIDid: [
            "**13:1 reduction** cycloidal gearbox with modular mounting for both input and output using **heated inserts**.",
            "Micro bearings used as pins to minimize friction between the rotor and ring gear, with steel pins for the oscillating output.",
            "Combination of **3D printed components** and metal hardware to create a functional and durable reducer.",
        ],
        result:
            "A compact and robust **13:1 reducer** compatible with a wide range of motors and outputs, ready for integration into future robotics platforms requiring high-torque actuation.",
        mainSkills: ["SolidWorks", "3D Printing", "Reducers", "Prototyping"],
        skills: ["SolidWorks", "3D Printing", "Reducers", "Hardware components", "Actuators", "Prototyping"],
        mediaFolder: "Cycloidal Gearbox",
        cover: "Cycloidal Gearbox",
        github: "",
    },
];
