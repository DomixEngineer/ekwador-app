<template>
    <div class="single-poster">
        <img 
            :src="renderImage()" 
            :alt="'Ekwador Manieczki - ' + partyTitle" 
        />
        <div class="single-poster__hover-overlay">
            <div class="single-poster__hover-overlay__border-box-decor">
                <h1 class="single-poster__hover-overlay__border-box-decor__header">Ekwador Manieczki</h1>
                <h2 class="single-poster__hover-overlay__border-box-decor__subheader">"{{ partyTitle }}"</h2>
                <h3 class="single-poster__hover-overlay__border-box-decor__date">{{ partyDate }}</h3>
                <div class="single-poster__hover-overlay__border-box-decor__btn" @click="redirectToParty()">Zobacz</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SinglePartyPoster',
    props: {
        partyId: {
            type: Number,
            required: false,
            default: 1
        },
        pictureLink: {
            type: String,
            required: false,
            default: 'bton_04_09_2023.png'
        },
        partyTitle: {
            type: String,
            required: false,
            default: 'Back To Old Night'
        },
        partyDate: {
            type: String,
            required: false,
            default: '09.04.2023r'
        }
    },
    methods: {
        renderImage() {
            return require(`../assets/images/party_posters/2023/${this.pictureLink}`)
        },
        redirectToParty() {
            this.$router.push({ name: 'PartyPreview', params: { party: this.partyId } })
        }
    }
}
</script>

<style lang="scss" scoped>
    .single-poster {
        max-width: 347px;
        width: 100%;
        position: relative;
        img {
            display: block;
            width: 100%;
        }
        &__hover-overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba($color: #000000, $alpha: 0.9);
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            display: none;
            &__border-box-decor {
                border: 1px solid white;
                height: inherit;
                box-sizing: border-box;
                width: 90%;
                height: 90%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                &__header, &__subheader {
                    color: white;
                    font-family: 'lato';
                    text-transform: uppercase;
                    text-align: center;
                    margin: 0;
                    padding: 0;
                }
                &__subheader {
                    margin-top: 10px;
                }
                &__date {
                    color: white;
                    font-family: 'lato';
                    text-align: center;
                }
                &__btn {
                    background-color: #0652dd;
                    color: white;
                    font-family: 'lato';
                    font-weight: 400;
                    text-transform: uppercase;
                    width: fit-content;
                    padding: 10px 35px;
                    border-radius: 8px;
                    margin: 0 auto;
                    cursor: pointer;
                }
            }
        }
    }
    .single-poster:hover {
        .single-poster__hover-overlay {
            display: flex;
            cursor: pointer;
        }
    }
</style>