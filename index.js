function driversWithRevenueOver(arr, revenue) {
  return arr.filter(function (el) {
    return el.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(arr, revenue) {
  return arr.filter(function (el) {
    debugger;
    for (const name in arr) {
      return el['name'] if el['revenue'] > revenue;
    }
  })
}