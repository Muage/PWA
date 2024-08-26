self.addEventListener('install', event => {
    console.log('서비스워커 설치(install)!')
})

self.addEventListener('activate', event => {
    console.log('서비스워커 동작(activation) 시작!')
})

self.addEventListener('fetch', event => {
    console.log('데이터 요청(fetch)!', event.request)
})