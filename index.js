function driversWithRevenueOver(arr, str) {
  return arr.filter(function (el) {
    return el.revenue > str;
  })
}