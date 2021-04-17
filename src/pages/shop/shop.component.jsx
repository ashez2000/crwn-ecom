import React, { Component } from 'react'

// data
import shopData from '../../data/shop.data'

// components
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class Shop extends Component {
  constructor() {
    super()

    this.state = {
      collections: shopData,
    }
  }

  render() {
    const { collections } = this.state

    return (
      <div className='shop-page'>
        {collections.map(c => (
          <CollectionPreview key={c.id} {...c} />
        ))}
      </div>
    )
  }
}

export default Shop
