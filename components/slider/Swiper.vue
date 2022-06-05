<template>
<swiper ref="mySwiper" :options = "swiperOptions">
    <swiper-slide v-for="slide in lastUpdatesTitles" :key="slide.id">
        <div class="swiper-slide__image">
            <NuxtLink :to="/anime/+slide.id" class="swiper-slide__image-link">
                <div class="swiper-slide__image-img">
                    <img :src="slide.posterUrl" alt="">
                </div>
                <div class="swiper-slide__image-overlay">
                    <div class="card-rate">
                        <img src="../../static/images/content/star 2.png" alt="">
                        <div class="card-rate__num">
                            <span>{{slide.titleRate}}</span>
                        </div>
                    </div>
                    <div class="title-type">
                        <span>{{slide.titleType}}</span>
                    </div>
                </div>
            </NuxtLink>
            <div class="swiper-slide__slides-fix"></div>
        </div>
        <div class="title__cards-title-about">
            <div class="title__cards-title-about">
                <div class="title__cards-title-name">
                    <NuxtLink to="/" class="title__cards-title-name-link">
                        {{slide.title}}
                    </NuxtLink> 
                </div>
                <div class="titles__card-title-info">
                    <span class="titles__card-ep-counter">
                        {{slide.titleEps}}
                    </span>
                    <img src="../../static/images/content/Star 1.png" alt="">
                    <NuxtLink to="/" class="titles__card-title-year">
                        {{slide.year}}
                    </NuxtLink>
                    <img src="../../static/images/content/Star 1.png" alt="">
                    <NuxtLink to="/" class="titles__card-title-type">
                        {{slide.titleKind}}
                    </NuxtLink> 
                </div>
            </div>
        </div>
    </swiper-slide>
</swiper>
</template>

<script>
    export default {
        name: 'carusel',
        data() {
            return {
                swiperOptions: {
                    direction: 'horizontal',
                    slidesPerView: '6',
                    spaceBetween: 20,
                    cssMode: false,
                    preloadImages: false,
                    watchSlidesProgress:true,
                },
                lastUpdatesTitles: [
                    {id:'1735',title: 'Наруто: Ураганные хроники',posterUrl:'/image 28.png',titleRate: '8.3',titleType: 'Онгоинг',titleEps: '25', year: '2021', titleKind: 'Тв-Сериал'},
                    {id:'37450',title: 'Этот глупый свин не понимает мечту девочки-зайки"',posterUrl:'/321.png',titleRate: '8.3',titleType: 'Онгоинг',titleEps: '25', year: '2021', titleKind: 'Тв-Сериал'},
                    {id:'38000',title: 'Клинок, рассекающий демонов',posterUrl:'/f.png',titleRate: '8.3',titleType: 'Онгоинг',titleEps: '25', year: '2021', titleKind: 'Тв-Сериал'},
                    {id:'121',title: 'Стальной алхимик',posterUrl:'/g.png',titleRate: '8.3',titleType: 'Онгоинг',titleEps: '25', year: '2021', titleKind: 'Тв-Сериал'},
                    {id:'37520',title: 'Дороро',posterUrl:'/gweg.png',titleRate: '8.3',titleType: 'Онгоинг',titleEps: '25', year: '2021', titleKind: 'Тв-Сериал'},
                    {id:'2904',title: 'Код Гиас',posterUrl:'/image 24.png',titleRate: '8.3',titleType: 'Онгоинг',titleEps: '25', year: '2021', titleKind: 'Тв-Сериал'},
                    {id:'31043',title: 'Город, в котором меня нет',posterUrl:'/image 27.png',titleRate: '8.3',titleType: 'Онгоинг',titleEps: '25', year: '2021', titleKind: 'Тв-Сериал'}
                ]
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            }
        }
    }
</script>
