export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY'

export function setCurrentCategory(userid, category) {
  return {
    type: SET_CURRENT_CATEGORY,
    userid,
    category
  }
}
