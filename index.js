function driversWithRevenueOver(arr, revenue) {
  return arr.filter(function (el) {
    return el.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(arr, revenue) {
  return arr.filter(function (el) {
    for (const name of arr) {
      if (el['revenue'] > revenue) {
        return el[name] 
      }
    }
  })
}