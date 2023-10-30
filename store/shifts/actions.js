export default {
  addShift({ commit }, shift) {
    commit('ADD_SHIFT', shift);
  }, deleteShift({ commit }, shiftId) {
    commit('REMOVE_SHIFT', shiftId);
  }
};
