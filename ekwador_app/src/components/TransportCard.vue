<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="transport-card">
        <div class="transport-card__header">
            <img :src="getHeaderImage()" alt="Ekwador Manieckzi - transport Katowice, transport Opole, transport Wrocław">
        </div>
        <h1 class="transport-card__title">{{ title }}</h1>
        <div class="transport-card__subtitleBox">
            <h2 class="transport-card__subtitleBox__subtitle">{{ subTitle }}</h2>
        </div>
        <div class="transport-card__social-link">
            <img src="../assets/images/transport_fb_icon.png" alt="Ekwador Manieczki - transport - facebook">
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleTransportCard',
    props: {
        picture: {
            type: String,
            required: false,
            default: 'transport_katowice.png'
        },
        title: {
            type: String,
            required: false,
            default: 'ekwador manieczki'
        },
        subTitle: {
            type: String,
            required: false,
            default: 'transport z katowic, opola oraz wrocławia'
        }
    },
    methods: {
        getHeaderImage() {
            return require(`./../assets/images/${this.picture}`)
        }
    }
}
</script>

<style lang="scss">
    .transport-card {
        background-color: #21306f;
        max-width: 580px;
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
        border-radius: 12px;
        margin-bottom: 20px;
        &__header {
            img {
                display: block;
                width: 95%;
                margin: 0 auto;
            }
        }
        &__title {
            color: white;
            font-family: 'lato';
            font-weight: 700;
            text-transform: uppercase;
            font-size: 35px;
            margin: 10px 0px 10px 14px;
            padding: 0;
        }
        &__subtitleBox {
            min-height: 60px;
            &__subtitle {
            color: white;
            font-family: 'lato';
            font-weight: 200;
            text-transform: uppercase;
            width: 61%;
            margin: 7px 0px 0px 14px;
            }
        }
        &__social-link {
            margin: 7px 0px 0px 14px;
            img {
                cursor: pointer;
            }
        }
    }
</style>