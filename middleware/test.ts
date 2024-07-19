export default defineNuxtRouteMiddleware((to, from) => {
  console.log('test middleware =>', to);
})
