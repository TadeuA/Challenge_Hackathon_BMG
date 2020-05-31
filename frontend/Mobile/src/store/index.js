import { createStore } from "redux";
const INITIAL_STATE = {
  groupActive: [],
  groups: [
    {
      id: 1,
      shild: 1,
      gamers: [
        {
          id: 1,
          nickname: "MariaPereira",
          avatar: 1,
          points: "320",
        },
        {
          id: 2,
          nickname: "joaopedro",
          avatar: 1,
          points: "300",
        },
        {
          id: 3,
          nickname: "Pedro123",
          avatar: 1,
          points: "200",
        },
        {
          id: 4,
          nickname: "Nascimento",
          avatar: 1,
          points: "100",
        },
        {
          id: 5,
          nickname: "play",
          avatar: 1,
          points: "2",
        },
      ],
    },
    {
      id: 2,
      shild: 2,
      gamers: [
        {
          id: 6,
          nickname: "Fereira",
          avatar: 1,
          points: "520",
        },
        {
          id: 7,
          nickname: "péPreto",
          avatar: 1,
          points: "400",
        },
        {
          id: 8,
          nickname: "Vascaino",
          avatar: 1,
          points: "200",
        },
        {
          id: 9,
          nickname: "Nik",
          avatar: 1,
          points: "150",
        },
        {
          id: 10,
          nickname: "Jorge",
          avatar: 1,
          points: "98",
        },
      ],
    },
    {
      id: 3,
      shild: 3,
      gamers: [
        {
          id: 11,
          nickname: "filhote",
          avatar: 1,
          points: "220",
        },
        {
          id: 12,
          nickname: "Vini",
          avatar: 1,
          points: "210",
        },
        {
          id: 13,
          nickname: "galo",
          avatar: 1,
          points: "200",
        },
        {
          id: 14,
          nickname: "mac",
          avatar: 1,
          points: "150",
        },
        {
          id: 15,
          nickname: "Digo",
          avatar: 1,
          points: "140",
        },
      ],
    },
    {
      id: 4,
      shild: 4,
      gamers: [
        {
          id: 7,
          nickname: "péPreto",
          avatar: 1,
          points: "400",
        },
        {
          id: 2,
          nickname: "joaopedro",
          avatar: 1,
          points: "300",
        },
        {
          id: 12,
          nickname: "Vini",
          avatar: 1,
          points: "210",
        },
        {
          id: 5,
          nickname: "play",
          avatar: 1,
          points: "2",
        },
      ],
    },
    {
      id: 5,
      shild: 2,
      gamers: [
        {
          id: 6,
          nickname: "Fereira",
          avatar: 1,
          points: "520",
        },
        {
          id: 1,
          nickname: "MariaPereira",
          avatar: 1,
          points: "320",
        },
        {
          id: 13,
          nickname: "galo",
          avatar: 1,
          points: "200",
        },
        {
          id: 10,
          nickname: "Jorge",
          avatar: 1,
          points: "98",
        },
      ],
    },
  ],
};
function reducer(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_SELECT_GROUP") {
    return { ...state, groupActive: action };
  }

  return state;
}

const store = createStore(reducer);

export default store;
