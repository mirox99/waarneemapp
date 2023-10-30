export default {
  SET_SHIFTS(state, shifts) {
    state.shifts = shifts;
  },
  ADD_SHIFT(state, shift) {
    state.shifts.push(shift);
  },
  REMOVE_SHIFT(state, shiftId) {
    state.shifts = state.shifts.filter(shift => shift.id !== shiftId);
  }
}
