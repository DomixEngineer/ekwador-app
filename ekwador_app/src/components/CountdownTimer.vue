<template>
    <div class="countdown_timer" v-if="!isAfterDate">
        <div class="countdown_timer__single-element">
            <h1 class="countdown_timer__single-element__main-value">{{ remainingDays }}</h1>
            <h3 class="countdown_timer__single-element__main-value-title">dni</h3>
        </div>
        <div class="countdown_timer__single-element">
            <h1 class="countdown_timer__single-element__main-value">{{ remainingHours }}</h1>
            <h3 class="countdown_timer__single-element__main-value-title">godzin</h3>
        </div>
        <div class="countdown_timer__single-element">
            <h1 class="countdown_timer__single-element__main-value">{{ remainingMinutes }}</h1>
            <h3 class="countdown_timer__single-element__main-value-title">minut</h3>
        </div>
    </div>
    <div class="countdown_timer_finished" v-if="isAfterDate">
        <h1>Impreza już się odbyła, dziękujemy za obecność</h1>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name: 'CountdownTimer',
    props: {
        endDate: {
            type: Date,
            required: false,
            default: '12-12-2023'   // DD-MM-YY
        }
    },
    data() {
        return {
            remainingDays: 0,
            remainingHours: 0,
            remainingMinutes: 0,
            isAfterDate: false
        }
    },
    methods: {
        calcDate() {
            if (this.checkIfDateIsAfter()) {
                this.isAfterDate = true
                return;
            }
            let m1 = moment(moment(), 'DD-MM-YYYY HH:mm'); // Today
            let m2 = moment(this.endDate, 'DD-MM-YYYY HH:mm'); // end date
            let m3 = m2.diff(m1,'minutes');
            let numdays = Math.floor(m3 / 1440);
            let numhours = Math.floor((m3 % 1440) / 60);
            let numminutes = Math.floor((m3 % 1440) % 60);
            this.remainingDays = numdays
            this.remainingHours = numhours
            this.remainingMinutes = numminutes
        },
        checkIfDateIsAfter() {
            let startDate = moment(moment(), "DD/MM/YYYY");
            let endDate = moment(this.endDate, "DD/MM/YYYY");
            let difference = startDate.diff(endDate, 'days')
            if (difference >= 0) {
                return true
            }
        }
    },
    mounted() {
        this.calcDate()
    }
}
</script>

<style lang="scss" scoped>
.countdown_timer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 220px;
    &__single-element {
        text-align: center;
        margin-top: 20px;
        &__main-value {
            color: white;
            font-family: 'lato';
            margin: 0;
        }
        &__main-value-title {
            color: white;
            font-family: 'lato';
            font-weight: 300;
            margin: 0;
        }
    }
}
.countdown_timer_finished {
    h1 {
        color: white;
        font-family: 'lato';
        font-weight: 400;
        text-transform: uppercase;
    }
}
</style>