import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <Navigation>
        <div className="logo">
          <Link to="/">
            <h1>
              P<span>T</span>.
            </h1>
          </Link>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <Link to="/">About</Link>
              <LineActive
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/" ? "100%" : "0%" }}
                transition={{ duration: 0.5 }}
              />
            </li>
            <li>
              <Link to="/projects">Projects</Link>
              <LineActive
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/projects" ? "100%" : "0%" }}
                transition={{ duration: 0.5 }}
              />
            </li>
            <li>
              <Link to="/contact">Contact</Link>
              <LineActive
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/contact" ? "100%" : "0%" }}
                transition={{ duration: 0.5 }}
              />
            </li>
          </ul>
        </div>
      </Navigation>
    </header>
  );
};

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  background: var(--color-nav-background);
  padding: 0rem 10rem;
  position: sticky;
  top: 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    min-height: 20vh;
    padding: 0rem 2rem;
  }

  .logo {
    h1 {
      color: white;

      span {
        color: var(--color-headings);
      }
    }
  }

  .navigation {
    a {
      color: var(--color-text);
      letter-spacing: 0.2rem;
    }
    ul {
      display: flex;

      li {
        margin: 0rem 5rem 0rem 0rem;
        position: relative;

        @media screen and (max-width: 768px) {
          margin: 0rem;

          &:nth-child(2) {
            margin-left: 5rem;
          }

          &:nth-child(3) {
            margin-left: 5rem;
          }
        }
      }
    }
  }
`;

const LineActive = styled(motion.div)`
  position: absolute;
  top: 3rem;
  left: 50%;
  width: 0%;
  height: 0.5rem;
  transform: translate(-50%, -50%);
  background: #23d997;
`;
export default Navbar;
