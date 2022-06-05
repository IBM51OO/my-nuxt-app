<template>
    <div>
        <footer>
            <div class="container">
                <div class="footer">
                    <div class="footer__for-user">
                        <p class="footer__user-warning">Все видео на сайте предоставлены только для ознакомления и не предполагаю скачивание.</p>
                        <div class="footer__for-us-btn">
                            <a href="#">Для правообладателей</a>
                            <a href="#">Обратная связь</a>
                            <a href="#">Главная</a>
                        </div>
                    </div>
                    <div class="footer__social">
                        <a href="#">
                            <img src="images/footer/discord.png" alt="">
                        </a>
                        <a href="#">
                            <img src="images/footer/vk-social-network-logo.png" alt="">
                        </a>
                        <a href="#">
                            <img src="images/footer/telegram.png" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<style lang="scss">
footer{
    background-color: #141518;
}
.footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 100px;
    padding-bottom: 40px;
}
.footer__social img{
    height: 25px;
    width: 25px;
    margin-left: 10px;
}
.footer__for-us-btn{
    margin-top: 20px;
}
.footer__for-us-btn a{
    font-family: 'Open Sans';
    color: rgb(225, 172, 40);
    font-size: 14px;
    text-decoration: none;
    margin-right: 10px;
}
.footer__user-warning{
    font-family: 'Roboto';
    color: #5a5b6e;
    font-size: 16px;
}
</style>