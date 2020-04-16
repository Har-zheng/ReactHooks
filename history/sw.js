
const CAHE_NAME = 'cache-v1'
self.addEventListener('install', event => {
  console.log('install' , event)
  event.waitUntil(caches.open(CAHE_NAME).then(cache => {
    cache.addAll(([
        '/',
        './index.css'
    ]))
  }))

})
self.addEventListener('activate', event => {
  console.log( 'activate' , event)
  event.waitUntil(caches.keys().then(cacheNames => {
    console.log(cacheNames)
    return Promise.all(cacheNames.map(cacheName=> {
      if(cacheName !== CAHE_NAME){
        return caches.delete(cacheName)
      }
    }))
  }))
})
self.addEventListener('fetch', event => {
  console.log( 'fetch' , event)
  event.respondWith(caches.open(CAHE_NAME).then(cache => {
    return cache.match(event.request).then(response => {
      if(response){
        return response;
      }
      return fetch(event.request).then(response => {

        if(!(event.request.url.indexOf('http') === 0)){
          //skip request
        }else  {
          cache.put(event.request, response.clone())
        }
        // cache.put(request, copy);
        console.log(response)
        return response
      })
    })
  }))
})
 /*Notification 系统推送通知的功能
Notification.requestPermission().then(permission => console.log(permission))
new Notification('hello 123', {body :'this from console'})
 只用在页面中授权  Notification  在其他js脚本中才能推送通知

 */
