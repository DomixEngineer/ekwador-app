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
                        <li 
                            class="footer__container__menu__list__item"
                            v-for="navbarItem in navbarItems"
                            :key="navbarItem"
                        >
                        <router-link :to="{ name: navbarItem.name, params: {} }">
                            {{ navbarItem.translated }}
                        </router-link>
                        </li>
                    </ul>
                </div>
                <img src="../assets/images/scroll_to_top_icon.png" class="scroll-icon" @click="scrollToTop()">
            </div>
        </div>
    </div>
</template>

<script>
import navItems from '../mock/navigation.js'
export default {
    data() {
        return {
            // MOCK HTTP REQUEST RESPONSE
            navbarItems: navItems
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }
}
</script>

<style lang="scss">
    .scroll-icon {
        display: block;
        width: 1.5vw;
        cursor: pointer;
    }
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
                    justify-content: flex-end;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                    &__item {
                        color: white;
                        font-family: 'lato';
                        text-transform: uppercase;
                        font-size: 18px;
                        cursor: pointer;
                        margin-right: 20px;
                    }
                }
            }
        }
    }
</style>