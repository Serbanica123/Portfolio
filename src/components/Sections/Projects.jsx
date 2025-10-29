import Project from "../Project"
import styles from "../Sections/Projects.module.css";
import { getImages, getVideos } from "../Project";

const projects = [
    {
        title: "Digital twin of Flexible Automated Future Factory(FLUFFY) in Nvidia Isaac Sim",
        description: <div className="max-h-64 overflow-y-auto p-4 bg-white rounded-lg shadow">
            <p>
                Developed a fully functional <strong>digital twin</strong> of the FLUFFY automated factory system in <strong>NVIDIA Isaac Sim</strong>, built from scratch to serve as a foundation for future <strong>human–robot safety</strong> development and system optimization.
            </p>

            <h4 className="mt-4 font-medium">Implementation:</h4>
            <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Imported and simplified the CAD model in <strong>Onshape</strong>, defined <strong>joints</strong>, <strong>limits</strong>, and <strong>collision meshes</strong> for accurate physics simulation.</li>
                <li>Configured sensors and collision detection within <strong>Isaac Sim</strong> using <strong>Python</strong>.</li>
                <li>Designed a <strong>builder pattern</strong> to automatically generate actuator paths for over <strong>30 actuators</strong>, streamlining the simulation setup.</li>
                <li>Implemented a <strong>finite state machine (FSM)</strong> to demonstrate the system’s functionality by cycling trays between assembly lines.</li>
            </ul>

            <h4 className="mt-4 font-medium">Result:</h4>
            <p>
                Created a realistic, modular simulation environment where the FLUFFY system operates autonomously, enabling the integration and testing of <strong>human safety algorithms</strong> and future digital twin expansions.
            </p>
        </div>
        ,
        images: getImages("Digital Twin"),
        video: getVideos("Digital Twin"),
        link: "https://github.com/Serbanica123/FLUFFY-Digital-Twin",
        skills: ["Python", "Software in the Loop", "Finite State Machine", "Builder Pattern", "Isaac Sim", "Onshape", "CAD", "Pneumatics", "Actuatuors", "PID control", "Linux", "Git"]
    },
    {
        title: "2DOF Laser Turret",
        description: <div className="max-h-64 overflow-y-auto p-4 bg-white rounded-lg shadow">
            <p>
                Developing a <strong>2DOF laser turret</strong> as a modular platform to experiment with <strong>embedded systems</strong>, <strong>motor control</strong>, <strong>sensor fusion</strong>, <strong>vision</strong>, <strong>position control</strong>, and <strong>machine learning</strong>. <strong>Work in progress</strong>, currently finalizing hardware and electrical assembly.
            </p>

            <h4 className="mt-4 font-medium">Implementation:</h4>
            <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Actuation using <strong>brushless motors</strong> with <strong>FOC controllers</strong> via <strong>ESP32</strong> for low-level velocity control.</li>
                <li>Multiple <strong>magnetic encoders</strong> connected through an <strong>I2C multiplexer</strong>—two on motors for velocity feedback, two on outputs for position feedback.</li>
                <li>Custom <strong>coaxial cycloidal gearbox</strong> providing two degrees of freedom on a single axle, fully designed in <strong>SolidWorks</strong> and 3D printed.</li>
                <li>Hardware and electrical systems are being finalized, with full integration underway.</li>
            </ul>

            <h4 className="mt-4 font-medium">Future Development:</h4>
            <ul className="list-disc list-inside space-y-2 mt-2">
                <li>System identification to derive the <strong>state-space model</strong>.</li>
                <li>Implement <strong>LQR controller</strong> for precise position control.</li>
                <li>Train a <strong>vision model</strong> to detect targets and apply <strong>inverse kinematics</strong> for laser aiming.</li>
                <li>Integrate <strong>reinforcement learning</strong> for autonomous targeting and adaptive behavior.</li>
            </ul>
        </div>
        ,
        images: getImages("Laser Turret"),
        video: getVideos("Laser Turret"),
        link: "",
        skills: ["C++", "Python", "Linux", "ROS2", "Embedded Systems", "Sensors and Actuators", "BLDC motor", "Encoders", "I2C", "ESP32", "PID Tuning", "FOC control", "Machine Learning", "LQR", "State Space", "System Identification", "Inverse Kinematics", "CAD design", "FDM Printing"]
    },
    {
        title: "Cycloidal Gearbox",
        description:
            <div className="max-h-64 overflow-y-auto p-4 bg-white rounded-lg shadow">
                <p>
                    Designed and manufactured a <strong>cycloidal gearbox</strong> as a compact, modular reducer for future robotics projects, aimed at increasing actuator torque.
                </p>

                <h4 className="mt-4 font-medium">Implementation:</h4>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>13:1 reduction</strong> cycloidal gearbox with modular mounting for both input and output using <strong>heated inserts</strong>.</li>
                    <li>Micro bearings used as pins to minimize friction between the rotor and ring gear, with steel pins for the oscillating output.</li>
                    <li>Combination of <strong>3D printed components</strong> and metal hardware to create a functional and durable reducer.</li>
                </ul>

                <h4 className="mt-4 font-medium">Result:</h4>
                <p>
                    A compact and robust <strong>13:1 reducer</strong> compatible with a wide range of motors and outputs, ready for integration into future robotics platforms requiring high-torque actuation.
                </p>
            </div>,
        images: getImages("Cycloidal Gearbox"),
        video: getVideos("Cycloidal Gearbox"),
        link: "",
        skills: ["SolidWorks", "3D Printing", "Reducers", "Hardware components", "Actuators", "Prototyping"]
    },
];


export default function Projects() {
    return (
        <>
            <section className={styles.projects} id="projects" style={{ width: "100%" }}>
                {projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </section>
        </>

    )
}