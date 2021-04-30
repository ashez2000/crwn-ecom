import './directory.styles.scss'

// redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectSections } from '../../redux/directory/directory.selector'

// components
import MenuItem from '../menu-item/menu-item.component'

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(props => (
        <MenuItem key={props.id} {...props} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
})

export default connect(mapStateToProps)(Directory)
