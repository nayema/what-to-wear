import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CurrentConditions from './CurrentConditions'

function mapStateToProps (state) {
  return {
    realFeelTemperature: state.currentConditions.realFeelTemperature,
    clothesTemperatureMappings: state.clothesTemperatureMappings.clothesTemperatureMappings
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentConditions)
