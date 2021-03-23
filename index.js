const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

//Uses Reduce Method to Calculate Sumed Total in Array
let totalBatteries = batteryBatches.reduce(function (accum, init) {
   return accum + init;
});
console.log(totalBatteries);
