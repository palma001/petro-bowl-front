import AuthLibrary from 'auth'
export default async ({ Vue, app }) => {
  Vue.use(AuthLibrary, {
    baseUrl: 'http://192.168.10.7:8765/mydas-us-business-associate/mydas-auth',
    // 'https://karanta-svr.sytes.net:8765/mydas-us-business-associate/mydas-auth/', // Access temp meanwhile microservice is merge
    loginUrl: 'login',
    logoutUrl: 'logout',
    refreshTokenName: 'refresh_token',
    refreshTokenUrl: 'refresh',
    tokenName: 'access_token',
    verifyTokenUrl: 'verifytoken'
  })
}
