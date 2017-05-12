const getters = {
  loadingStatus: state => state.app.loadingStatus,
  token: state => state.user.token,
  menuList: state => state.menu.menuList
}
export default getters
