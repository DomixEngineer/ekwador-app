<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <navbar></navbar>
        <section-header title="Nadchodzące imprezy"></section-header>
        <section-header title="Galeria zdjęć z ostatnich imprez"></section-header>
        <section-header title="O klubie"></section-header>
        <section-header title="Transport"></section-header>
        <section-header title="Kontakt"></section-header>
        <footer-section></footer-section>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import SectionHeader from '@/components/SectionHeader.vue';
import * as FooterSection from '@/components/Footer.vue'

export default {
    name: 'HomePage',
    components: {
        Navbar,
        SectionHeader,
        FooterSection
    }
}
</script>