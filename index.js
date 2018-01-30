function driversWithRevenueOver(arr, revenue) {
  return arr.filter(function (el) {
    return el.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(arr, revenue) {
  return arr.filter(function (el) {
    for (const name in arr) {
      if (el['revenue'] > revenue) {
        debugger;
        return [el['name']];
      }
    }
  })
}