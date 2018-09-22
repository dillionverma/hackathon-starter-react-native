const actionTypeNames = [
  'LOGIN_USER',
  'LOGIN_USER_SUCCESS',
  'LOGIN_USER_FAILURE',
]

const actionTypes = actionTypeNames.reduce(
  (obj, actionTypeName) => ({
    ...obj,
    [actionTypeName]: actionTypeName,
  }),
  {},
);

export default actionTypes;
