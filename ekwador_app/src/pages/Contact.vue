<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <contact-with-map></contact-with-map>
        <promo-section></promo-section>
    </div>
</template>

<script>
import PromoSection from '@/components/PromoSection.vue'
import ContactWithMap from '@/page_parts/ContactWithMap.vue'

export default {
    components: {
        PromoSection,
        ContactWithMap
    }
}
</script>