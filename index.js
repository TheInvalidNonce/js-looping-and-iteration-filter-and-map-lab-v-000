function driversWithRevenueOver(arr, revenue) {
  return arr.filter(function (el) {
    return el.revenue > revenue;
  })
}