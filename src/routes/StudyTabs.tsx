import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TeacherList from "../components/TeacherList";
import Favourites from "../components/Favourites";

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator>
      <Screen name="TeacherList" component={TeacherList} />
      <Screen name="Favourites" component={Favourites} />
    </Navigator>
  );
}

export default StudyTabs;
