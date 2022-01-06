import { memo } from "react";

import { StyledBanner } from "./styles";

const Banner = memo(() => {
  return (
    <StyledBanner className="container">
      <h1 className="text-3xl font-bold underline">Banner</h1>
    </StyledBanner>
  );
});

export default Banner;
