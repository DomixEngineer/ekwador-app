<!-- eslint-disable vue/no-dupe-keys -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <div class="section-header">
            <h1 class="section-header__header">{{ title }}</h1>
            <div class="section-header__decorator">
                <div 
                    class="section-header__decorator__left-bar" 
                    :style="leftBarWidthPercentage">
                </div>
                <div 
                    class="section-header__decorator__right-bar" 
                    :style="rightBarWidthPercentage">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SectionHeader',
    props: {
        title: {
            type: String,
            required: false,
            default: 'Page Section'
        },
        leftBarWidth: {
            type: Number,
            required: false,
            default: 50
        },
        rightBarWidth: {
            type: Number,
            required: false,
            default: 50
        }
    },
    computed: {
        leftBarWidthPercentage() {
            return `width: ${this.leftBarWidth}%`;
        },
        rightBarWidthPercentage() {
            return `width: ${this.rightBarWidth}%`;
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
        @media (max-width: 767px) {
            max-width: 90%;
            margin: 12vh auto 4vh auto;
        }
        &__header {
            color: white;
            font-family: 'lato';
            text-transform: uppercase;
            margin: 0;
            padding: 0 0 15px 20px;
            @media (max-width: 767px) {
                font-size: 5vw;
            }
        }
        &__decorator {
            height: 3px;
            display: flex;
            &__left-bar {
                height: inherit;
                background: #fcff15;
            }
            &__right-bar {
                height: inherit;
                background: #107ef1
            }
        }
    }
</style>