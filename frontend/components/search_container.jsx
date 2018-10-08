import { connect } from "react-redux";
import { fetchBenches } from "../actions/bench_actions";
import Search from "./search";

const mapStateToProps = (state, { match }) => {
  const benchId = parseInt(match.params.benchId);
  const benches = state.entities.benches;

  return {
    benches,
    benchId
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
