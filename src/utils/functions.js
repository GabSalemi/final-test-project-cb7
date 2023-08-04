export const randomizer = (array) => {
    const randomObject = array.sort((a, b) => 0.5 - Math.random());
    const sliced = randomObject.slice(0, 9)
    return sliced;
  };

export const getSpecificData = (data, key) => {
    switch (key) {
        case "title":
            let filterValueDestination = data.map(item => item.title)
            let duplicatesRemoved = filterValueDestination.filter((item,
                index) => filterValueDestination.indexOf(item) === index);
            return duplicatesRemoved;
            break;
        case "boatType":
            let filterValueBoat = data.map(item => item.boatType)
            let deletedDuplicates = filterValueBoat.filter((item,
                index) => filterValueBoat.indexOf(item) === index);
            return deletedDuplicates;
            break;
        case "itinerary":
            let filterValueItinerary = data.map(item => item.itinerary)
            return filterValueItinerary;
            break;
        case "departure":
            let filterValueDeparture = data.map(item => item.departure.Port)
            let whitoutDuplicates = filterValueDeparture.filter((item,
                index) => filterValueDeparture.indexOf(item) === index);
            return whitoutDuplicates;
            break;
        default:
            console.log("case not found")
            break;
    }
}

export const filteredByPort = (data, value) => {  
    return data.filter((item) => item.departure.Port === value)
}

