export default defineNuxtRouteMiddleware((to, from) => {
  console.log('to', to);
  if(to.path == "/dashboard")
    return navigateTo('/')
})
