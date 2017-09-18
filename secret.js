

function getMarketdata(idArray) {

    // DataArray of coin dataobjects
    var dataArray = [];

    for(var id of idArray){

        getMarketdataJSON(id);

    }

    function getMarketdataJSON(id) {
        $.ajax({
            type: 'GET',
            url: 'https://api.coinmarketcap.com/v1/ticker/' + id + "/",
            data: {currencyID: id},
            success: function(result){

                dataArray.push(result);

            }});
    }


    $.when(getMarketdataJSON()).done(function(a1){

        document.getElementById("number1")

    });







    
}

