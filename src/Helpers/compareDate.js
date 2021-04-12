import moment from 'moment';

const compareDate = (start, end) =>  {
    let current_date = moment(new Date());

    if (start == null ||  end == null) {
        return;
    }

    if (moment(start).isSame(end)) {
        return {
            valid: false,
            error: `start and end cant be the same`
        }
    }

    if (moment(current_date).isAfter(start)) {
        return {
            valid: false,
            error:  'current date exceeds start'
        };
    }

    if (moment(start).isBefore(end) && moment(end).isAfter(start))  {
        return {
            valid: true
        };
    }
}

export default compareDate;

