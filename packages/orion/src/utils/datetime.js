import moment from 'moment'

export const toMoment = (date, format) => date && moment(date, format)
