function ExpressService($http, $q) {
    const service = this;
  

    service.getCartData = () => {
        return $q(function (resolve, reject) {
            $http.get("/cartItems")
            .then((response) => {
                console.log(response.data)
                resolve(response.data);
            })
            .catch((err) => {
                console.error(err);
                reject(err);

            })

        })
    
    }



angular
.module('ExpressApp')
.service('RedditService', ['$http', ExpressService]) 