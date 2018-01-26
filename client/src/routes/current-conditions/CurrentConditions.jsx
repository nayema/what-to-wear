import React from 'react'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = () => ({
  card: {
    maxWidth: 345
  }
})

const CurrentConditions = ({ classes, realFeelTemperature }) => (
  <div>
    {realFeelTemperature}
  </div>
)

export default withStyles(styles)(CurrentConditions)
