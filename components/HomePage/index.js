import { memo } from "react";

import Banner from "components/HomePage/Banner";

import { StyledHomePage } from "./styles";

const HomePage = memo(() => {
  return (
    <StyledHomePage>
      <Banner />
    </StyledHomePage>
  );
});

export default HomePage;
