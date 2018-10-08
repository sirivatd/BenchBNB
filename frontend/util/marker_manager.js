export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    console.log(`This are the benches in MarkerManager ${benches}`);
    const benchesObj = {};
    benches.forEach(bench => (benchesObj[bench.id] = bench));
    benches.forEach(bench => this.createMarkerFromBench(bench));
  }

  createMarkerFromBench(bench) {
    const position = new google.maps.LatLng(bench.lat, bench.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      benchId: bench.id
    });
    this.markers[marker.benchId] = marker;
  }
}
