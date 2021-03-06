import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ClothesTemperatureMappings from './ClothesTemperatureMappings'

function mapStateToProps (state) {
  return {
    clothesTemperatureMappings: state.clothesTemperatureMappings.clothesTemperatureMappings
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    // deleteClothesTemperatureMapping: clothesTemperatureMappings.actionCreators.deleteClothesTemperatureMapping
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ClothesTemperatureMappings)
