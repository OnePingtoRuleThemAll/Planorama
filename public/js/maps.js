function GetMap() {
    var map = new Microsoft.Maps.Map('#myMap', {
        credentials: 'AgztHx8rlO0Qx58HLhV5ADFbJqHIIjkbzPXkVI3HEnLIJv9MTCVZCMYWNA1UDjTN',
        center: new Microsoft.Maps.Location(33.684566, -117.826508)
    });

    var center = map.getCenter();

    // Create custom Pushpin
    var pin = new Microsoft.Maps.Pushpin(center, {
        title: 'Event Location',
        text: '1'
    });

    // Add the pushpin to the map
    map.entities.push(pin);
    console.log("GET MAP is called");
} 



//GetMap();