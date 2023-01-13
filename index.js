const returnFirstTwoDrivers = function(drivers){
return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (lastdrivers) {
    return lastdrivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (value) =>{
    return ()=> value * 5
}

function fareDoubler(fare){
    return fare * 2
}

function fareTripler(fare){
    return fare * 3 
}

function selectDifferentDrivers(arrayOfDrivers, fn){
    return fn(arrayOfDrivers)
}