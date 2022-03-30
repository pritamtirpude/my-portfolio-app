import { pageAnimation } from "../animation";
import { motion } from "framer-motion";
import { ContactComponent } from "../components";

const Contact = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ContactComponent />
    </motion.div>
  );
};

export default Contact;
