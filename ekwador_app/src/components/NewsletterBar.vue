<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="newsletter">
        <div class="container">
            <h1 class="newsletter__header">newsletter</h1>
            <div class="newsletter__input-bar">
                <input 
                    type="email" 
                    class="newsletter__input-bar__input"
                    v-model="email"
                    placeholder="Adres email"
                >
                <button 
                    class="newsletter__input-bar__btn" 
                    @click.prevent="sendNewsletter()"
                >
                zapisz mnie
                </button>
            </div>
            <p class="newsletter__reminder">
                Nie przegapcie żadnych nowości i bądźcie z nami na bieżąco
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsletterBar',
    data() {
        return {
            email: ''
        }
    },
    methods: {
        sendNewsletter() {
            console.log(this.email)
        }
    }
}
</script>

<style lang="scss">
    .newsletter {
        width: 100%;
        height: 495px;
        background-image: url('../assets/images/newsletter_bar_bg.png');
        display: flex;
        align-items: center;
        @media (max-width: 767px) {
            height: auto;
            padding: 20px;
            box-sizing: border-box;
        }
        &__header {
            font-family: 'cascade';
            color: white;
            font-size: 80px;
            text-align: center;
            padding: 0;
            margin: 0;
            @media (max-width: 767px) {
                font-size: 8vw;
                margin-bottom: 3vh;
            }
        }
        &__input-bar {
            display: flex;
            justify-content: center;
            align-items: center;
            @media (max-width: 767px) {
                display: block;
            }
            &__input {
                font-family: "sui-generis";
                outline: none;
                width: 40%;
                height: 28px;
                padding: 10px 10px;
                border-radius: 12px;
                margin-right: 24px;
                @media (max-width: 767px) {
                    width: 80%;
                    margin-bottom: 2vh;
                    margin-left: auto;
                    margin-right: auto;
                    display: block;
                }
            }
            &__btn {
                background-color: #107ef1;
                color: white;
                font-family: 'sui-generis';
                border: none;
                font-size: 24px;
                padding: 12px 59px;
                border-radius: 12px;
                cursor: pointer;
                @media (max-width: 767px) {
                    margin-left: auto;
                    margin-right: auto;
                    display: block;
                }
            }
        }
        &__reminder {
            text-align: center;
            color: white;
            font-family: 'lato';
            font-weight: 300;
            padding: 0;
            margin: 0 auto;
            font-size: 36px;
            width: 59%;
            @media (max-width: 767px) {
                width: 90%;
                margin-top: 2vh;
            }
        }
    }
</style>