import React, { Component } from 'react'
import './directory.styles.scss'

import sectionData from '../../data/directory.data'

// components
import MenuItem from '../menu-item/menu-item.component'

class Directory extends Component {
  constructor() {
    super()

    this.state = {
      sections: sectionData,
    }
  }

  render() {
    const { sections } = this.state

    return (
      <div className='directory-menu'>
        {sections.map(props => (
          <MenuItem key={props.id} {...props} />
        ))}
      </div>
    )
  }
}

export default Directory
