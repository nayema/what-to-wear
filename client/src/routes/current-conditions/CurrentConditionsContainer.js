import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as recommendations from '../../modules/recommendations'
import CurrentConditions from './CurrentConditions'

function mapStateToProps (state) {
  return {
    realFeelTemperature: state.currentConditions.realFeelTemperature,
    recommendedSetOfClothes: recommendations.selectors.getRecommendedSetOfClothes(state)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentConditions)
