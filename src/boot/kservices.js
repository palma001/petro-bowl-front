import services from 'kservices'
export default async ({ Vue, app }) => {
  Vue.use(services, {
    baseUrl: 'http://localhost:3000'
  })
}
