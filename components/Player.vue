<template>
    <div>
        <div class="anime-player-wrp">
            <h1 class="anime-player__title-name">Смотреть аниме «<span>{{getMovie.title}}</span>» онлайн<span></span></h1>
            <div class="anime-player">
                <div class="anime-player__video" v-if="move.length">
                    <iframe id="kodik-player" loading="lazy" :src="move[currentActive].link" width="810" height="470" frameborder="0" allowfullscreen allow="autoplay *; fullscreen *"></iframe>
                </div>
                <div class="anime-player__tabs-wrp">
                    <div class="anime-player__tabs">
                        <div class="anime-player__voicing">
                            <button class="anime-player__tabs-btn active">Озвучка</button>
                        </div>
                        <div class="anime-player__players">
                            <button class="anime-player__tabs-btn">Плеер</button>
                        </div>
                    </div>
                    <div class="anime-player__data">
                        <div class="anime-player__data-wrp">
                            <div class="anime-player__data-type" v-for="(movie, index) in move" :key="index">
                                <button 
                                    class="anime-player__data-type-btn"
                                    :class="{anime_active: index === currentActive}"
                                    @click="currentActive = index"
                                >
                                    {{movie.translation.title}}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        data(){
            return{
                loaded: false,
                currentActive: 0,
            }
        },
        name: 'anime-player',
        computed: {
        ...mapGetters({
            getMovie:'content/getMovie',
            move: 'content/getMovies'
            })
        },
    }
</script>
