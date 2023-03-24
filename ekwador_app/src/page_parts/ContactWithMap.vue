<template>
    <div>
        <div class="container">
            <section-header title="Kontakt"></section-header>
        </div>
        <div class="container flex-container contact-form-with-map">
            <div class="left-column">
                <contact-form-main></contact-form-main>
            </div>
            <div class="right-column">
                <google-maps></google-maps>
                <our-social-medias></our-social-medias>
            </div>
        </div>  
    </div>  
</template>

<script>
import GoogleMaps from '@/components/GoogleMaps.vue'
import OurSocialMedias from '@/components/OurSocialMedias.vue'
import ContactFormMain from '@/components/ContactFormMain.vue'
import SectionHeader from '@/components/SectionHeader.vue'

export default {
    components: {
        GoogleMaps,
        OurSocialMedias,
        ContactFormMain,
        SectionHeader
    }
}
</script>

<style lang="scss" scoped>
    .contact-form-with-map {
        margin-bottom: 25px;
    }
    .flex-container {
        display: flex;
        justify-content: space-between;
        .left-column {
            max-width: 436px;
            width: 100%;
        }
        .right-column {
            max-width: 714px;
            width: 100%;
        }
    }
</style>