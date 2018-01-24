import React from 'react'
import classNames from 'classnames'
import Input, { InputAdornment } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit
  },
  withoutLabel: {
    marginTop: theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  }
})

const AddClothesBar = ({ classes, newMinTemp, newMaxTemp, newSetOfClothes, changeNewMinTemp, changeNewMaxTemp, changeNewSetOfClothes, addClothesTemperatureMapping }) => (
  <div className={classes.root}>
    <FormControl
      className={classNames(classes.formControl, classes.withoutLabel)}
    >
      <Input
        value={newMinTemp}
        type="number"
        onChange={(e) => changeNewMinTemp(e.target.value)}
        endAdornment={<InputAdornment position="end">°C</InputAdornment>}
      />
      <FormHelperText>Min Temperature</FormHelperText>
    </FormControl>
    <FormControl
      className={classNames(classes.formControl, classes.withoutLabel)}
    >
      <Input
        value={newMaxTemp}
        type="number"
        onChange={(e) => changeNewMaxTemp(e.target.value)}
        endAdornment={<InputAdornment position="end">°C</InputAdornment>}
      />
      <FormHelperText>Max Temperature</FormHelperText>
    </FormControl>
    <TextField
      multiline
      label="Enter clothes to wear"
      rowsMax="2"
      value={newSetOfClothes}
      onChange={(e) => changeNewSetOfClothes(e.target.value)}
      className={classes.textField}
      margin="normal"
      fullWidth
    />
    <Button
      fab
      mini
      color="primary"
      aria-label="add"
      className={classes.button}
      onClick={() => addClothesTemperatureMapping(newMinTemp, newMaxTemp, newSetOfClothes)}
    >
      <AddIcon/>
    </Button>
  </div>
)

export default withStyles(styles)(AddClothesBar)
