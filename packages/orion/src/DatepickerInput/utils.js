import { toMoment } from '../utils/datetime'

export const formatDate = (date, displayFormat) => {
  const momentDate = toMoment(date)
  return momentDate && momentDate.isValid()
    ? momentDate.format(displayFormat)
    : null
}
