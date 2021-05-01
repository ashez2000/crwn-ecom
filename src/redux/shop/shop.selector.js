import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

const collectionIdMap = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
}

export const selectCollection = collectionName => {
  return createSelector([selectCollections], collections =>
    collections.find(c => c.id === collectionIdMap[collectionName])
  )
}
