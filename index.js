module.exports = function(app){
    var map = {
        //prefix: module-name
        'flights': 'apis-flights' 
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