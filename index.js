module.exports = function(app){
    var map = {
        //prefix: module-name
        'flights': 'apis-flights',
        'car': 'apis-car',
        'firm': 'apis-firm',
        'price': 'apis-price', 
        'currency': 'apis-currency', 
        'names': 'apis-names-lookup' 
    }

    for(var i in map){
        require('domain')
            .create()
            .on('error', function(error) {
                console.error('Error loading up endpoint error:');
                console.error(error.stack)
            })
            .run(function() {
                require(map[i])(app, '/' + i);
            });
    }
}