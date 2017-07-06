import React, { Component } from "react";
import { View, Text } from "react-native";
import AlbumDetail from "./AlbumDetail";
import axios from "axios";

class AlbumList extends Component {

  state = {
    albums: []
  };

  // This is part of react-native life cycle. It'll me called automagically
  componentWillMount() {
    axios
    .get("https://rallycoding.herokuapp.com/api/music_albums")
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums
      .map(album => <AlbumDetail key={album.title} album={album} />)
  }

  render() {
    return (
      <View>
        { this.renderAlbums() }
      </View>
    );
  }
}

// const AlbumList = () => {
//   return (
//     <View>
//       <Text>Lista</Text>
//     </View>
//   )
// };

export default AlbumList;