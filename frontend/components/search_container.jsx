import { connect } from "react-redux";
import { fetchBenches } from "../actions/bench_actions";
import Search from "./search";
import { selectAllBenches } from "./../reducers/selectors";

const mapStateToProps = (state, { match }) => {
  const benchId = parseInt(match.params.benchId);
  const benches = selectAllBenches(state);

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
