import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import FolderIcon from 'material-ui-icons/Folder'
const Resources = props => {
  // props.resources

  return (
    <div>
      <h1>Resources</h1>
      <div>
        <ol>
          {map(r => {
            return (
              <div>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
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
