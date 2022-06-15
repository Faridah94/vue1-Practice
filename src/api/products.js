



let Products = [
    {"id":1,"title":"ipad","price":500.01,"inventory":2},
    {"id":2,"title":"T-shirt","price":10.99,"inventory":10},
    {"id":3,"title":"Sucker CD","price":19.91,"inventory":6},
    {"id":4,"title":"iphone","price":500.01,"inventory":2},
    {"id":5,"title":"jeans","price":21.99,"inventory":19},
    {"id":6,"title":"leather jacket","price":19.91,"inventory":9},
    {"id":7,"title":"earplugs","price":100.01,"inventory":22},
    {"id":8,"title":"shirt","price":20.99,"inventory":10},
    {"id":9,"title":"skirt","price":35.91,"inventory":6},
]

export default {
    getProducts(cb){
        setTimeout(()=> cb(Products), 3000)
    },

    buyProducts(Products, cb, errorCb){
        setTimeout(() => {
            (Math.random() > 0.5  || navigator.userAgent.indexOf('PhantomJS') > -1)
            ? cb()
            :errorCb      

        }, 100)
    }
}