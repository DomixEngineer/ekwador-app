<template>
    <div class="promo-section">
        <div class="container flex-container">
            <div>
                <img src="../assets/images/ekwador_logo_big.png" alt="Ekwador Manieczki - Klub numer jeden w Polsce">
                <h1 class="promo-section__heading">Klub numer<br>jeden w Polsce</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PromoSection'
}
</script>

<style lang="scss" scoped>
    .promo-section {
        display: flex;
        .flex-container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        img {
            display: block;
            margin: 0 auto;
            @media (max-width: 767px) {
                max-width: 50%;
            }
        }
        width: 100%;
        height: 900px;
        background-image: url('../assets/images/promo_section_1.png');
        @media (max-width: 767px) {
            height: auto;
            padding: 50px;
            box-sizing: border-box;
        }
        &__heading {
            color: white;
            font-family: 'sui-generis';
            text-align: center;
            text-transform: uppercase;
            font-size: 80px;
            margin-top: 30px;
            margin-bottom: 0;
            @media (max-width: 767px) {
                font-size: 8vw;
            }
        }
    }
</style>