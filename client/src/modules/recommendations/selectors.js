import { createSelector } from 'reselect'

import * as clothesTemperatureMappings from '../clothes-temperature-mappings'
import * as currentConditions from '../current-conditions'

export const getRecommendedSetOfClothes = createSelector(
  [
    clothesTemperatureMappings.selectors.getClothesTemperatureMappings,
    currentConditions.selectors.getRealFeelTemperature
  ],
  (clothesTemperatureMappings, realFeelTemperature) => {
    const matched = clothesTemperatureMappings
      .filter(mapping =>
        mapping.minTemp <= realFeelTemperature &&
        mapping.maxTemp >= realFeelTemperature
      )[0]
    return matched != null ? matched.setOfClothes : ''
  }
)
