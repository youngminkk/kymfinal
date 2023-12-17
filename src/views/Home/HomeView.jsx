import React from "react";
import HomeLayout from "./HomeLayout";
import Scheduler from "../../components/Scheduler/Scheduler";
import Taps from "../../components/Taps/Taps";
import Map from "../../components/Map/Map";
import Notifications from "../../components/Notifications/Notifications";
import Chat from "../../components/Chat/Chat";


const HomeView = () => {
  return (
      <HomeLayout>
        <Taps />
        <Map />
        <Scheduler />
        <Notifications />
        <Chat />
      </HomeLayout>
  )
}

export default HomeView