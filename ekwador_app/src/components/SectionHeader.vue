<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <div class="section-header">
            <h1 class="section-header__header">{{ title }}</h1>
            <div class="section-header__decorator">
                <div class="section-header__decorator__left-bar"></div>
                <div class="section-header__decorator__right-bar"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: false,
            default: 'Page Section'
        }
    }
}
</script>

<style lang="scss">
    .section-header {
        background-color: #21306f;
        padding-top: 20px;
        margin-bottom: 32px;
        margin-top: 45px;
        &__header {
            color: white;
            font-family: 'lato';
            text-transform: uppercase;
            margin: 0;
            padding: 0 0 15px 20px;
        }
        &__decorator {
            height: 3px;
            display: flex;
            &__left-bar {
                height: inherit;
                width: 61%;
                background: #fcff15;
            }
            &__right-bar {
                height: inherit;
                width: 39%;
                background: #107ef1
            }
        }
    }
</style>