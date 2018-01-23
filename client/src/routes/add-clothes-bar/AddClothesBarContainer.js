import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as clothesList from '../../modules/clothes-temperature-mappings'
import AddClothesBar from './AddClothesBar'

function mapStateToProps (state) {
  return {
    newMinTemp: state.clothesTemperatureMappings.newMinTemp,
    newMaxTemp: state.clothesTemperatureMappings.newMaxTemp,
    newSetOfClothes: state.clothesTemperatureMappings.newSetOfClothes
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    changeNewMinTemp: clothesList.actionCreators.changeNewMinTemp,
    changeNewMaxTemp: clothesList.actionCreators.changeNewMaxTemp,
    changeNewSetOfClothes: clothesList.actionCreators.changeNewSetOfClothes,
    addNewSetOfClothes: clothesList.actionCreators.addClotheList
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddClothesBar)
