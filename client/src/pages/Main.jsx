import React, { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrwaer = () => {
    setOpenDrawer((prevState) => !prevState);
  };
  return (
    <div>
      <Header toggleDrwaer={toggleDrwaer} />
      <SideBar openDrawer={openDrawer} />
      <div>Display Mails</div>
    </div>
  );
};

export default Main;
