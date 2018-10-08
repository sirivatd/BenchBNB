import React from "react";

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchBenches();
  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  render() {
    const { benches } = this.props;
    if (this.isEmpty(benches)) {
      return <h3>Loading</h3>;
    } else {
      return (
        <div className="bench-index">
          {Object.keys(benches).map(key => {
            return (
              <div className="bench" key={benches[key].id}>
                <h3>Description: {benches[key].description}</h3>
                <h3>Latitude: {benches[key].lat}</h3>
                <h3>Longitude: {benches[key].lng}</h3>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default BenchIndex;
