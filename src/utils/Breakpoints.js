import { css } from "styled-components";

function Breakpoints(
  cssProp,
  cssPropUnits,
  values,
  mediaQueryType = "min-width"
) {
  const breakpointProps = values.reduce((mediaQueries, value) => {
    const [screenBreakpoint, cssPropBreakpoint] = [
      Object.keys(value)[0],
      Object.values(value)[0],
    ];

    return (mediaQueries += `
        @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
            ${cssProp} : ${cssPropBreakpoint}${cssPropUnits};
        }
        `);
  }, "");

  return css([breakpointProps]);
}

export default Breakpoints;
