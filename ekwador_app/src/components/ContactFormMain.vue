<template>
    <div>
        <div class="contact-form-main">
            <div class="contact-form-main__row">
                <input type="text" class="contact-form-main__row__input" placeholder="Imię i nazwisko *">
            </div>
            <div class="contact-form-main__row">
                <input type="text" class="contact-form-main__row__input" placeholder="Adres e-mail *">
            </div>
            <div class="contact-form-main__row">
                <textarea class="contact-form-main__row__textarea-msg" placeholder="Wiadomość *" resizable="false"></textarea>
            </div>
            <div class="contact-form-main__row align-right-btn">
                <button class="contact-form-main__row__send-btn">
                    Wyślij
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .contact-form-main {
        &__row {
            &__input {
                background: unset;
                border: none;
                border-bottom: 3px solid #fcff15;
                outline: none;
                width: 100%;
                color: white;
                font-size: 30px;
                margin-bottom: 45px;
            }
            &__textarea-msg {
                background: unset;
                border: none;
                border-bottom: 3px solid #fcff15;
                width: 100%;
                color: white;
                font-size: 30px;
                resize: none;
                outline: none;
                font-family: 'lato';
                height: 217px;
            }
            &__send-btn {
                background-color: #0652dd;
                color: white;
                font-family: 'lato';
                font-size: 23px;
                border: unset;
                padding: 12px 45px;
                border-radius: 10px;
                cursor: pointer;
                margin-top: 25px;
            }
        }
    }
    .align-right-btn {
        display: flex;
        justify-content: right;
    }
</style>