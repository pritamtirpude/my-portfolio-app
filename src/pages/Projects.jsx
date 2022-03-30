import { pageAnimation } from "../animation";
import { motion } from "framer-motion";
import { ProjectComponent } from "../components";

const Projects = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ProjectComponent />
    </motion.div>
  );
};

export default Projects;
