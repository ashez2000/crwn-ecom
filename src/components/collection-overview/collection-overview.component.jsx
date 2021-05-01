import './collection-overview.styles.scss'

// redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionForPreview } from '../../redux/shop/shop.selector'

import CollectionPreview from '../collection-preview/collection-preview.component'

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collection-overview'>
      {collections.map(c => (
        <CollectionPreview key={c.id} {...c} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
})

export default connect(mapStateToProps)(CollectionOverview)
