<template>
    <div>
        <div class="container">
            <section-header title="Galeria zdjęć z ostatnich imprez"></section-header>
        </div>
        <div class="container photos-grid-container">
            
        </div>
    </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';

export default {
    components: {
        SectionHeader
    }
}
</script>

<style lang="scss">
.photos-grid-container {
    background-color: #21306f;
    width: 100%;
    margin-bottom: 25px;
    display: flex;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-column-gap: 30px;
    padding: 15px;
    box-sizing: border-box;
    .single-img {
        img {
            display: block;
            width: 100%;
        }
    }
}
</style>