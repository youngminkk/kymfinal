import React from "react";
import ThemeProvider from '../../theme/ThemeProvider';
import HomeLayout from "./HomeLayout";
import Scheduler from "../../components/Scheduler/Scheduler";
import Taps from "../../components/Taps/Taps";
import Map from "../../components/Map/Map";
import Notifications from "../../components/Notifications/Notifications";
import Chat from "../../components/Chat/Chat";


const HomeView = () => {
  return (
      <ThemeProvider>
      <HomeLayout>
        <Taps />
        <Map column="left"/>
        <Scheduler column="left"/>
        <Notifications column="right"/>
        <Chat column="right"/>
      </HomeLayout>
     </ThemeProvider>
  )
}

export default HomeView