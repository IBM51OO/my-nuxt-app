<template>
    <div>
        <section class="title-header" style="background-image: url(images/bgr-card/wefwe.jpg);">
        <div class="container">
            <div class="title-header__wrapper">
                <div class="title-header__imgs-card-fake">
                    <div class="title-header__main-img">
                       
                    </div>
                </div>
                <div class="title-header__descr-wrp">
                    <div class="title-header__name-wrp">
                        <h1 class="title-header__name">
                            {{movieInfo.title}}
                        </h1>
                        <h2 class="title-header__name-eng">
                            {{movieInfo.title_en}}
                        </h2>
                    </div>
                </div>
                <div class="title-header__choice-rate">
                    <div class="title-header__rate-wrp">
                        <div class="title-header__rate">
                            <div class="title-header__rate-our">Рейтинг: <span class="title__rate-num">{{movieInfo.kinopoisk_rating}}</span></div>
                            <div class="title__rate-shiki">
                                <img src="/Group 223.png" alt="shiki"><span class="title__rate-num">7.5</span>
                            </div>
                            <div class="title__rate-imdb">
                                IMDb<span class="title__rate-num">{{movieInfo.imdb_rating}}</span>
                            </div>
                            <div class="title__rate-like-dropdown" id="title__rate-like-dropdown">
                                <button class="title__rate-like" onclick="titleRateDropDown()">
                                    Оценить
                                </button>
                                <div class="title__rate-dropdown-content" id="title__rate-dropdown-content">
                                    <button class="title__rate-point" value="1">1</button>
                                    <button class="title__rate-point" value="2">2</button>
                                    <button class="title__rate-point" value="3">3</button>
                                    <button class="title__rate-point" value="4">4</button>
                                    <button class="title__rate-point" value="5">5</button>
                                    <button class="title__rate-point" value="6">6</button>
                                    <button class="title__rate-point" value="7">7</button>
                                    <button class="title__rate-point" value="8">8</button>
                                    <button class="title__rate-point" value="9">9</button>
                                    <button class="title__rate-point" value="10">10</button>
                                </div>
                            </div>
                            <!-- if auth -->
                            <div class="title__rate-your-like-wrp" id="title__rate-your-like-wrp">
                                Ваша оценка: <span class="title__rate-your-like" id="title__rate-your-like">7.5</span>
                            </div>
                            <!-- end -->
                            <div class="title__likes-countr">
                                <span><span class="title__likes-countr-num">23 529</span> оценок</span>
                            </div>
                            <div class="title__views-counter">
                                Просмотров:<span class="title__views-counter-num">127893</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section class="title-content">
            <div class="container">
                <div class="title-content__about-wrp">
                    <div class="title-content__about-actions">
                        <div class="title-content__imgs-card">
                            <div class="title-content__main-img">
                                <img :src="movieInfo.poster_url" alt="alt">
                            </div>
                        </div>
                        <div class="title-content__trailer">
                            <a href="javascript:void(0);" class="title-content__trailer-run" @click="isPopUpActive = !isPopUpActive" :style="'background-image: url('+trailelVideos.image_url+');'">
                                <div class="title-content__trailer-time">
                                    <span>2:23</span>
                                </div>
                                <span class="title-content__trailer-watch">
                                    Трейлер
                                </span>
                            </a>
                        </div>
                        <button class="title-header__watch title-content__about-actions-style">Перейти к просмотру</button>
                        <div class="title-header__add-to">
                            <button class="title-header__add title-content__about-actions-style" id="title-header__add" onclick="addToList()">Добавить к список</button>
                            <button class="title-header__add-to-options"></button>
                        </div>
                    </div>
                    <div class="title-content__description-wrp">
                        <div class="title-content__about">
                            <h1 class="title-content__h1-about">О сериале</h1>
                            <div class="title-content__genre title-content__desc-st">
                                <div class="title-content__desc-st-wrp" v-for="(genre,index) in genres" :key="index">
                                    <span class="title-genre"><NuxtLink to="/">{{genre}}</NuxtLink></span>
                                </div>
                            </div>
                            <div class="title-content__about-type title-content__desc-st">
                                <span class="title-content__about-dark">Тип:</span>
                                <a href="#" class="title-content__about-white">Тв-Сериал</a>
                            </div>
                            <div class="title-content__about-ep title-content__desc-st">
                                <span class="title-content__about-dark">Серий:</span>
                                <span>26</span>
                            </div>
                            <div class="title-content__about-duration title-content__desc-st">
                                <span class="title-content__about-dark">Продложительность серии</span>
                                <span>24</span>
                            </div>
                            <div class="title-content__about-year title-content__desc-st">
                                <span class="title-content__about-dark">Год выпуска:</span>
                                <a href="#" class="title-content__about-white">2019</a>
                            </div>
                            <div class="title-content__about-studio title-content__desc-st">
                                <span class="title-content__about-dark">Студия:</span>
                                <a href="#" class="title-content__about-white">А1</a>
                            </div>
                            <div class="title-content__about-director title-content__desc-st">
                                <span class="title-content__about-dark">Режиссёр:</span>
                                <a href="#" class="title-content__about-white">Харуки Мураками</a>
                            </div>
                            <div class="title-content__about-age-limit title-content__desc-st">
                                <span class="title-content__about-dark">Возрастное ограничение:</span>
                                <span>18+</span>
                            </div>
                            <div class="title-content__about-dubbers title-content__desc-st">
                                <span class="title-content__about-dark">Озвучка</span>
                                <a href="#" class="title-content__about-white">AniDub</a>
                            </div>
                        </div>
                        <div class="title-content__description">
                            <h1 class="title-content__description-h1">
                                Описание
                            </h1>
                            <hr>
                            <div class="title-content__desc-text">
                                <p>{{animeDesc}}</p>
                                <a href="#" class="title-content__desc-read-more">Читать полностью</a>
                            </div>
                        </div>
                    </div>
                    <div class="title-content__social"></div>
                </div>
                <div class="title-content__images-from-title-wrp">
                    <h1>Кадры из аниме</h1>
                    <div class="title-content__images-from-title">
                        <div class="title-content__images-from-title-wrp" v-for="(item,index) in screenshots" :key ="index">
                            <img :src="item" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="anime-player__wrapper">
                <div class="container">
                    <div class="anime-player">
                        <div class="anime-player__video">
                            <h1 class="anime-player__title-name">Смотреть аниме «<span>{{movieInfo.title}}</span>» онлайн<span></span></h1>
                        <iframe id="kodik-player" :src="movie.link" width="810" height="470" frameborder="0" allowfullscreen allow="autoplay *; fullscreen *"></iframe>
                        </div>
                        <div class="anime-player__tabs">
                            <div class="anime-player__voicing">
                                <span>Озвучка</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="title-content__trailers-wrapper" id="title-content__trailers-wrapper" @click="isPopUpActive = !isPopUpActive" v-if="isPopUpActive">
            <div class="title-content__trailers-content">
                <iframe width="760" height="415" :src="this.trailelVideos.player_url" title="YouTube video player" allow="fullscreen"></iframe>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return{
            movie: [],
            movieInfo: [],
            screenshots: [],
            trailelVideos: [],
            animeDesc: [],
            isPopUpActive: false,
            genres: []
        }
    },
    async beforeCreate(){
        const dataFromShiki = this.$axios.get('https://shikimori.one/api/animes/'+this.$route.params.animeid)
        const resFromShiki = await dataFromShiki
        if(resFromShiki.data.videos.length >= 1){
            this.trailelVideos = resFromShiki.data.videos[0]
        }
        const data = this.$axios.get('https://kodikapi.com/search?token=b366fa83b760db1dc05b3c7d5f70331e&limit=1&with_material_data=true&shikimori_id='+this.$route.params.animeid)
        const result = await data
        this.movie = result.data.results[0]
        this.genres = this.movie.material_data.anime_genres
        console.log(this.genres)
        this.movieInfo = this.movie.material_data
        this.screenshots = this.movie.screenshots.slice(0,4)
        this.animeDesc = this.movie.material_data.anime_description
    },
    layout: 'header'
}
</script>