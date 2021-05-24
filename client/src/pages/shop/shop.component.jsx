import React from 'react'
import { Route } from 'react-router-dom'

// components
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils'
import CollectionPage from '../collection/collection.component'

class Shop extends React.Component {
  unSubscribeFromSnapShit = null

  componentDidMount() {
    const collectionRef = firestore.collection('collections')
    // reading collectiopn from firestore
    collectionRef.onSnapshot(async snapshot => {
      convertCollectionSnapshotToMap(snapshot)
    })
  }

  render() {
    const { match } = this.props
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    )
  }
}

export default Shop
