export const setToken = (param) => {
  // return an action
  return {
    type: 'SET_TOKEN',
    token: param,
  }
}

export const removeToken = (param) => {
  // return an action
  return {
    type: 'REMOVE_TOKEN',
    token: param,
  }
}
