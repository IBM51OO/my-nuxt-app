
export const state = () => ({
    allMovies: {},
    movieMaterial: {},
    movieScreens: [],
    trailer: {}
})

export const getters  = {
    getMovie: (state) => {
        return state.allMovies
    },
    getMovieMaterial: (state) => {
        return state.movieMaterial
    },
    getMovieScreens: (state) => {
        return state.movieScreens
    },
    getTrailer: (state) => {
        return state.trailer
    }
}

export const mutations = {
    setMovies(state, allMovies){
        state.allMovies = allMovies
    },
    setMovieMaterial(state){
        state.movieMaterial = state.allMovies.material_data
    },
    setMovieScreens(state){
        state.movieScreens = state.allMovies.screenshots.slice(0,4)
    },
    setTrailer(state,trailer){
        state.trailer = trailer
    }
}

export const actions = {

    async getAllMovies({commit},idParam){
       const result = await this.$axios.get('https://kodikapi.com/search?token=b366fa83b760db1dc05b3c7d5f70331e&limit=1&with_material_data=true&shikimori_id='+idParam)
       let allMovies = result.data.results[0]
       commit('setMovies', allMovies)
       commit('setMovieMaterial')
       commit('setMovieScreens')
    },

    async getTrailerOfMovie({commit}, idParam){
       const result = await this.$axios.get('https://shikimori.one/api/animes/'+idParam)
       let trailelVideos = null;
       if(result.data.videos.length >= 1){
            trailelVideos = result.data.videos[0]
        }
        commit('setTrailer', trailelVideos)
    }
}