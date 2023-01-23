var response = JSON.parse( {'https://www.boredapi.com/api/activity'} );
var lines = [];

$.each( response, function( line ) {//loop through lines in response
    var keys = [];
    var values = [];
    $.each( line, function( obj ) {
        keys.push( Object.keys(obj) );//get keys
        for( var key in obj ) {
            values.push(obj[key]);//get values
        }
    });
    lines.push({ {'keys':keys},{'values':values} });
});
