

// Arrays
// Find the largest and smallest number in an array.
let arr =[5 ,8 , 6  ,9 , 40 , 87]
let Largest =arr[0];
let smallest= arr[0];
for(let num of arr){
    if(num > Largest){
        Largest =  num;
    }
   if(num<smallest){
        smallest= num;
   }   
}
console.log("Largest Number is :" , Largest);
console.log("Smallest number is :" , smallest);



// Remove duplicate elements from an array.
let arr2 = [1,2,3,4,5,6,7,4,1,2,3];
let unique = [];
for(let num of arr2){
    if(!unique.includes(num)){
        unique.push(num);
    }
}
console.log("Unique element is :", unique);



// Sort an array without using built-in sort().
let arr3 =[8,6,9,7,5,2,1,4,3];
for(let i = 0;i<arr3.length;i++){
    for(let j =0;j<arr3.length-1;j++){
        if(arr3[j]>arr3[j+1]){
            let temp =arr3[j];
            arr3[j]=arr3[j+1];
            arr3[j+1]= temp;
        }
    }
}
console.log("sorted array: ", arr3 );



// Find second largest number in an array.
let arr4 = [5,8,6,9,40,87];
let largest = arr4[0];
let secondlargest = arr4[0];
for(let num of arr4){
    if(num>largest){
        secondlargest= largest;
        largest =num;
    }else if(num>secondlargest && num !== largest){
        secondlargest = num;
    }
}
console.log("Second largest number is : ", secondlargest);



// Merge two arrays and remove duplicates.
let arr5 = [1 ,2 ,3 ,4 ,5];
let arr6 = [4,5,6,7,8,9];
let merged = arr5.concat(arr6);
let uniqueMerged = [];
for(let num of merged){
    if(!uniqueMerged.includes(num)){
        uniqueMerged.push(num);
    }
}
console.log("Merged and unique array is :",uniqueMerged);


