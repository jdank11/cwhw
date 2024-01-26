// Calculate avg 
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
// function findAverage(array) {
//     if (array.length === 0) return 0
//     let sum = 0
//     for (const num of array){
//       sum += num
//     }
//     return sum/ array.length;
//   }


// Cat years, Dog years
// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript
// var humanYearsCatYearsDogYears = function(humanYears) {
//     if (humanYears == 1) return [1,15,15] 
//     if (humanYears == 2) return [2, 24, 24]
//     return [humanYears,
//             24 + (humanYears - 2) * 4,
//             24 + (humanYears - 2) * 5];
//   }

// Total amount of points 
// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
// function points(games) {
//     var sum=0;
//     for (var i=0; i<games.length; ++i)
//     {
//       if (games[i][0]>games[i][2])
//         sum+=3;
//       if (games[i][0]==games[i][2])
//         sum+=1;
//     }
//     return sum;
//   }

// Square(n) Sum
// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
// function squareSum(numbers){
//     var total = 0;
//     for (var i = 0; i < numbers.length; i++) {
//       total += (numbers[i] * numbers[i]);
//     }
//     return total;
//   }

// Sum without highest and lowest number
// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

// function sumArray(array) {
//     if (array == null){
//       return 0 
//     }
//     if (array.length < 3){
//       return 0
//     }

//     var max = Math.max.apply(null, array);
//     var min = Math.min.apply(null, array);

//     var sum = 0
//     for (i = 0; i < array.length; i++) {
//       sum += array[i];
//      }
//     return sum - max - min
//   }