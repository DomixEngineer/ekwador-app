<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <navbar></navbar>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
    name: 'HomePage',
    components: {
        Navbar
    }
}
</script>