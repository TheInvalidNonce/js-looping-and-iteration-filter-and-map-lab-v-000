function driversWithRevenueOver(arr, revenue) {
  return arr.filter(function (el) {
    return el.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(arr, revenue) {
  return arr.filter(function (el) {
    let newArr = []
      if (el['revenue'] > revenue) {
        newArr.push(el['name'])
      }
    return newArr
  })
}