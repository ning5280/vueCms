const getters = {
  loadingStatus: state => state.app.loadingStatus,
  token: state => state.user.token,
  menuList: state => state.menu.menuList,
  articleList: state => state.article.articleList,
  articleListCount: state => state.article.articleCount
}
export default getters
