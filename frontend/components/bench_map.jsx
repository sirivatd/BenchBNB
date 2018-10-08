import React from "react";
import MarkerManager from "./../util/marker_manager";

class BenchMap extends React.Component {
  constructor(props) {
    super(props);
  }
  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  componentDidMount() {
    this.props.fetchBenches();
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };

    const { benches } = this.props;

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
  }

  render() {
    const { benches } = this.props;

    if (this.isEmpty(benches)) {
    } else {
      let benchArr = [];
      benchArr = Object.keys(benches).map(key => ({
        id: key,
        description: benches[key].description,
        lat: benches[key].lat,
        lng: benches[key].lng
      }));
      console.log(benchArr);
      this.MarkerManager.updateMarkers(benchArr);
    }
    return <div id="map-container" ref={map => (this.mapNode = map)} />;
  }
}

export default BenchMap;
