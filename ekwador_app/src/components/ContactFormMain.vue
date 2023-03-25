<template>
    <div>
        <div v-if="!contactFormSent" class="contact-form-main">
            <div class="contact-form-main__row">
                <input 
                    type="text" 
                    class="contact-form-main__row__input" 
                    placeholder="Imię i nazwisko *"
                    v-model="contactForm.name"
                >
                <p v-if="formErrors && formErrors.name" class="form-error">Pole jest wymagane</p>
            </div>
            <div class="contact-form-main__row">
                <input 
                    type="text" 
                    class="contact-form-main__row__input" 
                    placeholder="Adres e-mail *"
                    v-model="contactForm.email"
                >
                <p v-if="formErrors && formErrors.email" class="form-error">Pole jest wymagane</p>
            </div>
            <div class="contact-form-main__row">
                <textarea 
                    class="contact-form-main__row__textarea-msg" 
                    placeholder="Wiadomość *" 
                    resizable="false"
                    v-model="contactForm.message"
                >
                </textarea>
                <p v-if="formErrors && formErrors.message" class="form-error">Pole jest wymagane</p>
            </div>
            <div class="contact-form-main__row align-right-btn last-row">
                <button class="contact-form-main__row__send-btn" @click="submitContactForm">
                    Wyślij
                </button>
            </div>
        </div>
        <div v-if="contactFormSent" class="contact-form-sent">
            <div>
                <img src="../assets/images/form-contact-sent-success.png">
                <h1>Wiadomość została wysłana pomyślnie, odezwiemy się tak szybko jak to możliwe</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contactFormSent: false,
            contactForm: {
                name: '',
                email: '',
                message: ''
            },
            formErrors: {}
        }
    },
    methods: {
        clearFormErrors() {
            this.formErrors = {}
        },
        validateForm() {
            this.clearFormErrors()
            if (this.contactForm.name == '') {
                this.formErrors.name = true
            }
            if (this.contactForm.email == '') {
                this.formErrors.email = true
            }
            if (this.contactForm.message == '') {
                this.formErrors.message = true
            }
            if (Object.keys(this.formErrors).length > 0) {
                // eslint-disable-next-line no-unused-vars
                for (let [key, value] of Object.entries(this.formErrors)) {
                    if (value) {
                        return false
                    }
                }
            }
            return true
        },
        submitContactForm() {
            if (this.validateForm()) {
                // MOCK EXAMPLE HTTP REQUEST FORM CONTACT POST (EX. AXIOS)
                this.contactFormSent = true
                return true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .contact-form-main {
        &__row {
            margin-bottom: 45px;
            &__input {
                background: unset;
                border: none;
                border-bottom: 3px solid #fcff15;
                outline: none;
                width: 100%;
                color: white;
                font-size: 30px;
                // margin-bottom: 45px;
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
    .contact-form-sent {
        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 10vh;
        }
        img {
            display: block;
            width: 40%;
            margin: 0 auto;
        }
        h1 {
            color: #2ecc71;
            font-family: 'lato';
            font-weight: 300;
            text-align: center;
            font-size: 20px;
        }
    }
    .align-right-btn {
        display: flex;
        justify-content: right;
    }
    .form-error {
        color: red;
        font-family: 'lato';
        text-transform: uppercase;
        font-weight: 300;
        margin: 0;
        font-size: 14px;
    }
    .last-row {
        margin-bottom: 0;
    }
</style>