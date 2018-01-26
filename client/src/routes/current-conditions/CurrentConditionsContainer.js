import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// import * as currentConditions from '../../modules/current-conditions'
import CurrentConditions from './CurrentConditions'

function mapStateToProps (state) {
  return {
    realFeelTemperature: state.currentConditions.realFeelTemperature
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    // loadCurrentConditionsSucceeded: currentConditions.actionCreators.loadCurrentConditionsSucceeded
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentConditions)
