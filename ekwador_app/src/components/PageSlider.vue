<template>
    <div class="page-slider">

        <div class="page-slider__slides">
            <div class="page-slider__slides__single-slide first_slide"></div>
            <div 
                class="page-slider__slides__single-slide second_slide in-active">
            </div>
            <div 
                class="page-slider__slides__single-slide third_slide in-active"
            >

            </div>
        </div>

        <div class="page-slider__arrows">
            <div class="page-slider__arrows__arrow--left">
                <img src="../assets/images/slider/left_arrow.png" alt="" @click="prev" />
            </div>
            <div class="page-slider__arrows__arrow--right">
                <img src="../assets/images/slider/right_arrow.png" alt="" @click="next" />
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: 'PageSlider',
    data() {
        return {
            currentSlide: 0,
            slides: 2
        }
    },
    methods: {
        prev() {
            if (this.currentSlide <= 0) {
                this.currentSlide = this.slides + 1
            }
            this.currentSlide--
            console.log(this.currentSlide)
        },
        next() {
            if (this.currentSlide >= 2) {
                this.currentSlide = -1
            }
            this.currentSlide++
            console.log(this.currentSlide)
        }
    }
}
</script>

<style lang="scss" scoped>
    .page-slider {
        position: relative;
        height: 100vh;
        width: 100%;
        &__slides {
            position: relative;
            &__single-slide {
                position: absolute;
                top: 0;
                width: 100%;
                height: 100vh;
            }
        }
        &__arrows {
            display: flex;
            justify-content: space-between;
            position: absolute;
            width: 90%;
            top: 50%;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            &__arrow {
                &--left,
                &--right 
                {
                    cursor: pointer;
                }
            }
        }
    }
    .first_slide {
        background-image: url('../assets/images/slider/first_slide_bg.png');
    }
    .second_slide {
        background-image: url('../assets/images/slider/second_slide_bg.jpg');
    }
    .active {
        left: 0;
    }
    .in-active {
        left: -100%;
    }
    
</style>