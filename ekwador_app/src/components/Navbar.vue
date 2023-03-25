<!-- eslint-disable vue/multi-word-component-names -->
<template>
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
    data() {
        return {
            // MOCK HTTP REQUEST RESPONSE
            navbarItems: navItems
        }
    }
}
</script>

<style lang="scss">
    .navbar {
        background-color: #0652dd;
        width: 100%;
        height: 59px;
        padding: 7px 0px;
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