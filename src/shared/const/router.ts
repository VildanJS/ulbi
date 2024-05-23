export enum AppRouteNames {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile', //id
  NOT_FOUND = 'not_found',
  FORBIDDEN = 'forbidden',
  ADMIN_PANEL = 'admin_panel',
  ARTICLES = 'articles', //id
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_EDIT = 'article_edit',
  ARTICLE_CREATE = 'article_create',
}

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string) => `/profile/${id}`
export const getRouteArticles = () => '/articles'
export const getRouteArticleDetails = (id: string) => `/articles/${id}`
export const getRouteArticleCreate = () => '/articles/new'
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`
export const getRouteAdminPanel = () => '/admin_panel'
export const getRouteForbidden = () => '/forbidden'
