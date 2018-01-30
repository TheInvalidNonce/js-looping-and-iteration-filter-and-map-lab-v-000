function driversWithRevenueOver(arr, revenue) {
  return arr.filter(function (el) {
    return el.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(arr, revenue) {
  return driversWithRevenueOver(arr, revenue)
  .map(function (el) {
    return el.name
  })
}

function exactMatch(arr, obj) {
  obj;
  return arr.filter(function (el) {
    debugger; 
  })
  
}