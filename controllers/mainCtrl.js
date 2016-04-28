app.controller('mainCtrl', function($scope, chartService, keyService) {
    
    google.charts.load('current', {'packages':['geochart']});
    google.charts.setOnLoadCallback(drawVisualization);

    function drawVisualization() {
        var key = keyService.getKey();
        chartService.getSalesData(key)
            .then(function(result) {
                var dataObj = result;
                var dataArr = [['State', 'Sales']];
                for (var p in dataObj) {
                    dataArr.push([p, dataObj[p]]);
                }
                var data = google.visualization.arrayToDataTable(dataArr);
                var geochart = new google.visualization.GeoChart(
                    document.getElementById('visualization'));
                    geochart.draw(data, {width: 900, height: 647, region: "US", resolution: "provinces"});
            })
    }
    
})