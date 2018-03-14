import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
import Subheader from 'material-ui/List/ListSubheader'
import IconButton from 'material-ui/IconButton'
import InfoIcon from 'material-ui-icons/Info'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
})

const Resources = props => {
  return (
    <div>
      <GridList cellHeight={180}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <Subheader component="div">December</Subheader>
        </GridListTile>
        {props.resources.map(tile => (
          <GridListTile key={tile.img}>
            <img src="https://3.bp.blogspot.com/-gnw1Xsq-5iI/V2m8yXy3DUI/AAAAAAAAK-g/H-K0DGNC43su0QAhSgAvNqMRbUEzPJ2egCLcB/s1600/Small-Soldiers-Archer-lifesize-figure-3.jpg" />
            <GridListTileBar
              title={tile.name}
              subtitle={<span>{tile.shortDesc}</span>}
              actionIcon={
                <IconButton>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    resources: state.resources
  }
}

const connector = connect(mapStateToProps)

export default connector(Resources)
