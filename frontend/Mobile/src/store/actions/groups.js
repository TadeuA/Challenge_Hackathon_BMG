export function togglesSelectGroup(group) {
  return {
    type: "TOGGLE_SELECT_GROUP",
    gamers: group.gamers,
  };
}
