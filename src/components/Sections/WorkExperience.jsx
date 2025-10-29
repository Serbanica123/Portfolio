import Project from "../Project"
import { getImages, getVideos } from "../Project";
import styles from "../Sections/WorkExperience.module.css";
const workExperience = [
    {
        title: <p>
            <strong>Full-Time Software and Robotics Engineer Intern</strong> at <strong>Affix Engineering</strong>
            <p className="text-gray-500 text-sm">02/2025 – 07/2025</p>
        </p>
        ,
        description:
            <div className="max-h-64 overflow-y-auto p-4 bg-white rounded-lg shadow">
                <p className="mt-2">
                    Worked on the development of a <strong>universal software and hardware platform</strong> to improve the adaptability of flex feeder systems using <strong>computer vision</strong> and modular robotics.
                </p>

                <h4 className="mt-4 font-medium">Key Contributions:</h4>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Developed a <strong>Python-based vision system</strong> using <strong>YOLO-NAS-S</strong> for real-time object detection and a <strong>Convolutional Autoencoder</strong> to identify defective or misaligned parts.</li>
                    <li>Built a clean, intuitive <strong>GUI with wxPython</strong> for dataset creation, labeling, model training, and detection, no coding required for end-users.</li>
                    <li>Designed modular custom classes for <strong>dataset augmentation and training</strong>, ensuring maintainability and future scalability.</li>
                    <li>Optimized performance to achieve <strong>detection speeds under 2 seconds</strong> with high model accuracy (<strong>mAP ≥ 0.8</strong>).</li>
                </ul>

                <h4 className="mt-4 font-medium">Result:</h4>
                <p>
                    Delivered a fully functional <strong>vision and robotics platform</strong> that enables fast, accurate detection and quality control of parts, streamlining operations for flex feeder systems.
                </p>
            </div>
        ,
        images: getImages("Affix Engineering"),
        video: getVideos("Affix Engineering"),
        link: "",
        skills: ["Python", "Computer Vision", "YOLO-NAS-S", "Convolutional Autoencoder", "GUI Development", "wxPython", "Dataset Augmentation", "Machine Learning", "Modular Software Design", "Performance Optimization", "Real-Time Detection", "Model Training", "Quality Control", "Robotics Integration", "System Scalability"]
    },
    {
        title: <p>
            <strong>Part-Time Mechanical Engineer Intern</strong> at <strong>Affix Engineering</strong>
            <p className="text-gray-500 text-sm">02/2025 – 07/2025</p>
        </p>
        ,
        description:
            <div className="max-h-64 overflow-y-auto p-4 bg-white rounded-lg shadow">
                <p className="mt-2">
                    Main project: Development of a <strong>magnetic tool changer</strong> for a SCARA robot in a flex feeder system, enabling fast and reliable swapping of end-effector tools.
                </p>

                <h4 className="mt-4 font-medium">Implementation:</h4>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Permanent magnet design to couple and decouple tools efficiently.</li>
                    <li>Pogo pins for transmitting power and signals to tools.</li>
                    <li>Maximum holding weight of <strong>4 kg</strong> with a kinematic coupler to reduce precision requirements during pick-up.</li>
                </ul>

                <h4 className="mt-4 font-medium">Result:</h4>
                <p>
                    Created a <strong>magnetic tool changer</strong> that allows tools to be swapped easily by the SCARA robot or a human operator, holding up to 4 kg and achieving successful swaps in over 95% of sequences.
                </p>

                <h4 className="mt-4 font-medium">Other Projects:</h4>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Tool extender for a <strong>6-DOF robot</strong>.</li>
                    <li>Gripper proof-of-concept for handling car parts.</li>
                    <li>Spring-loaded end-effector mechanism to reduce force applied to parts.</li>
                </ul>
            </div>
        ,
        images: getImages("Affix Mechanical"),
        video: getVideos("Affix Mechanical"),
        link: "",
        skills: ["Mechatronics Design", "SCARA Robots", "Magnetic Tool Changer", "Kinematic Couplers", "End-Effector Design", "Spring-Loaded Mechanisms", "Mechanical Prototyping", "Precision Alignment", "Tool Swapping Systems", "Robotics Integration", "Force Reduction Mechanisms"]
    },
    {
        title: <p>
            <strong>Full-Time Software and Control Engineer Intern</strong> at <strong>MultiRotorResearch</strong>
            <p className="text-gray-500 text-sm">09/2023 – 02/2024</p>

        </p>,
        description:
            <div className="max-h-64 overflow-y-auto p-4 bg-white rounded-lg shadow">
                <p className="mt-2">
                    Worked on the research and implementation of <strong>trajectory control</strong> for large multi-rotor aerial vehicles using a <strong>Model Predictive Controller (MPC)</strong>.
                </p>

                <h4 className="mt-4 font-medium">Key Contributions:</h4>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Developed a <strong>C++ MPC library</strong> to compute optimal velocity commands for following complex 3D trajectories on an <strong>NVIDIA Jetson</strong> board.</li>
                    <li>Created a <strong>Python communication layer</strong> for real-time data exchange between the drone and the C++ MPC library.</li>
                    <li>Tested and tuned the controller in both <strong>Microsoft AirSim Simulator</strong> and on a <strong>real drone platform</strong>.</li>
                    <li>Applied <strong>World-to-Body frame transformations</strong> and <strong>trajectory interpolation</strong> for smooth path tracking.</li>
                    <li>Tuned the drone’s <strong>low-level PID controllers</strong> for stable flight response.</li>
                    <li>Used <strong>Python multiprocessing</strong> to run the MPC and communication processes simultaneously.</li>
                </ul>

                <h4 className="mt-4 font-medium">Result:</h4>
                <p>
                    Achieved a fully functional <strong>Model Predictive Control system</strong> capable of executing complex drone trajectories both in simulation and real-world tests, demonstrating precise and stable motion control.
                </p>
            </div>
        ,
        images: getImages("MultiRotorResearch"),
        video: getVideos("MultiRotorResearch"),
        link: "",
        skills: ["Model Predictive Control", "C++", "Python", "Trajectory Planning", "World-to-Body Frame Transformations", "PID Tuning", "Interpolation", "Simulation", "Real-Time Systems", "NVIDIA Jetson", "Drone Control", "Multiprocessing", "Embedded Systems", "Control Theory", "System Integration"]
    },
    {
        title: <p>
            <strong>Part-Time Mechatronics Engineer</strong> at <strong>FRC Team Pi 6968</strong>
            <p className="text-gray-500 text-sm">06/2022 – 07/2023</p>
        </p>
        ,
        description:
            <div className="max-h-64 overflow-y-auto p-4 bg-white rounded-lg shadow">
                <p className="mt-2">
                    Contributed to the design, manufacturing, and programming of advanced robotic systems for the
                    <strong> 2023 FIRST Robotics Competition – Charged Up</strong> season.
                </p>

                <h4 className="mt-4 font-medium">Key Contributions:</h4>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Designed and manufactured a <strong>modular intake system</strong> for collecting soft balls from the field.</li>
                    <li>Developed a <strong>modular C++ control framework</strong> to simplify testing and subsystem integration.</li>
                    <li>Computed <strong>inverse kinematics</strong> and implemented an algorithm for controlling a <strong>Swerve Drive chassis</strong>.</li>
                    <li>Performed <strong>PID tuning</strong> for precise <strong>velocity and position control</strong> of motors and mechanisms.</li>
                    <li>Applied <strong>object-oriented programming</strong> principles to divide the robot’s subsystems into modular, testable classes.</li>
                </ul>

                <h4 className="mt-4 font-medium">Result:</h4>
                <p>
                    Delivered a fully functional <strong>competition robot</strong> that achieved <strong>3rd place</strong> at the
                    <strong> Arizona Regional</strong> during the <strong>2023 Charged Up FRC season</strong>.
                </p>
            </div>,
        images: getImages("Team Pi"),
        video: getVideos("Team Pi"),
        link: "",
        skills: ["C++", "OOP", "PID tuning", "Pneumatics control", "Inverse Kinematics", "Swerve Drive", "BLDC control", "Sensors and actuators", "State machine", "Prototyping", "Teamwork"]
    },
    {
        title:
            <p>
                <strong>Mechatronics Engineer</strong> at <strong>FTC Team Xeo 14278</strong>
                <p className="text-gray-500 text-sm">09/2018 – 02/2021</p>
            </p>
        ,
        description:
            <div className="max-h-64 overflow-y-auto p-4 bg-white rounded-lg shadow">
                <p className="mt-2">
                    Participated in the <strong>FIRST Tech Challenge</strong> as part of <strong>Team Xeo 14278</strong>, contributing to the mechanical design, prototyping, and programming of competitive robots.
                </p>

                <h4 className="mt-4 font-medium">Key Contributions:</h4>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Designed and prototyped a <strong>custom coaxial swerve drive chassis</strong> for full 360° maneuverability and high-performance mobility.</li>
                    <li>Integrated <strong>CAD modeling</strong>, <strong>3D printing</strong>, and <strong>mechanical assembly</strong> to build optimized and reliable mechanisms.</li>
                    <li>Gained hands-on experience in <strong>robot assembly</strong>, <strong>soldering</strong>, and <strong>programming</strong> using <strong>Creo Parametric</strong>, <strong>SolidWorks</strong>, and <strong>Onshape</strong>.</li>
                    <li>Served as <strong>lead robot designer</strong>, driving innovation and improving mechanical efficiency for competition performance.</li>
                    <li>Established and maintained a complete <strong>3D printing workflow</strong>: filament sourcing, printer maintenance, material testing, and part post-processing.</li>
                </ul>

                <h4 className="mt-4 font-medium">Result:</h4>
                <p>
                    Earned <strong>1st Inspire Award (2017–2018)</strong> and <strong>2nd Inspire Award (2018–2019)</strong> at the Romanian Nationals,
                    reached the <strong>Semifinals at the 2018 World Championship in Detroit</strong>, and competed again in the <strong>2019 Worlds</strong>.
                </p>
            </div>
        ,
        images: getImages("Team Xeo"),
        video: getVideos("Team Xeo"),
        skills: ["CAD Design", "SolidWorks", "Creo Parametric", "Onshape", "3D Printing", "Swerve Drive", "Prototyping", "Mechanical Design", "Assembly", "Soldering", "Robotics", "Leadership", "Team Collaboration"]
    },
    {
        title:
            <p>
                <strong>Mechatronics Engineer</strong> at <strong>FTC Team Xeo 14278</strong>
                <p className="text-gray-500 text-sm">09/2018 – 02/2021</p>
            </p>
        ,
        description:
            <div className="max-h-64 overflow-y-auto p-4 bg-white rounded-lg shadow">
                <p className="mt-2">
                    Participated in the <strong>FIRST Tech Challenge</strong> as part of <strong>Team Xeo 14278</strong>, contributing to the mechanical design, prototyping, and programming of competitive robots.
                </p>

                <h4 className="mt-4 font-medium">Key Contributions:</h4>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Designed and prototyped a <strong>custom coaxial swerve drive chassis</strong> for full 360° maneuverability and high-performance mobility.</li>
                    <li>Integrated <strong>CAD modeling</strong>, <strong>3D printing</strong>, and <strong>mechanical assembly</strong> to build optimized and reliable mechanisms.</li>
                    <li>Gained hands-on experience in <strong>robot assembly</strong>, <strong>soldering</strong>, and <strong>programming</strong> using <strong>Creo Parametric</strong>, <strong>SolidWorks</strong>, and <strong>Onshape</strong>.</li>
                    <li>Served as <strong>lead robot designer</strong>, driving innovation and improving mechanical efficiency for competition performance.</li>
                    <li>Established and maintained a complete <strong>3D printing workflow</strong>: filament sourcing, printer maintenance, material testing, and part post-processing.</li>
                </ul>

                <h4 className="mt-4 font-medium">Result:</h4>
                <p>
                    Earned <strong>1st Inspire Award (2017–2018)</strong> and <strong>2nd Inspire Award (2018–2019)</strong> at the Romanian Nationals,
                    reached the <strong>Semifinals at the 2018 World Championship in Detroit</strong>, and competed again in the <strong>2019 Worlds</strong>.
                </p>
            </div>
        ,
        images: getImages("Team Xeo"),
        video: getVideos("Team Xeo"),
        skills: ["CAD Design", "SolidWorks", "Creo Parametric", "Onshape", "3D Printing", "Swerve Drive", "Prototyping", "Mechanical Design", "Assembly", "Soldering", "Robotics", "Leadership", "Team Collaboration"]
    }];

export default function Experience() {
    return (
        <>
            <section className={styles.projects} id="work" style={{ width: "100%" }}>
                {workExperience.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </section>
        </>

    )
}