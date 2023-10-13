import styled from "styled-components";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import breakpoints from "../constants/breakpoints";
import makeResponsiveComponent from "./responsive";

const rules = [
    {
      constraint: "min",
      width: breakpoints.start,
      rules: `
        max-width: 100%;
        margin: 0 auto;
      `,
    },
    {
      constraint: { min: breakpoints.lg, max: breakpoints.xl },
      rules: `
        max-width: 100%;
      `,
    },
    {
      constraint: "min",
      width: breakpoints.xl + 1,
      rules: `
        max-width: 1340px;
      `,
    },
];

export const Container = makeResponsiveComponent(rules);


const PageStyle = styled.main`
  min-height: 90vh;
  width: 100%;
  position: relative;
  font: 400 16px "Object Sans";
  line-height: 26px;
  color: #64618A;
`;

export const PageMain = (props) => {
    const {
      title = props.title,
      description = "Rentranzact",
      children,
      className,
    } = props;
  
    return (
      <>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <PageStyle className={className}>{children}</PageStyle>
      </>
    );
  };
  
  PageMain.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  };