import React from "react";
import { Box, H2 } from "../../components";
import Info from "./components/Info";

const Home = () => {
  return (
    <Box containerMode autoSize>
      <Info icon="user" title={<H2>Job position</H2>}
        children={<p>Something...</p>}
      />
    </Box>
  );
};

export default Home;
