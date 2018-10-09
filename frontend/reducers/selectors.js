import values from "lodash/values";

export const selectAllBenches = state => values(state.entities.benches);
