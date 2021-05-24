import './collection-preview.styles.scss'

import { withRouter } from 'react-router-dom'

import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ title, items, history, match }) => {
  return (
    <div className='collection-preview'>
      <h1
        className='title'
        onClick={() => history.push(`/shop/${title.toLowerCase(0)}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className='preview'>
        {items
          .filter((_, idx) => idx < 4)
          .map(i => (
            <CollectionItem key={i.id} item={i} />
          ))}
      </div>
    </div>
  )
}

export default withRouter(CollectionPreview)
