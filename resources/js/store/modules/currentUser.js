const state = {
    user: {}
};
const getters = {};
const actions = {
    getUser({commit}) {
        axios.get('/api/user')
            .then((res) => {
                commit('setUser', res.data);
            })
    },
    logoutUser() {
        axios.post('/api/logout')
            .then(() => {
                window.location.replace('/login')
            })
    }
};
const mutations = {
    setUser(state, data) {
        state.user = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
