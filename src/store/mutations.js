export const mutationsMsg = (state, payload) => {
  state.msg = payload.msg;
}

export const mutationMsgReload = (state) => {
  state.msg = window.localStorage.msg;
}
