//  let arr1= [1,2,3,4]
//  let max = 0;
//  for(let i=0;i<=arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i];
       
//     }
   
//  }
//  console.log(max)

//  let max =0;
//  for(let i in arr){
//     if(arr[i]>max){

   
//     max = arr[i]
//  }
//  }
//  console.log(max)

 

//  function findmax(arr){
//    let max = 0;

//    for(let i in arr){
//       if(arr[i]>max){
//          max = arr[i]
//       }
//    }
//    return max;
//  }

//  let arr = [12,2,3,4,5]

//  console.log(findmax(arr))


// function findduplicate(arr){
//    let count =0;
//    for(let i=0;i<arr.length;i++){
//       for(let j =i+1;j<arr.length;j++){
//          if(arr[i]==arr[j]){
//             // return arr[i]
//             count++;
//          }
//       }
//    }
//    return count;
// }

// let arr=  [2,4,6,2,8]
// console.log(findduplicate(arr))






// const totalsum  = (arr) =>{

//    let sum = 0;
   
//    for(let i in arr){
//       sum = sum+arr[i]
//    }
//    return sum;


// }
// let a=[2,2,1]
// console.log(totalsum(a))



// const lastIndex = (arr,target) =>{
//     let f = -1;
//     for(let i =0;i<arr.length;i++){

//         if(target==arr[i]){
//             f = i;
//         }
//     }
//     return f;
// }
// let arr = [2,4,5,6,2]
// console.log(lastIndex(arr,2))