export const GET_PERSONS = "GET_PERSONS";

export const personsFetchDataSuccess = persons => {
  return {
    type: GET_PERSONS,
    persons
  };
};

export const personsFetchData = url => {
  return dispatch => {
    fetch(url)
      .then(res => {
        if (!res) {
          throw new Error(res.status);
        }
        return res;
      })
      .then(res => res.json())
      .then(persons => dispatch(personsFetchDataSuccess(persons)));
  };
};

export const deletePerson = url => {
  return dispatch => {
    fetch(url)
      .then(res => {
        if (!res) {
          throw new Error(res.status);
        }
        return res;
      })
      .then(res => res.json())
      .then(persons => dispatch(personsFetchDataSuccess(persons)));
  };
};
