import React from "react";

import BenchIndex from "./bench_index";
import BenchMap from "./bench_map";

const Search = ({ benches, fetchBenches }) => (
  <div>
    <BenchMap benches={benches} fetchBenches={fetchBenches} />
    <BenchIndex benches={benches} fetchBenches={fetchBenches} />
  </div>
);

export default Search;