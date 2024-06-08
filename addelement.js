let arr = [10, 20, 0, 40, 50, 60, 15, 8, 9];

let pos=3;
let element=65;
// console.log(arr);
for(let i=arr.length;i>pos;i--)
    {
        arr[i]=arr[i-1]
    }
    arr[pos]=element;
    console.log(arr);



    // last add

    // arr[arr.length]=20;
    // console.log(arr);