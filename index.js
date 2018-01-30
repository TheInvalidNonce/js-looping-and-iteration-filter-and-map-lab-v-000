function driversWithRevenueOver(arr, revenue) {
  return arr.filter(function (el) {
    return el.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(arr, revenue) {
  return arr.filter(function (el) {
    debugger;
    return el['name'].revenue > revenue;
  })
}