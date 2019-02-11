import { GET_PERSONS } from "../actions/persons";

export const persons = (store = "", action) => {
  switch (action.type) {
    case GET_PERSONS:
      return action.persons;

    default:
      return store;
  }
};
