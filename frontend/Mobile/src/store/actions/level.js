export function togglesIAm(level) {
  return {
    type: "TOGGLE_I_AM",
    iAm: level,
  };
}
export function togglesDifficulty(level) {
  return {
    type: "TOGGLE_DIFFICULTY",
    difficulty: level,
  };
}
export function togglesNivel(level) {
  return {
    type: "TOGGLE_NIVEL",
    nivel: level,
  };
}
