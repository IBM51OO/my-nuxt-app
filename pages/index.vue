<template>
  <div>
    <section class="big-card">
            <div class="container">
                <div class="big-card__title">
                    <div class="big-card__about">
                        <div class="big-card__title-duration">
                            <span>Продолжительность</span>
                            <span><img src="images/big-card/Ellipse 11.png" alt="alt"></span>
                            <span class="big-card__dur">24мин</span>
                        </div>
                        <div class="big-card__rate-wrp">
                            <img src="images/big-card/star.png" alt="alt">
                            <span class="big-card__rate">8.3</span>
                            <span class="big-card__season">Сезон <span>1</span></span>
                            <span class="big-card__episode">Эпизод <span>1</span></span>
                        </div>
                        <h1 class="big-card__title-name">
                            Клинок, рассекающий демонов
                        </h1>
                        <h2 class="big-card__other-name">
                            The Promised Neverland
                        </h2>
                        <p class="big-card__title-desc">
                            С давних времен ходят легенды о существовании жестоких и кровожадных демонов, убивающих людей. Они способны приобретать человеческий облик, втираются в доверие и проникают в жилище, затем истребляют всех, кто находится в доме, жадно пожирая их тела.
                        </p>
                        <div class="big-card__buttons">
                            <NuxtLink to="/anime/38000" class="big-card__watch"><img src="images/big-card/Polygon 1.png" alt="alt">Смотреть</NuxtLink>
                            <a href="#" class="big-card__add"><img src="images/big-card/Group 197.png" alt="alt">В желаемое</a>
                        </div>
                    </div>
                    <div class="big-card__another-titles">
                        <div class="big-card__slider">
                            <a href="#" class="big-card__title-link">
                                <span>Магическая битва</span>
                            </a>
                            <img src="images/big-card/5a2a9a4315d2b 1.png" alt="img">
                            <span class="big-card__ep-counter">Добавлен 10 эпизод</span>
                        </div>
                        <div class="big-card__slider">
                            <a href="#" class="big-card__title-link">
                                <span>Атака титанов</span>
                            </a>
                            <img src="images/big-card/2.png" alt="img">
                            <span class="big-card__ep-counter">Добавлен 10 эпизод</span>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    <section :class="'content ' +themeColor">
        <a href="javascript:void(0);" class="theme-button" @click="changeTheme">
            Изменить тему
        </a>
        <div class="titles-cards titles-cards-last-add">
            <div class="container">
                <div class="titles-cards__nav">
                    <div>
                        <h1 class="titles-cards__h1">Последние обновления</h1>
                        <hr>
                    </div>
                    <a href="#" class="titles-cards__watch-all">Смотреть все</a>
                </div>
                <div class="titles__cards-titles">
                    <Swiper />
                </div>
            </div>
        </div>
        <SliderCalendar />
        <!-- <div class="titles-cards titles-cards-popular">
            <div class="container">
                <div class="titles-cards__nav">
                    <div>
                        <h1 class="titles-cards__h1">Последние обновления</h1>
                        <hr>
                    </div>
                    <a href="#" class="titles-cards__watch-all">Смотреть все</a>
                </div>
                <div class="titles__cards-titles">
                    <div class="swiper swiper__popular">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="swiper-slide__image">
                                    <a href="#" class="swiper-slide__image-link">
                                        <div class="swiper-slide__image-img">
                                            <img data-src="images/content/image 28.png" src="images/content/1x1.png" class="swiper-lazy">
                                            <div class="swiper-lazy-preloader"></div>
                                        </div>
                                        <div class="swiper-slide__image-overlay">
                                            <div class="card-rate">
                                                <img src="images/content/star 2.png" alt="star">
                                                <div class="card-rate__num">
                                                    <span>4.4</span>
                                                </div>
                                            </div>
                                            <div class="title-type">
                                                <span>Онгоинг</span>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="swiper-slide__slides-fix"></div>
                                </div>
                                <div class="title__cards-title-about">
                                    <div class="title__cards-title-name">
                                        <a href="#" class="title__cards-title-name-link">
                                            Врата Штейна
                                        </a>
                                    </div>
                                    <div class="titles__card-title-info">
                                        <span class="titles__card-ep-counter">
                                            25 из 25
                                        </span>
                                        <img src="images/content/Star 1.png" alt="alt">
                                        <a href="#" class="titles__card-title-year">
                                            2021
                                        </a>
                                        <img src="images/content/Star 1.png" alt="alt">
                                        <a href="#" class="titles__card-title-type">
                                            ТВ-сериал
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="swiper-slide__image">
                                    <a href="#" class="swiper-slide__image-link">
                                        <div class="swiper-slide__image-img">
                                            <img data-src="images/content/321.png" src="images/content/1x1.png" class="swiper-lazy">
                                            <div class="swiper-lazy-preloader"></div>
                                        </div>
                                        <div class="swiper-slide__image-overlay">
                                            <div class="card-rate">
                                                <img src="images/content/star 2.png" alt="star">
                                                <div class="card-rate__num">
                                                    <span>4.4</span>
                                                </div>
                                            </div>
                                            <div class="title-type">
                                                <span>Онгоинг</span>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="swiper-slide__slides-fix"></div>
                                </div>
                                <div class="title__cards-title-about">
                                    <div class="title__cards-title-name">
                                        <a href="#" class="title__cards-title-name-link">
                                            Врата Штейна
                                        </a>
                                    </div>
                                    <div class="titles__card-title-info">
                                        <span class="titles__card-ep-counter">
                                            25 из 25
                                        </span>
                                        <img src="images/content/Star 1.png" alt="alt">
                                        <a href="#" class="titles__card-title-year">
                                            2021
                                        </a>
                                        <img src="images/content/Star 1.png" alt="alt">
                                        <a href="#" class="titles__card-title-type">
                                            ТВ-сериал
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="swiper-slide__image">
                                    <a href="#" class="swiper-slide__image-link">
                                        <div class="swiper-slide__image-img">
                                            <img data-src="images/content/f.png" src="images/content/1x1.png" class="swiper-lazy">
                                            <div class="swiper-lazy-preloader"></div>
                                        </div>
                                        <div class="swiper-slide__image-overlay">
                                            <div class="card-rate">
                                                <img src="images/content/star 2.png" alt="star">
                                                <div class="card-rate__num">
                                                    <span>4.4</span>
                                                </div>
                                            </div>
                                            <div class="title-type">
                                                <span>Онгоинг</span>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="swiper-slide__slides-fix"></div>
                                </div>
                                <div class="title__cards-title-about">
                                    <div class="title__cards-title-name">
                                        <a href="#" class="title__cards-title-name-link">
                                            Врата Штейна
                                        </a>
                                    </div>
                                    <div class="titles__card-title-info">
                                        <span class="titles__card-ep-counter">
                                            25 из 25
                                        </span>
                                        <img src="images/content/Star 1.png" alt="alt">
                                        <a href="#" class="titles__card-title-year">
                                            2021
                                        </a>
                                        <img src="images/content/Star 1.png" alt="alt">
                                        <a href="#" class="titles__card-title-type">
                                            ТВ-сериал
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="swiper-slide__image">
                                    <a href="#" class="swiper-slide__image-link">
                                        <div class="swiper-slide__image-img">
                                            <img data-src="images/content/g.png" src="images/content/1x1.png" class="swiper-lazy">
                                            <div class="swiper-lazy-preloader"></div>
                                        </div>
                                        <div class="swiper-slide__image-overlay">
                                            <div class="card-rate">
                                                <img src="images/content/star 2.png" alt="star">
                                                <div class="card-rate__num">
                                                    <span>4.4</span>
                                                </div>
                                            </div>
                                            <div class="title-type">
                                                <span>Онгоинг</span>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="swiper-slide__slides-fix"></div>
                                </div>
                                <div class="title__cards-title-about">
                                    <div class="title__cards-title-name">
                                        <a href="#" class="title__cards-title-name-link">
                                            Врата Штейна
                                        </a>
                                    </div>
                                    <div class="titles__card-title-info">
                                        <span class="titles__card-ep-counter">
                                            25 из 25
                                        </span>
                                        <img src="images/content/Star 1.png" alt="alt">
                                        <a href="#" class="titles__card-title-year">
                                            2021
                                        </a>
                                        <img src="images/content/Star 1.png" alt="alt">
                                        <a href="#" class="titles__card-title-type">
                                            ТВ-сериал
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="swiper-slide__image">
                                    <a href="#" class="swiper-slide__image-link">
                                        <div class="swiper-slide__image-img">
                                            <img data-src="images/content/gweg.png" src="images/content/1x1.png" class="swiper-lazy">
                                            <div class="swiper-lazy-preloader"></div>
                                        </div>
                                        <div class="swiper-slide__image-overlay">
                                            <div class="card-rate">
                                                <img src="images/content/star 2.png" alt="star">
                                                <div class="card-rate__num">
                                                    <span>4.4</span>
                                                </div>
                                            </div>
                                            <div class="title-type">
                                                <span>Онгоинг</span>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="swiper-slide__slides-fix"></div>
                                </div>
                                <div class="title__cards-title-about">
                                    <div class="title__cards-title-name">
                                        <a href="#" class="title__cards-title-name-link">
                                            Врата Штейна
                                        </a>
                                    </div>
                                    <div class="titles__card-title-info">
                                        <span class="titles__card-ep-counter">
                                            25 из 25
                                        </span>
                                        <img src="images/content/Star 1.png" alt="alt">
                                        <a href="#" class="titles__card-title-year">
                                            2021
                                        </a>
                                        <img src="images/content/Star 1.png" alt="alt">
                                        <a href="#" class="titles__card-title-type">
                                            ТВ-сериал
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="swiper-slide__image">
                                    <a href="#" class="swiper-slide__image-link">
                                        <div class="swiper-slide__image-img">
                                            <img data-src="images/content/image 24.png" src="images/content/1x1.png" class="swiper-lazy">
                                            <div class="swiper-lazy-preloader"></div>
                                        </div>
                                        <div class="swiper-slide__image-overlay">
                                            <div class="card-rate">
                                                <img src="images/content/star 2.png" alt="star">
                                                <div class="card-rate__num">
                                                    <span>4.4</span>
                                                </div>
                                            </div>
                                            <div class="title-type">
                                                <span>Онгоинг</span>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="swiper-slide__slides-fix"></div>
                                </div>
                                <div class="title__cards-title-about">
                                    <div class="title__cards-title-name">
                                        <a href="#" class="title__cards-title-name-link">
                                            Врата Штейна
                                        </a>
                                    </div>
                                    <div class="titles__card-title-info">
                                        <span class="titles__card-ep-counter">
                                            25 из 25
                                        </span>
                                        <img src="images/content/Star 1.png" alt="alt">
                                        <a href="#" class="titles__card-title-year">
                                            2021
                                        </a>
                                        <img src="images/content/Star 1.png" alt="alt">
                                        <a href="#" class="titles__card-title-type">
                                            ТВ-сериал
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="swiper-slide__image">
                                    <a href="#" class="swiper-slide__image-link">
                                        <div class="swiper-slide__image-img">
                                            <img data-src="images/content/image 27.png" src="images/content/1x1.png" class="swiper-lazy">
                                            <div class="swiper-lazy-preloader"></div>
                                        </div>
                                        <div class="swiper-slide__image-overlay">
                                            <div class="card-rate">
                                                <img src="images/content/star 2.png" alt="star">
                                                <div class="card-rate__num">
                                                    <span>4.4</span>
                                                </div>
                                            </div>
                                            <div class="title-type">
                                                <span>Онгоинг</span>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="swiper-slide__slides-fix"></div>
                                </div>
                                <div class="title__cards-title-about">
                                    <div class="title__cards-title-name">
                                        <a href="#" class="title__cards-title-name-link">
                                            Врата Штейна
                                        </a>
                                    </div>
                                    <div class="titles__card-title-info">
                                        <span class="titles__card-ep-counter">
                                            25 из 25
                                        </span>
                                        <img src="images/content/Star 1.png" alt="alt">
                                        <a href="#" class="titles__card-title-year">
                                            2021
                                        </a>
                                        <img src="images/content/Star 1.png" alt="alt">
                                        <a href="#" class="titles__card-title-type">
                                            ТВ-сериал
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="swiper-slide__image">
                                    <a href="#" class="swiper-slide__image-link">
                                        <div class="swiper-slide__image-img">
                                            <img data-src="images/content/image 28.png" src="images/content/1x1.png" class="swiper-lazy">
                                            <div class="swiper-lazy-preloader"></div>
                                        </div>
                                        <div class="swiper-slide__image-overlay">
                                            <div class="card-rate">
                                                <img src="images/content/star 2.png" alt="star">
                                                <div class="card-rate__num">
                                                    <span>4.4</span>
                                                </div>
                                            </div>
                                            <div class="title-type">
                                                <span>Онгоинг</span>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="swiper-slide__slides-fix"></div>
                                </div>
                                <div class="title__cards-title-about">
                                    <div class="title__cards-title-name">
                                        <a href="#" class="title__cards-title-name-link">
                                            Врата Штейна
                                        </a>
                                    </div>
                                    <div class="titles__card-title-info">
                                        <span class="titles__card-ep-counter">
                                            25 из 25
                                        </span>
                                        <img src="images/content/Star 1.png" alt="alt">
                                        <a href="#" class="titles__card-title-year">
                                            2021
                                        </a>
                                        <img src="images/content/Star 1.png" alt="alt">
                                        <a href="#" class="titles__card-title-type">
                                            ТВ-сериал
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="swiper-slide__image">
                                    <a href="#" class="swiper-slide__image-link">
                                        <div class="swiper-slide__image-img">
                                            <img data-src="images/content/image 29.png" src="images/content/1x1.png" class="swiper-lazy">
                                            <div class="swiper-lazy-preloader"></div>
                                        </div>
                                        <div class="swiper-slide__image-overlay">
                                            <div class="card-rate">
                                                <img src="images/content/star 2.png" alt="star">
                                                <div class="card-rate__num">
                                                    <span>4.4</span>
                                                </div>
                                            </div>
                                            <div class="title-type">
                                                <span>Онгоинг</span>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="swiper-slide__slides-fix"></div>
                                </div>
                                <div class="title__cards-title-about">
                                    <div class="title__cards-title-name">
                                        <a href="#" class="title__cards-title-name-link">
                                            Врата Штейна
                                        </a>
                                    </div>
                                    <div class="titles__card-title-info">
                                        <span class="titles__card-ep-counter">
                                            25 из 25
                                        </span>
                                        <img src="images/content/Star 1.png" alt="alt">
                                        <a href="#" class="titles__card-title-year">
                                            2021
                                        </a>
                                        <img src="images/content/Star 1.png" alt="alt">
                                        <a href="#" class="titles__card-title-type">
                                            ТВ-сериал
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-button-prev swiper-button"><img src="images/content/Group 145.png" alt=""></div>
                    <div class="swiper-button-next swiper-button"><img src="images/content/Group 146.png" alt=""></div>
                </div>
            </div>
        </div> -->
        <div class="sign-up">
            <div class="container">
                <div class="sign-up__wrap">
                    <div class="sign-up__image">
                        <img src="images/signup/ff.png" alt="alt">
                    </div>
                    <div class="sign-up__about">
                        <h1 class="sign-up__reg">
                            Регистрируйтесь
                        </h1>
                        <h2 class="sign-up__about-reg">
                            Все еще не зарегистрированы? У нас для тебя много классных фич
                        </h2>
                        <div class="sign-up__fiches">
                            <img src="images/signup/calendar.png" alt="alt">
                            <span>Календарь релизов</span>
                            <img src="images/signup/bell.png" alt="alt">
                            <span>Уведомления о выходе новых серий</span>
                            <img src="images/signup/play-button.png" alt="alt">
                            <span>Смотри где угодно</span>
                        </div>
                        <a href="#" class="sign-up__create-link">
                            Создать аккаунт
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="news">
            <div class="container">
                <div class="titles-cards__nav">
                    <div>
                        <h1 class="titles-cards__h1">Новости</h1>
                        <hr>
                    </div>
                    <a href="#" class="titles-cards__watch-all">Смотреть все</a>
                </div>
                <div class="news__cards news__cards-first">
                    <div class="news__card">
                        <div class="news__card-img" style="background-image: url(images/news-card/wef.jpg);" onload="this.style.display=''">
                        </div>
                        <div class="news__card-about">
                            <div class="news__card-title">
                                <p>Общий тираж комедийной шпионской манги «Семья шпиона» превысил 15 млн копий</p>
                            </div>
                            <div class="news__card-social-info">
                                <div class="news__card-date">
                                    <span>19 марта в 11:25</span>
                                </div>
                                <div class="news__card-views">
                                    <span>14792 просмотров</span>
                                </div>
                                <div class="news__card-social">
                                    <div class="news__card-like">
                                        <a href="#" class="news__card-like-link">
                                            <img src="images/news-card/heart (1).png" alt="like">
                                            <span class="news__card-like-count">0</span>
                                        </a>
                                    </div>
                                    <div class="news__card-comments">
                                        <img src="images/news-card/message.png" alt="at">
                                        <span class="news__card-comments-count">12</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="news__card-link"></a>
                    </div>
                    <div class="news__card">
                        <div class="news__card-img" style="background-image: url(images/news-card/wef.jpg);" onload="this.style.display=''">
                        </div>
                        <div class="news__card-about">
                            <div class="news__card-title">
                                <p>Общий тираж комедийной шпионской манги «Семья шпиона» превысил 15 млн копий</p>
                            </div>
                            <div class="news__card-social-info">
                                <div class="news__card-date">
                                    <span>19 марта в 11:25</span>
                                </div>
                                <div class="news__card-views">
                                    <span>14792 просмотров</span>
                                </div>
                                <div class="news__card-social">
                                    <div class="news__card-like">
                                        <a href="#" class="news__card-like-link">
                                            <img src="images/news-card/heart (1).png" alt="like">
                                            <span class="news__card-like-count">0</span>
                                        </a>
                                    </div>
                                    <div class="news__card-comments">
                                        <img src="images/news-card/message.png" alt="at">
                                        <span class="news__card-comments-count">12</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="news__card-link"></a>
                    </div>
                    
                    <div class="news__card">
                        <div class="news__card-img" style="background-image: url(images/news-card/f.jpg);" onload="this.style.display=''">
                        </div>
                        <div class="news__card-about">
                            <div class="news__card-title">
                                <p>«Госпожа Кагуя: в любви как на войне» — трейлер третьего сезона ромкома</p>
                            </div>
                            <div class="news__card-social-info">
                                <div class="news__card-date">
                                    <span>19 марта в 11:25</span>
                                </div>
                                <div class="news__card-views">
                                    <span>14792 просмотров</span>
                                </div>
                                <div class="news__card-social">
                                    <div class="news__card-like">
                                        <a href="#" class="news__card-like-link">
                                            <img src="images/news-card/heart (1).png" alt="like">
                                            <span class="news__card-like-count">0</span>
                                        </a>
                                    </div>
                                    <div class="news__card-comments">
                                        <img src="images/news-card/message.png" alt="at">
                                        <span class="news__card-comments-count">12</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="news__card-link"></a>
                    </div>
                </div>
                <div class="news__cards news__cards-second">
                    <div class="news__card">
                        <div class="news__card-img" style="background-image: url(images/news-card/wef.jpg);" onload="this.style.display=''">
                        </div>
                        <div class="news__card-about">
                            <div class="news__card-title">
                                <p>Общий тираж комедийной шпионской манги «Семья шпиона» превысил 15 млн копий</p>
                            </div>
                            <div class="news__card-social-info">
                                <div class="news__card-date">
                                    <span>19 марта в 11:25</span>
                                </div>
                                <div class="news__card-views">
                                    <span>14792 просмотров</span>
                                </div>
                                <div class="news__card-social">
                                    <div class="news__card-like">
                                        <a href="#" class="news__card-like-link">
                                            <img src="images/news-card/heart (1).png" alt="like">
                                            <span class="news__card-like-count">0</span>
                                        </a>
                                    </div>
                                    <div class="news__card-comments">
                                        <img src="images/news-card/message.png" alt="at">
                                        <span class="news__card-comments-count">12</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="news__card-link"></a>
                    </div>
                    <div class="news__card">
                        <div class="news__card-img" style="background-image: url(images/news-card/ff1.jpg);" onload="this.style.display=''">
                        </div>
                        <div class="news__card-about">
                            <div class="news__card-title">
                                <p>«Шпионский класс» — видео-анонс и подробности шпионского аниме</p>
                            </div>
                            <div class="news__card-social-info">
                                <div class="news__card-date">
                                    <span>19 марта в 11:25</span>
                                </div>
                                <div class="news__card-views">
                                    <span>14792 просмотров</span>
                                </div>
                                <div class="news__card-social">
                                    <div class="news__card-like">
                                        <a href="#" class="news__card-like-link">
                                            <img src="images/news-card/heart (1).png" alt="like">
                                            <span class="news__card-like-count">0</span>
                                        </a>
                                    </div>
                                    <div class="news__card-comments">
                                        <img src="images/news-card/message.png" alt="at">
                                        <span class="news__card-comments-count">12</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="news__card-link"></a>
                    </div>
                    <div class="news__card">
                        <div class="news__card-img" style="background-image: url(images/news-card/d.jpg);" onload="this.style.display=''">
                        </div>
                        <div class="news__card-about">
                            <div class="news__card-title">
                                <p>В октябре начнётся показ третьего сезона аниме «Добро пожаловать в ад, Ирума»</p>
                            </div>
                            <div class="news__card-social-info">
                                <div class="news__card-date">
                                    <span>19 марта в 11:25</span>
                                </div>
                                <div class="news__card-views">
                                    <span>14792 просмотров</span>
                                </div>
                                <div class="news__card-social">
                                    <div class="news__card-like">
                                        <a href="#" class="news__card-like-link">
                                            <img src="images/news-card/heart (1).png" alt="like">
                                            <span class="news__card-like-count">0</span>
                                        </a>
                                    </div>
                                    <div class="news__card-comments">
                                        <img src="images/news-card/message.png" alt="at">
                                        <span class="news__card-comments-count">12</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="news__card-link"></a>
                    </div>
                    <div class="news__card">
                        <div class="news__card-img" style="background-image: url(images/news-card/d.jpg);" onload="this.style.display=''">
                        </div>
                        <div class="news__card-about">
                            <div class="news__card-title">
                                <p>В октябре начнётся показ третьего сезона аниме «Добро пожаловать в ад, Ирума»</p>
                            </div>
                            <div class="news__card-social-info">
                                <div class="news__card-date">
                                    <span>19 марта в 11:25</span>
                                </div>
                                <div class="news__card-views">
                                    <span>14792 просмотров</span>
                                </div>
                                <div class="news__card-social">
                                    <div class="news__card-like">
                                        <a href="#" class="news__card-like-link">
                                            <img src="images/news-card/heart (1).png" alt="like">
                                            <span class="news__card-like-count">0</span>
                                        </a>
                                    </div>
                                    <div class="news__card-comments">
                                        <img src="images/news-card/message.png" alt="at">
                                        <span class="news__card-comments-count">12</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="news__card-link"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="collections">
            <div class="container">
                <div class="titles-cards__nav">
                    <div>
                        <h1 class="titles-cards__h1">Подборки</h1>
                        <hr>
                    </div>
                    <a href="#" class="titles-cards__watch-all">Смотреть все</a>
                </div>
                <div class="collections__cards">
                    <a href="#" class="collections__card">
                        <img src="images/collections/Rectangle 7.png" alt="">
                        <span class="collections__card-name">О путешесвиях во времени</span> 
                    </a>
                    <a href="#" class="collections__card">
                        <img src="images/collections/Rectangle 8.png" alt="">
                        <span class="collections__card-name">Лучшие полнометражные аниме</span> 
                    </a>
                    <a href="#" class="collections__card">
                        <img src="images/collections/2019.jpg" alt="">
                        <span class="collections__card-name">Топ аниме 2019 года</span> 
                    </a>
                </div>
            </div>
        </div>
        <div class="releases">
            <div class="container">
                <div class="titles-cards__nav">
                    <div>
                        <h1 class="titles-cards__h1">Календарь релизов</h1>
                        <hr>
                    </div>
                    <a href="#" class="titles-cards__watch-all">Смотреть все</a>
                </div>
                <div class="releases__titles">
                    <div class="releases__title">
                        <div class="releases__title-info">
                            <a href="#"><img src="images/rel/121873.jpg" alt="img"></a>
                            <div class="releases__title-name">
                                <a href="#">
                                    Tate no Yuusha no Nariagari Season 2
                                </a>
                                <span class="releases__title-name-foreign">The Rising of the Shield Hero Season 2</span>
                            </div>
                        </div>
                        <div class="releases__title-actions">
                            <div class="releases__release-day">
                                <p>26 <span>апреля</span></p>
                            </div>
                            <div class="releases__title-add">
                                <a href="#" class="releases__title-add-link">
                                    <img src="images/rel/w.png" alt="#">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="releases__title">
                        <div class="releases__title-info">
                            <a href="#"><img src="images/rel/118919.jpg" alt="img"></a>
                            <div class="releases__title-name">
                                <a href="#">
                                    Kaguya-sama wa Kokurasetai: Ultra Romantic
                                </a>
                                <span class="releases__title-name-foreign">Kaguya-sama: Love Is War - Ultra Romantic</span>
                            </div>
                        </div>
                        <div class="releases__title-actions">
                            <div class="releases__release-day">
                                <p>26 <span>апреля</span></p>
                            </div>
                            <div class="releases__title-add">
                                <a href="#" class="releases__title-add-link">
                                    <img src="images/rel/w.png" alt="#">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="releases__title">
                        <div class="releases__title-info">
                            <a href="#"><img src="images/rel/104631.jpg" alt="img"></a>
                            <div class="releases__title-name">
                                <a href="#">
                                    Tate no Yuusha no Nariagari Season 3
                                </a>
                                <span class="releases__title-name-foreign">The Rising of the Shield Hero</span>
                            </div>
                        </div>
                        <div class="releases__title-actions">
                            <div class="releases__release-day">
                                <p>26 <span>апреля</span></p>
                            </div>
                            <div class="releases__title-add">
                                <a href="#" class="releases__title-add-link">
                                    <img src="images/rel/w.png" alt="#">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="releases__title">
                        <div class="releases__title-info">
                            <a href="#"><img src="images/rel/120053.jpg" alt="img"></a>
                            <div class="releases__title-name">
                                <a href="#">
                                    Hataraku Maou-sama! 2nd Season
                                </a>
                                <span class="releases__title-name-foreign"></span>
                            </div>
                        </div>
                        <div class="releases__title-actions">
                            <div class="releases__release-day">
                                <p>26 <span>апреля</span></p>
                            </div>
                            <div class="releases__title-add">
                                <a href="#" class="releases__title-add-link">
                                    <img src="images/rel/w.png" alt="#">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="releases__title">
                        <div class="releases__title-info">
                            <a href="#"><img src="images/rel/120522.jpg" alt="img"></a>
                            <div class="releases__title-name">
                                <a href="#">
                                    Kanojo, Okarishimasu 2nd Season
                                </a>
                                <span class="releases__title-name-foreign"></span>
                            </div>
                        </div>
                        <div class="releases__title-actions">
                            <div class="releases__release-day">
                                <p>26 <span>апреля</span></p>
                            </div>
                            <div class="releases__title-add">
                                <a href="#" class="releases__title-add-link">
                                    <img src="images/rel/w.png" alt="#">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="releases__title">
                        <div class="releases__title-info">
                            <a href="#"><img src="images/rel/121382.jpg" alt="img"></a>
                            <div class="releases__title-name">
                                <a href="#">
                                    Spy x Family
                                </a>
                                <span class="releases__title-name-foreign"></span>
                            </div>
                        </div>
                        <div class="releases__title-actions">
                            <div class="releases__release-day">
                                <p>26 <span>апреля</span></p>
                            </div>
                            <div class="releases__title-add">
                                <a href="#" class="releases__title-add-link">
                                    <img src="images/rel/w.png" alt="#">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import SliderCalendar from '~/components/slider/SliderCalendar.vue'
import Swiper from '~/components/slider/Swiper.vue'
export default {
  data: function(){
    return{
        isThemeBtnActive: true,
        themeColor: 'dark-theme'
    };
  },
  methods:{
      changeTheme(){
          this.isThemeBtnActive = !this.isThemeBtnActive
          if(this.isThemeBtnActive){
              this.themeColor = 'dark-theme'
          }
          else{
              this.themeColor = 'white-theme'
          }
      }
  },
  components: { Swiper, SliderCalendar },
  layout: 'header'
}

</script>