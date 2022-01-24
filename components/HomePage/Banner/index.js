import { memo } from "react";

import { StyledBanner } from "./styles";

const Banner = memo(() => {
  return <StyledBanner className="container bg-fixed">banner ne</StyledBanner>;
});

export default Banner;
