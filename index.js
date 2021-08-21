function findMatching(drivers, string) {
    let newDrivers = drivers.filter(function(name) {
        return name.toLowerCase() === string.toLowerCase();
        
    });
     
    return newDrivers;
}

function fuzzyMatch(drivers, string) {
    const newDrivers = drivers.filter(function(name) {
        return name.substring(0,2) === string;
    });

    return newDrivers;
}

function matchName(drivers, string) {
    return drivers.filter(function(object){
        return object.name === string;
    })
}