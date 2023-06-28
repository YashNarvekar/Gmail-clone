import React, { Suspense, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Emails from "../components/Emails";
import { Outlet } from "react-router-dom";
import SuspenseLoader from "../components/common/SuspenseLoader";
import { Box } from "@mui/material";

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrwaer = () => {
    setOpenDrawer((prevState) => !prevState);
  };
  return (
    <>
      <Header toggleDrwaer={toggleDrwaer} />
      <Box>
        <SideBar openDrawer={openDrawer} />
        <Suspense fallback={<SuspenseLoader />}>
          <Outlet context={{ openDrawer }} />
        </Suspense>
      </Box>
    </>
  );
};

export default Main;
