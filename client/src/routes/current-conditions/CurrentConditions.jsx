import React from 'react'
import Typography from 'material-ui/Typography'
import ListSubheader from 'material-ui/List/ListSubheader'
import List, { ListItem } from 'material-ui/List'
import { withStyles } from 'material-ui/styles'

const styles = () => ({
  font: {
    fontFamily: 'Roboto',
    textAlign: 'left'
  }
})

const CurrentConditions = ({ classes, realFeelTemperature, clothesTemperatureMappings }) => (
  <div>
    <Typography className={classes.font}>
      Current Conditions:
    </Typography>
    <Typography type="display4" gutterBottom>
      {realFeelTemperature} °C
    </Typography>
    <List>
      <ListSubheader>
        Set of clothes to wear on {new Date().toDateString()}:
      </ListSubheader>
      {clothesTemperatureMappings.map(clothesTemperatureMapping =>
        <ListItem key={clothesTemperatureMapping.setOfClothes}>
          {clothesTemperatureMapping.setOfClothes}
        </ListItem>
      )}
    </List>
  </div>
)

export default withStyles(styles)(CurrentConditions)
