app.service('chartService', function($http) {
   
    this.getSalesData = function(key) {
       return $http({
            method: 'GET',
            url: 'https://fulfil_demo.fulfil.io/api/v1/model/sale.sale?field=reference&field=shipment_address.subdivision.code&field=shipment_address.country.code&filter=[[\"state\",\"=\",\"processing\"]]&filter=filter&page=1&per_page=1000',
            headers: {
                'x-api-key': key
            }  
        }).then(function(result) {
            var data = result.data;
            var dataObj = {};
            data.forEach(function(elem, index, array) {
                if (dataObj[elem["shipment_address.subdivision.code"]]) {
                    dataObj[elem["shipment_address.subdivision.code"]]++;
                } else {
                    dataObj[elem["shipment_address.subdivision.code"]] = 1;
                }
            })
            delete dataObj.null;
            return dataObj;
           
        }, function(err) {
            console.log(err);
        })
   } 
    
 
        
});

