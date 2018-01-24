import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as clothesTemperatureMappings from '../../modules/clothes-temperature-mappings'
import AddClothesBar from './AddClothesBar'

function mapStateToProps (state) {
  return {
    newSetOfClothes: state.clothesTemperatureMappings.newSetOfClothes,
    newMinTemp: state.clothesTemperatureMappings.newMinTemp,
    newMaxTemp: state.clothesTemperatureMappings.newMaxTemp
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    changeNewMinTemp: clothesTemperatureMappings.actionCreators.changeNewMinTemp,
    changeNewMaxTemp: clothesTemperatureMappings.actionCreators.changeNewMaxTemp,
    changeNewSetOfClothes: clothesTemperatureMappings.actionCreators.changeNewSetOfClothes,
    addClothesTemperatureMapping: clothesTemperatureMappings.actionCreators.addClothesTemperatureMapping
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddClothesBar)
