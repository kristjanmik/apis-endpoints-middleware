module.exports = function(app){
    var map = {
        'flights': 'apis-flights',
        'car': 'apis-car',
        'firm': 'apis-firm',
        'price': 'apis-price', 
        'currency': 'apis-currency', 
        'names': 'apis-names-lookup' ,
        'particulates': 'apis-particulates',
        'cyclecounter': 'apis-cyclecounter'
    }

    for(var i in map){
        try{
            require(map[i])(app, '/' + i);
        }catch(error){
            console.error('Error loading up endpoint error');
            console.error(error.stack)
        }
    }
}