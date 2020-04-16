self.addEventListener('install', event => {
  console.log('install' , event)
  event.waitUntil(self.skipWaiting())
  // event.waitUntil(new Promise(resolve => {
  //   setInterval(resolve,5000)
  // }))
//  12
})
self.addEventListener('activate', event => {
  console.log( 'activate' , event)
  event.waitUntil(self.clients.claim())
})
self.addEventListener('fetch', event => {
  console.log( 'fetch' , event)
})