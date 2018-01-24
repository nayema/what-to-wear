import React from 'react'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    width: '100%'
  },
  table: {
    minWidth: 700
  },
  button: {
    margin: theme.spacing.unit,
    right: theme.spacing.unit * 2
  }
})

const ClothesTemperatureMappings = ({ classes, clothesTemperatureMappings }) => (
  <div className={classes.root}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Minimum Temperature (°C)</TableCell>
          <TableCell>Maximum Temperature (°C)</TableCell>
          <TableCell>Set of Clothes</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {clothesTemperatureMappings.map(clothesTemperatureMapping =>
          <TableRow key={clothesTemperatureMapping.setOfClothes}>
            <TableCell>
              {clothesTemperatureMapping.minTemp}
            </TableCell>
            <TableCell>
              {clothesTemperatureMapping.maxTemp}
            </TableCell>
            <TableCell>
              {clothesTemperatureMapping.setOfClothes}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </div>
)

export default withStyles(styles)(ClothesTemperatureMappings)
