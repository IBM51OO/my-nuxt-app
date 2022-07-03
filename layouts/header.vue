<template>
    <div>
        <header class="header">
            <div class="header__wrapper">
                <div class="header__container container">
                    <div class="header__nav">
                        <nav>
                            <ul class="header__ul">
                                <li class="header__logo">
                                    <img src="" alt="">
                                </li>
                                <li class="header__li header__li-active"><NuxtLink to="/" class="header__menu-item">Главная</NuxtLink></li>
                                <li class="header__li header__li-anime">
                                    <a href="#" class="header__menu-item">Аниме<img src="images/header/tring.png" alt="tring" class="header__img-tring"></a>
                                    <div class="header__dropdown-menu">
                                        <ul>
                                            <li><a href="#">Безумие</a></li>
                                            <li><a href="#">Боевые исскуства</a></li>
                                            <li><a href="#">Вампиры</a></li>
                                            <li><a href="#">Военное</a></li>
                                            <li><a href="#">Гарем</a></li>
                                            <li><a href="#">Демоны</a></li>
                                            <li><a href="#">Детектив</a></li>
                                            <li><a href="#">Детское</a></li>
                                            <li><a href="#">Дзесей</a></li>
                                            <li><a href="#">Драма</a></li>
                                            <li><a href="#">Игры</a></li>
                                            <li><a href="#">Исторический</a></li>
                                            <li><a href="#">Комендия</a></li>
                                            <li><a href="#">Космос</a></li>
                                            <li><a href="#">Магия</a></li>
                                            <li><a href="#">Машины</a></li>
                                            <li><a href="#">Меха</a></li>
                                            <li><a href="#">Музыка</a></li>
                                            <li><a href="#">Пародия</a></li>
                                            <li><a href="#">Повседневность</a></li>
                                            <li><a href="#">Полиция</a></li>
                                            <li><a href="#">Приключение</a></li>
                                            <li><a href="#">Психологическое</a></li>
                                            <li><a href="#">Романтика</a></li>
                                            <li><a href="#">Самураи</a></li>
                                            <li><a href="#">Сверхъестественное</a></li>
                                            <li><a href="#">Седзё</a></li>
                                            <li><a href="#">Седзё Ай</a></li>
                                            <li><a href="#">Сёнэн</a></li>
                                            <li><a href="#">Сёнен-Ай</a></li>
                                            <li><a href="#">Спорт</a></li>
                                            <li><a href="#">Супер сила</a></li>
                                            <li><a href="#">Сэйнэн</a></li>
                                            <li><a href="#">Триллер</a></li>
                                            <li><a href="#">Ужасы</a></li>
                                            <li><a href="#">Фантастика</a></li>
                                            <li><a href="#">Фэнтези</a></li>
                                            <li><a href="#">Школа</a></li>
                                            <li><a href="#">Экшен</a></li>
                                            <li><a href="#">Этти</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="header__li"><a href="#" class="header__menu-item">Новости</a></li>
                                <li class="header__li"><a href="#" class="header__menu-item">Календарь релизов</a></li>
                            </ul>
                        </nav>
                        <ul class="header__nav-actions">
                            <li class="header__li header__nav-search">
                                <!-- @submit.prevent="myMethod" @blur="currentStatusInput = false" -->
                                <form action="#" class="header__form"  >
                                    <img src="/loupe1.png" alt="search" class="header__search-img">
                                    <input type="text" placeholder="Поиск" class="header__input" v-model="debSearch" @input="debounceSearch">
                                    <div class="header__search-result" id="header__search-result" v-show="currentStatusInput" v-click-outside="close">
                                        <div class="header__error" v-show="error">
                                            {{ error}}
                                        </div>
                                        
                                            <div class="header__search-result-title" v-for="movie in movies" :key="movie.id">
                                                <NuxtLink @click.native="close" :to="'/anime/'+movie.id" class="header__search-result-title-link">
                                            <img :src="'https://shikimori.one/'+movie.image.preview" alt="img">
                                            <div class="header__about-title">
                                                <h1 class="header__title-name">
                                                    {{movie.russian}}
                                                </h1>
                                                <span class="header__title-rate">{{movie.score}}</span>
                                                <span class="header__title-other-name">{{movie.name}}</span>
                                                <span class="header__title-year">{{movie.released_on}}</span>
                                            </div>
                                             </NuxtLink>
                                        </div>
                                       
                                        <a href="#" class="header__all-result">Показать все</a>
                                    </div>
                                    
                                </form>
                            </li>
                            <li class="header__li header__nav-login">
                                <a href="#" class="header__nav-login-link">
                                    <img src="/login.png" alt="login" >
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    <Nuxt />
    </div>
</template>

<script>
import { exit } from 'process'

export default {
    data(){
        return{
            debSearch: '',
            search: null,
            debounce: null,
            movies: [],
            currentStatusInput: false,
            error: ''
        }
    },
    methods: {
        close(){
            console.log('fff')
            this.currentStatusInput = false
            this.debSearch = ''
        },
        setCurrentStatusInput(){
            if(this.search != '' && this.movies.length != 0){
                this.currentStatusInput = true
            }
            else if(this.search == ''){
                this.currentStatusInput = false
                this.error = ''
            }
            else if(this.error != '' && this.search != ''){
                this.currentStatusInput = true
            }
        },
        async getMovies(){
            this.movies.length = 0
            const data = this.$axios.get('https://shikimori.one/api/animes?limit=6&search='+this.search)
            const result = await data
            result.data.forEach((movie) => {
                this.movies.push(movie)
            })
            if(this.movies.length == 0){
                this.error = 'По вашему запросу ничего не найдено'
            }
            else{
                this.error = ''
            }
            this.setCurrentStatusInput()
        },
        debounceSearch(event){
            this.search = null
            console.log(this.search)
            clearTimeout(this.debounce)
            this.debounce = setTimeout(() => {
                this.search = event.target.value
                this.getMovies()
            }, 500)
        },
        
    }
}
</script>
