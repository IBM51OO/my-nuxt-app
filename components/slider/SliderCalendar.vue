<template>
    <div class="calendar">
        <div class="container">
            <div class="titles-cards__nav">
                <div>
                    <h1 class="titles-cards__h1">Расписание</h1>
                    <hr>
                </div>
                <NuxtLink to="/" class="titles-cards__watch-all">Смотреть все</NuxtLink>
            </div>
            <swiper ref="swiperCalendar" :options = "swiperOptions2">
                    <swiper-slide v-for="day in dayOfWeek" :key="day.id" :class="day.Week">
                        <div class="calendar__progress-bar-wrp">
                            <div class="calendar__progress-bar">
                                <div class="calendar__progress-bar-item-wrp" v-for="title in titleRelease" :key="title.id">
                                    <div class="calendar__progress-bar-item">
                                        <span class="calendar__progress-bar-time" id="calendar__progress-bar-time" :data-release="title.timeToRelease">{{title.timeToRelease}}</span>
                                        <img :src="title.img" alt="" class="calendar__progress-bar-img">
                                    </div>
                                    <div class="calendar__progress-bar-line"></div>
                                </div>
                            </div>
                        </div>
                        <div class="calendar__progress-bar-titles">
                                    <div class="calendar__splited-titles">
                                        <div class="calendar__title-time">
                                            <a href="#"  class="calendar__title-link">
                                                <img src="images/content/321.png" alt="">
                                                <span class="calendar__title-name">Этот глупый свин не понимает мечту девочки зайки</span>
                                            </a>
                                            <span class="calendar__title-ep">
                                                10 серия
                                            </span>  
                                        </div>
                                        <div class="calendar__title-time">
                                            <a href="#"  class="calendar__title-link">
                                                <img src="images/content/321.png" alt="">
                                                <span class="calendar__title-name">Этот глупый свин не понимает мечту девочки зайки</span>
                                            </a>
                                            <span class="calendar__title-ep">
                                                10 серия
                                            </span>  
                                        </div>
                                        <div class="calendar__title-time">
                                            <a href="#"  class="calendar__title-link">
                                                <img src="images/content/321.png" alt="">
                                                <span class="calendar__title-name">Этот глупый свин не понимает мечту девочки зайки</span>
                                            </a>
                                            <span class="calendar__title-ep">
                                                10 серия
                                            </span>  
                                        </div>
                                        <div class="calendar__title-time">
                                            <a href="#"  class="calendar__title-link">
                                                <img src="images/content/321.png" alt="">
                                                <span class="calendar__title-name">Этот глупый свин не понимает мечту девочки зайки</span>
                                            </a>
                                            <span class="calendar__title-ep">
                                                10 серия
                                            </span>  
                                        </div>
                                        <div class="calendar__title-time">
                                            <a href="#"  class="calendar__title-link">
                                                <img src="images/content/321.png" alt="">
                                                <span class="calendar__title-name">Этот глупый свин не понимает мечту девочки зайки</span>
                                            </a>
                                            <span class="calendar__title-ep">
                                                10 серия
                                            </span>  
                                        </div>
                                        <div class="calendar__title-time">
                                            <a href="#"  class="calendar__title-link">
                                                <img src="images/content/321.png" alt="">
                                                <span class="calendar__title-name">Этот глупый свин не понимает мечту девочки зайки</span>
                                            </a>
                                            <span class="calendar__title-ep">
                                                10 серия
                                            </span>  
                                        </div>
                                        <div class="calendar__title-time">
                                            <a href="#"  class="calendar__title-link">
                                                <img src="images/content/321.png" alt="">
                                                <span class="calendar__title-name">Этот глупый свин не понимает мечту девочки зайки</span>
                                            </a>
                                            <span class="calendar__title-ep">
                                                10 серия
                                            </span>  
                                        </div>
                                        <div class="calendar__title-time">
                                            <a href="#"  class="calendar__title-link">
                                                <img src="images/content/321.png" alt="">
                                                <span class="calendar__title-name">Этот глупый свин не понимает мечту девочки зайки</span>
                                            </a>
                                            <span class="calendar__title-ep">
                                                10 серия
                                            </span>  
                                        </div>
                                        <div class="calendar__title-time">
                                            <a href="#"  class="calendar__title-link">
                                                <img src="images/content/321.png" alt="">
                                                <span class="calendar__title-name">Этот глупый свин не понимает мечту девочки зайки</span>
                                            </a>
                                            <span class="calendar__title-ep">
                                                10 серия
                                            </span>  
                                        </div>
                                        <div class="calendar__title-time">
                                            <a href="#"  class="calendar__title-link">
                                                <img src="images/content/321.png" alt="">
                                                <span class="calendar__title-name">Этот глупый свин не понимает мечту девочки зайки</span>
                                            </a>
                                            <span class="calendar__title-ep">
                                                10 серия
                                            </span>  
                                        </div>
                                    </div>
                        </div>
                    </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'car',
        data() {
            return {
                swiperOptions2: {
                    direction: 'horizontal',
                    slidesPerView: '1',
                },
                titleRelease: [
                    {id: 1, img: require('@/static/images/content/image 29.png'),timeToRelease: '13:30'},
                    {id: 2, img: require('@/static/images/content/image 29.png'),timeToRelease: '13:30'},
                    {id: 3, img: require('@/static/images/content/image 29.png'),timeToRelease: '13:30'},
                    {id: 4, img: require('@/static/images/content/image 29.png'),timeToRelease: '13:30'},
                    {id: 5, img: require('@/static/images/content/image 29.png'),timeToRelease: '13:30'},
                    {id: 6, img: require('@/static/images/content/image 29.png'),timeToRelease: '13:30'},
                    {id: 7, img: require('@/static/images/content/image 29.png'),timeToRelease: '13:30'},
                    {id: 8, img: require('@/static/images/content/image 29.png'),timeToRelease: '13:30'},
                ],
                dayOfWeek: [
                   {id:1, Week: 'monday'},
                   {id:2, Week: 'tuesday'},
                   {id:3, Week: 'wednesday'},
                   {id:4, Week: 'thursday'},
                   {id:5, Week: 'friday'},
                   {id:6, Week: 'saturday'},
                   {id:7, Week: 'sunday'}
                ]
            }
        },
        computed: {
            mySwiper() {
                return this.$refs.swiperCalendar.$swiper
            }
        }
    }
</script>