import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <ProjectCardStyle whileHover={{ y: -10 }}>
      <img src={project.image} alt={project.title} />
      <h5>{project.title}</h5>
      <div className="links">
        <a href={project.live} target="_blank" rel="noreferrer">
          Live
        </a>
        <a href={project.github} target="_blank" rel="noreferrer">
          Github
        </a>
      </div>
    </ProjectCardStyle>
  );
};

const ProjectCardStyle = styled(motion.div)`
  background: var(--color-white);
  border-radius: 0.5rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }

  h5 {
    padding: 1rem 1rem;
    color: var(--color-headings);
    letter-spacing: 0.1rem;
    text-align: center;
  }

  .links {
    padding: 2rem 1rem;
    display: flex;
    justify-content: space-between;

    a {
      color: var(--color-nav-background);
      letter-spacing: 0.1rem;
      &:hover {
        color: var(--color-accent);
      }
    }
  }
`;

export default ProjectCard;
