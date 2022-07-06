
export const state = () => ({
    allMovies: {},
    movieMaterial: {},
    movieScreens: [],
    trailer: {},
    movie: {},
})

export const getters  = {
    getMovie: (state) => {
        return state.movie
    },
    getMovies: (state) => {
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
    },
    getAllTranslations: (state) => {
        return state.allTranslations
    }
}

export const mutations = {
    setMovie(state, movie){
        state.movie = movie
    },
    setMovies(state, allMovies){
        state.allMovies = allMovies
    },
    setMovieMaterial(state){
        state.movieMaterial = state.movie.material_data
    },
    setMovieScreens(state){
        state.movieScreens = state.movie.screenshots.slice(0,4)
    },
    setTrailer(state, trailer){
        state.trailer = trailer
    },
    setAllTranslations(state, allTranslations){
        state.allTranslations = allTranslations
    }
}

export const actions = {

    async getAllMovies({commit},idParam){
       await this.$axios.get('https://kodikapi.com/search?token=b366fa83b760db1dc05b3c7d5f70331e&with_material_data=true&shikimori_id='+idParam).then( res => {
        let allMovies = res.data.results
        commit('setMovie', allMovies[0])
        commit('setMovies', allMovies)
        commit('setMovieMaterial')
        commit('setMovieScreens')
       })
    },

    async getTrailerOfMovie({commit}, idParam){
       await this.$axios.get('https://shikimori.one/api/animes/'+idParam).then( result =>{
        let trailelVideos = null;
        if(result.data.videos.length >= 1){
            trailelVideos = result.data.videos[0]
        }
        commit('setTrailer', trailelVideos)
       })
    }
}