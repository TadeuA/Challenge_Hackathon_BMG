const INITIAL_STATE = {
  iAm: "",
  difficulty: "",
  nivel: "",
  progress: 0.05,
};
export default function level(state = INITIAL_STATE, action) {
  console.log(action);
  if (action.type === "TOGGLE_I_AM") {
    return { ...state, iAm: action, progress: 0.4 };
  }
  if (action.type === "TOGGLE_DIFFICULTY") {
    return { ...state, difficulty: action, progress: 0.7 };
  }
  if (action.type === "TOGGLE_NIVEL") {
    return { ...state, nivel: action, progress: 1 };
  }

  return state;
}
