import './collection.styles.scss'

import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector'

import CollectionItem from '../../components/collection-item/collection-item.component'

const CollectionPage = ({ collection }) => {
  const { title, items } = collection
  return (
    <div className='collection-page'>
      <h2>{title}</h2>
      <div className='items'>
        {items.map(i => (
          <CollectionItem key={i.id} item={i} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  }
}

export default connect(mapStateToProps)(CollectionPage)
