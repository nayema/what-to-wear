import React from 'react'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = () => ({
  currentConditionsFont: {
    fontFamily: 'Roboto',
    textAlign: 'left'
  }
})

const CurrentConditions = ({ classes, realFeelTemperature }) => (
  <div>
    <Typography className={classes.currentConditionsFont}>
      Current Conditions:
    </Typography>
    <Typography type="display4" gutterBottom>
      -2.5
      {/*{realFeelTemperature}*/}
    </Typography>
  </div>
)

export default withStyles(styles)(CurrentConditions)
