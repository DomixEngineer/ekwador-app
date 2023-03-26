import _ from 'lodash'
import moment from 'moment'

// Get random photos from photos array (ref - context this parameter)
export function getRandomPhotos(photoCount, photos, ref) {
    const allPhotos = photos
    const randomPhotos = []
    for (let counter = 0; counter <= photoCount; counter++) {
        let randomElement = _.sample(allPhotos)
        randomPhotos.push(randomElement)
    }
    ref.randomPhotos = randomPhotos;
}

// Check if date is after current date (ref - context this parameter)
export function checkIfDateIsAfter(ref) {
    let startDate = moment(moment(), "DD/MM/YYYY");
    let endDate = moment(ref.endDate, "DD/MM/YYYY");
    let difference = startDate.diff(endDate, 'days')
    if (difference >= 0) {
        return true
    }
}

// Calc date and set remaining days, hours, minutes (ref - context this parameter)
export function calcDate(ref) {
    if (checkIfDateIsAfter(ref)) {
        ref.isAfterDate = true
        return;
    }
    let m1 = moment(moment(), 'DD-MM-YYYY HH:mm'); // Today
    let m2 = moment(ref.endDate, 'DD-MM-YYYY HH:mm'); // end date
    let m3 = m2.diff(m1,'minutes');
    let numdays = Math.floor(m3 / 1440);
    let numhours = Math.floor((m3 % 1440) / 60);
    let numminutes = Math.floor((m3 % 1440) % 60);
    ref.remainingDays = numdays
    ref.remainingHours = numhours
    ref.remainingMinutes = numminutes
}