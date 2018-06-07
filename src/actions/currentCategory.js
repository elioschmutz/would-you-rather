export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY'

export function setCurrentCategory(category) {
  return {
    type: SET_CURRENT_CATEGORY,
    category
  }
}
