// Code your solution in this file!
const returnFirstTwoDrivers =function(arry){
return arry.slice(0,2)
}
const returnLastTwoDrivers =function(arry){
return arry.slice(-2)
}

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(int){
    return function fareMultiplier(fare){
       return  fare * int
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, driversFunction){
    return driversFunction(arrayOfDrivers)
}
