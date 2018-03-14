import React from 'react'
import { connect } from 'react-redux'
import { map, compose, split, head } from 'ramda'
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import FolderIcon from 'material-ui-icons/Folder'
const Resources = props => {
  console.log('props', props)

  return (
    <div>
      <h1>Resources</h1>
      <div>
        <ol>
          {map(r => {
            return (
              <div>
                <List>
                  <ListItem divider={true}>
                    <ListItemAvatar>
                      <Avatar style={{ color: 'white', background: 'black' }}>
                        {r.name.charAt(0)}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={r.name} secondary={r.shortDesc} />
                  </ListItem>
                </List>
              </div>
            )
          }, props.resources)}
        </ol>
      </div>
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
