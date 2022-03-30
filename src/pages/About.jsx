import { AboutComponent, AboutMe, AboutSkills } from "../components";
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutComponent />
      <AboutMe />
      <AboutSkills />
    </motion.div>
  );
};

export default About;
