import _ from 'lodash'

import buildTruncatedItemsText from '../buildTruncatedItemsText'

/**
 * Used by `Filter` components. Given the filter options and the array
 * of currently selected values, returns a string in the format:
 * `${firstValueText} +${valuesLength}`
 */
export const buildSelectedTextFromArray = (
  options,
  valueKey = 'value',
  textKey = 'text'
) => selectedArr => {
  const firstSelected = _.find(options, { [valueKey]: selectedArr[0] })
  if (_.isEmpty(selectedArr) || !firstSelected) return ''
  return buildTruncatedItemsText(firstSelected[textKey], selectedArr.length)
}
