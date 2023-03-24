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
                        <li class="navbar__container__menu__list__item">start</li>
                        <li class="navbar__container__menu__list__item">imprezy</li>
                        <li class="navbar__container__menu__list__item">sklep</li>
                        <li class="navbar__container__menu__list__item">media</li>
                        <li class="navbar__container__menu__list__item">aktualności</li>
                        <li class="navbar__container__menu__list__item">kontakt</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
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
            &__brand {
                img {}
            }
            &__menu {
                max-width: 650px;
                width: 100%;
                &__list {
                    list-style-type: none;
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                    &__item {
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