// redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../redux/shop/shop.selector'

// components
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const Shop = ({ collections }) => {
  console.log(collections)
  return (
    <div className='shop-page'>
      {collections.map(c => (
        <CollectionPreview key={c.id} {...c} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
})

export default connect(mapStateToProps)(Shop)
