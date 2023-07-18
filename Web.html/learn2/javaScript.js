// function timSoAm(arr) {
//   var soAmLonNhat = null;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < 0 && (soAmLonNhat === null || arr[i] > soAmLonNhat)) {
//       soAmLonNhat = arr[i];
//     }
//   }
//   if (soAmLonNhat !== null) {
//     alert("So am lon nhat:" +soAmLonNhat);
//   } else {
//     alert("Not Found");
//   }
// }
// var mang = [1, 2, -5, -3, 4, -7, -2];
// timSoAm(mang);


//
function sortAscending(){
    var array = [6,5,2,7,8,3,4];
    for(var i = 0; i < array.length; i++){
        for(var j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                var tmp=array[i];
                    array[i] = array[j];
                    array[j]=tmp;
            }
        }
    }
    // alert(array+" ");
}
// sortAscending();
function tim3SoLonNhat(arr) {
    var maxThree=""; 
    if(arr.length<3){
        alert("Not Found");
        return;
    }
    for(var i = 0; i < array.length; i++){
        for(var j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                var tmp=array[i];
                    array[i] = array[j];
                    array[j]=tmp;
            }
        }
    }

    for(var i=0; i<array.length; i++){
    
    }
    
}


