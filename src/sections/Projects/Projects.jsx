import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";
import modelimage from "../../assets/CVD-ML-Model.png"
import photography from "../../assets/photography.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={modelimage}
          link="https://github.com/Shreyanshu23/CVD-Prediction-MachineLearning-app"
          h3="Cardio-Vascular Disease Predition"
          p="Heart Disease Predition Using Machine Learning"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Shreyanshu23/GOFOOD"
          h3="GOFOOD"
          p="Food Ordering Website"
        />
        <ProjectCard
          src={photography}
          link="https://shreyanshu23.github.io/Rajiv-Kumar-Photography/"
          h3="Photographer-Portfolio"
          p="Portfolio Website"
        />
      </div>
    </section>
  );
}

export default Projects;
