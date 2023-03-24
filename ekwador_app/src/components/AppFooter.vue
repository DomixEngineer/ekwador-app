<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="footer">
        <div class="container">
            <div class="footer__container">
                <div class="footer__container__copyright">
                    <p>
                        Copyright © 2023 Ekwador Manieczki. 
                        Realizacja projektu: Dominik Dziewulski 
                    </p>
                </div>
                <div class="footer__container__menu">
                    <ul class="footer__container__menu__list">
                        <li class="footer__container__menu__list__item">start</li>
                        <li class="footer__container__menu__list__item">imprezy</li>
                        <li class="footer__container__menu__list__item">sklep</li>
                        <li class="footer__container__menu__list__item">media</li>
                        <li class="footer__container__menu__list__item">aktualności</li>
                        <li class="footer__container__menu__list__item">kontakt</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .footer {
        background-color: #0652dd;
        height: 70px;
        display: flex;
        align-items: center;
        &__container {
            height: inherit;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &__copyright {
                p {
                    margin: 0;
                    padding: 0;
                    color: white;
                    font-family: 'lato';
                    font-weight: 300;
                    width: 61%;
                }
            }
            &__menu {
                max-width: 600px;
                width: 100%;
                &__list {
                    list-style: none;
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                    &__item {
                        color: white;
                        font-family: 'lato';
                        text-transform: uppercase;
                        font-size: 18px;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>