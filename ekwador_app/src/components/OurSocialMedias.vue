<template>
    <div>
        <p class="social-media-header">Nasze social-media</p>
        <div class="social-medias">
            <img src="../assets/images/fb_social_icon_big.png" alt="Ekwador Manieczki - Facebook">
            <img src="../assets/images/ig_social_media_big.png" alt="Ekwador Manieczki - Instagram">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .social-media-header {
        color: white;
        text-transform: uppercase;
        font-family: 'lato';
        font-weight: 200;
        font-size: 32px;
        margin: 0;
        padding: 0;
    }
    .social-medias {
        margin-top: 10px;
        img {
            margin-right: 10px;
            cursor: pointer;
        }
    }
</style>