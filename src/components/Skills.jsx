import SkillBar from 'react-skillbars';

const categorizedSkills = {
  "Programming": [
    { type: "C++", level: 90 },
    { type: "Python", level: 85 },
    { type: "Ladder Logic", level: 75 },
    { type: "Structured Text", level: 70 },
    { type: "Function Block Diagrams", level: 70 }
  ],
  "Tools & Frameworks":[
    { type: "ROS2", level: 70 },
    { type: "Matlab/Simulink", level: 75 },
    { type: "Jetson", level: 70 },
    { type: "Raspberry Pi", level: 75 },
    { type: "Arduino", level: 80 },
    { type: "Git", level: 80 },
    { type: "Linux", level: 80 },
  ],
  "Robotics & Control": [
    { type: "MPC", level: 70 },
    { type: "PID", level: 80 },
    { type: "EKF", level: 70 },
    { type: "SLAM", level: 70 },
    { type: "Path Planning", level: 75 },
    { type: "Inverse Kinematics", level: 70 }
  ],
  "Hardware & CAD": [
    { type: "SolidWorks", level: 80 },
    { type: "Creo", level: 70 },
    { type: "Onshape", level: 70 },
    { type: "Sensors", level: 75 },
    { type: "Actuators", level: 75 },
    { type: "3D Printing", level: 75 }
  ],
  "Machine Learning": [
    { type: "TensorFlow", level: 70 },
    { type: "YOLO", level: 65 },
    { type: "Autoencoders", level: 60 },
    { type: "OpenCV", level: 75 },
    { type: "SORT", level: 60 }
  ],
  "Soft Skills": [
    { type: "Teamwork", level: 85 },
    { type: "Fast Learner", level: 80 },
    { type: "Problem-Solving", level: 85 },
    { type: "Flexible", level: 80 },
    { type: "Creative Thinking", level: 80 },
    { type: "Team Player", level: 85 }
  ]
};

const colors = {
  bar: "rgba(216, 54, 54, 0.603)",
  title: {
    text: "#fff",
    background: "rgba(216, 54, 54, 0.603)"
  }
};


export default function SkillBars() {

  return (
    <div style={{ display: "flex", gap: "20px", flex: '1' }}>
      {Object.entries(categorizedSkills).map(([category, skills], idx)=>{
        return(
          <div key={idx} style={{flex: '1'}}>
            <h1 style={{fontSize:'20px'}}>{category}</h1>
            <SkillBar skills={skills} colors={colors} height={15} animationDuration={500}/>
          </div>
        );
      })}
    </div>
  );
}
