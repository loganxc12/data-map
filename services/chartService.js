app.service('chartService', function($http) {
    
    var dummyData = JSON.stringify([
        {
            "rec_name": "74",
            "reference": "74",
            "id": 385869,
            "shipment_address.subdivision.code": "US-MO",
            "shipment_address.country.code": "US"
        },
        {
            "rec_name": "386276 - Armando Paucek IV",
            "reference": null,
            "id": 386276,
            "shipment_address.subdivision.code": null,
            "shipment_address.country.code": null
        },
        {
            "rec_name": "386332 - Armando Paucek IV",
            "reference": null,
            "id": 386332,
            "shipment_address.subdivision.code": null,
            "shipment_address.country.code": null
        },
        {
            "rec_name": "386473 - Armando Paucek IV",
            "reference": null,
            "id": 386473,
            "shipment_address.subdivision.code": null,
            "shipment_address.country.code": null
        },
        {
            "rec_name": "396543 - Armando Paucek IV",
            "reference": null,
            "id": 396543,
            "shipment_address.subdivision.code": null,
            "shipment_address.country.code": null
        },
        {
            "rec_name": "411767 - Gavyn Hayes",
            "reference": null,
            "id": 411767,
            "shipment_address.subdivision.code": "US-KS",
            "shipment_address.country.code": "US"
        },
        {
            "rec_name": "432076 - Sally Gerhold",
            "reference": null,
            "id": 432076,
            "shipment_address.subdivision.code": null,
            "shipment_address.country.code": null
        },
        {
            "rec_name": "432174 - Armando Paucek IV",
            "reference": null,
            "id": 432174,
            "shipment_address.subdivision.code": null,
            "shipment_address.country.code": null
        },
        {
            "rec_name": "97",
            "reference": "97",
            "id": 432175,
            "shipment_address.subdivision.code": "US-WI",
            "shipment_address.country.code": "US"
        },
        {
            "rec_name": "432183 - Aaden Christiansen",
            "reference": null,
            "id": 432183,
            "shipment_address.subdivision.code": "US-WI",
            "shipment_address.country.code": "US"
        },
        {
            "rec_name": "98",
            "reference": "98",
            "id": 438175,
            "shipment_address.subdivision.code": "US-ME",
            "shipment_address.country.code": "US"
        },
        {
            "rec_name": "99",
            "reference": "99",
            "id": 428175,
            "shipment_address.subdivision.code": "US-ME",
            "shipment_address.country.code": "US"
        },
        {
            "rec_name": "100",
            "reference": "100",
            "id": 420175,
            "shipment_address.subdivision.code": "US-TX",
            "shipment_address.country.code": "US"
        },
        {
            "rec_name": "101",
            "reference": "101",
            "id": 420195,
            "shipment_address.subdivision.code": "US-TX",
            "shipment_address.country.code": "US"
        },
        {
            "rec_name": "101",
            "reference": "101",
            "id": 420195,
            "shipment_address.subdivision.code": "US-FL",
            "shipment_address.country.code": "US"
        },
    ]);
   
    this.getSalesData = function() {
       var data = JSON.parse(dummyData);
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
   } 
    
 
        
});

