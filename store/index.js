
export const state = () => ({
  user: {
    email: null,
    name: null,
    password: null,
  },
});

export const mutations = {
  setEmail(state, email) {
    state.user.email = email;
  },
  setName(state, name) {
    state.user.name = name;
  },
  setPassword(state, password) {
    state.user.password = password;
  },
};
