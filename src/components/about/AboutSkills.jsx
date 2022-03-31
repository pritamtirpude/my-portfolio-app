import HTMLIcon from "../../assets/html.png";
import CSSIcon from "../../assets/css.png";
import APIIcon from "../../assets/api.png";
import GITIcon from "../../assets/git.png";
import JavascriptIcon from "../../assets/javascript.png";
import NodeIcon from "../../assets/node.png";
import ReactIcon from "../../assets/react.png";
import ReduxIcon from "../../assets/redux.png";
import SassIcon from "../../assets/sass.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "../custom hook/UseScroll";
import { scrollReveal } from "../../animation";

const AboutSkills = () => {
  const [element2, controls2] = useScroll();

  return (
    <AboutSkillSection
      variants={scrollReveal}
      initial="hidden"
      animate={controls2}
      ref={element2}
    >
      <h1>Skills</h1>
      <SkillContent>
        <img src={HTMLIcon} alt="html icon" />
        <img src={CSSIcon} alt="css icon" />
        <img src={JavascriptIcon} alt="javascript icon" />
        <img src={SassIcon} alt="sass icon" />
        <img src={ReactIcon} alt="react icon" />
        <img src={ReduxIcon} alt="redux icon" />
        <img src={NodeIcon} alt="node icon" />
        <img src={GITIcon} alt="git icon" />
        <img src={APIIcon} alt="api icon" />
      </SkillContent>
    </AboutSkillSection>
  );
};

const AboutSkillSection = styled(motion.div)`
  padding: 5rem 10rem;

  @media screen and (max-width: 768px) {
    padding: 5rem 2rem;
  }

  h1 {
    text-align: center;
    font-size: 5rem;
    color: var(--color-headings);
    letter-spacing: 0.2rem;
    position: relative;
    text-transform: uppercase;
    padding: 2rem 0rem;

    &::after {
      content: "Skills";
      position: absolute;
      top: 0%;
      left: 0;
      width: 100%;
      height: 100%;
      font-size: 10rem;
      z-index: -1;
      filter: opacity(20%);

      @media screen and (max-width: 768px) {
        font-size: 6rem;
      }
    }
  }
`;

const SkillContent = styled(motion.div)`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  img {
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    transition: all 0.5s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
export default AboutSkills;
