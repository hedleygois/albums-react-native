import React from "react";
import { AppRegistry, View } from "react-native";
import Header from "./components/header";
import AlbumList from "./components/AlbumList";
import AlbumDetail from "./components/AlbumDetail";
import axios from "axios";

const App = () => (
  <View>
    <Header headerText={"Hedley Luna"}/>
    <AlbumList />
  </View>
);

// Only the root uses the AppRegistry
AppRegistry.registerComponent('albums2', () => App);