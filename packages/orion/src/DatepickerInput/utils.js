import { toMoment } from '../utils/datetime'

export const formatDate = (date, displayFormat) => {
  const momentDate = toMoment(date, displayFormat)
  return momentDate && momentDate.isValid()
    ? momentDate.format(displayFormat)
    : null
}
