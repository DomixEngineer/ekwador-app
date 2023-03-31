<!-- eslint-disable vue/multi-word-component-names -->
<template>

    <div class="bar-mobile">
        <div class="bar-mobile__hamburger" @click="displayNav()">
            <div class="bar-mobile__hamburger__bar"></div>
            <div class="bar-mobile__hamburger__bar"></div>
            <div class="bar-mobile__hamburger__bar"></div>
        </div>
    </div>
    <div 
        class="navbar-mobile"
        :class="{ 'navbar-mobile--inactive' : isNavMobileShown }"
    >
        <div class="navbar-mobile__head">
            <img src="../assets/svg/close_icon.svg" @click="displayNav()">
        </div>
        <div class="navbar-mobile__brand">
            <img src="../assets/images/ekwador_nav_logo.png">
        </div>
        <div class="navbar-mobile__menu">
            <ul class="navbar-mobile__menu__list">
                <li 
                    class="navbar-mobile__menu__list__item"
                    v-for="navItem in navbarItems"
                    :key="navItem"
                    @click="displayNav()"
                >
                    <router-link :to="{ name: navItem.name, params: {} }">
                        {{ navItem.translated }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>

    <div class="navbar">
        <div class="container">
            <div class="navbar__container">
                <div class="navbar__container__brand">
                    <img src="../assets/images/ekwador_nav_logo.png" alt="" />
                </div>
                <div class="navbar__container__menu">
                    <ul class="navbar__container__menu__list">
                        <li 
                            class="navbar__container__menu__list__item"
                            v-for="navItem in navbarItems"
                            :key="navItem"
                        >
                            <router-link :to="{ name: navItem.name, params: {} }">
                                {{ navItem.translated }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import navItems from '../mock/navigation.js'
export default {
    name: 'AppNavbar',
    data() {
        return {
            // MOCK HTTP REQUEST RESPONSE
            navbarItems: navItems,
            isNavMobileShown: true
        }
    },
    methods: {
        displayNav() {
            if (!this.isNavMobileShown) {
                this.isNavMobileShown = true
                return
            }
            this.isNavMobileShown = false
        }
    }
}
</script>

<style lang="scss">
    .bar-mobile {
        display: none;
        position: fixed;
        width: 100vw;
        height: 61px;
        background: #0652dd;
        z-index: 500;
        padding: 15px;
        box-sizing: border-box;
        top: 0;
        @media(max-width: 767px) {
            display: block;
        }
        &__hamburger {
            max-width: 40px;
            width: 100%;
            position: relative;
            &__bar {
                width: 100%;
                height: 5px;
                background-color: white;
                margin-bottom: 7px;
                border-radius: 5px;
            }
        }
    }
    .navbar-mobile {
        width: 61vw;
        height: 100vh;
        background: #1B98F5;
        z-index: 999;
        display: block;
        position: fixed;
        padding: 15px;
        box-sizing: border-box;
        left: 0;
        top: 0;
        transition: left 1s;
        &--inactive {
            left: -100vw;
            transition: left 1s;
        }
        &__head {
            width: 100%;
            display: flex;
            justify-content: start;
            img {
                width: 100%;
                max-width: 50px;
                filter: invert(100%) sepia(0%) saturate(7476%) hue-rotate(110deg) brightness(98%) contrast(108%);
                cursor: pointer;
            }
        }
        &__brand {
            margin-top: 10vh;
            img {
                display: block;
                max-width: 250px;
                width: 90%;
                margin: 0 auto;
            }
        }
        &__menu {
            margin-top: 5vh;
            &__list {
                list-style: none;
                padding: 0;
                margin: 0;
                &__item {
                    margin-bottom: 4vh;
                    a {
                        color: white;
                        text-transform: uppercase;
                        text-align: center;
                        font-family: 'lato';
                        font-weight: 600;
                        font-size: 5vw;
                        display: block;
                    }
                }
            }
        }
    }
    .navbar {
        background-color: #0652dd;
        width: 100%;
        height: 59px;
        padding: 7px 0px;
        position: relative;
        z-index: 999;
        @media (max-width: 767px) { display: none; }
        &__container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            &__menu {
                max-width: 650px;
                width: 100%;
                &__list {
                    list-style-type: none;
                    display: flex;
                    justify-content: flex-end;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                    &__item {
                        margin-right: 20px;
                        color: white;
                        font-size: 20px;
                        text-transform: uppercase;
                        font-family: 'lato';
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>