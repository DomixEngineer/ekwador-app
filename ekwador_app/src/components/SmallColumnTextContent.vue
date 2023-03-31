<template>
    <div class="small-column">
        <div class="decorator">
            <div class="decorator__left"></div>
            <div class="decorator__right"></div>
        </div>
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
    </div>
</template>

<script>
export default {
    name: 'SmallColumnTextContent',
    props: {
        title: {
            type: String,
            required: false,
            default: 'tytuł'
        },
        content: {
            type: String,
            required: false,
            default: 'content'
        }
    }
}
</script>

<style lang="scss" scoped>
    .small-column {
        max-width: 436px;
        width: 100%;
        box-sizing: border-box;
        background-color: #21306f;
        @media (max-width: 767px) {
            max-width: 90%;
            margin: 0 auto;
            padding-bottom: 10px;
        }
        .decorator {
            display: flex;
            &__left {
                width: 50%;
                height: 3px;
                background-color: #fcff15;
            }
            &__right {
                width: 50%;
                height: 3px;
                background-color: #107ef1;
            }
        }
        h1 {
            color: white;
            font-family: 'lato';
            text-transform: uppercase;
            padding-left: 13px;
        }
        p {
            color: white;
            font-family: 'lato';
            font-size: 26px;
            font-weight: 200;
            line-height: 1.4;
            padding-left: 13px;
        }
    }
</style>