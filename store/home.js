export const state = () => ({
    loading: false,

    nav: false,

    assets: {},

    blog: null,

    blogs: null,

})

export const mutations = {
    loading: (state, loading) => { state.loading = loading },

    nav: (state, bool) => { state.nav = bool },

    assets: (state, assets) => { state.assets = assets },

    blog: (state, blog) => { state.blog = blog },

    blogs: (state, blogs) => { state.blogs = blogs },

    service: (state, service) => { state.service = service }
}

export const actions = {
    assets({ commit }, payload) {
        return this.$axios.$post(`home/assets`, payload).then(ok => {
            commit('assets', ok.data)
            return ok.data
        }).catch(() => false)
    },

    register({ commit }, payload) {
        return this.$axios.$post(`lead/register`, payload).then(ok => {
            return ok
        }).catch(() => false)
    },

    blog({ commit }, payload) {
        return this.$axios.$post(`home/blog`, payload).then(ok => {
            commit('blog', ok.data)
            return ok.data
        }).catch(() => false)
    },

    blogs({ commit }, payload) {
        return this.$axios.$post(`home/blogs`, payload).then(ok => {
            commit('blogs', ok.data)
            return ok.data
        }).catch(() => false)
    },
}