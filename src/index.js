
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr =[]
  let arr1=[]
  if (matrix === undefined){return arr1}    
  if(matrix.length===0){return arr1}
  for(let i = 0; i < matrix.length;i++){
    if(i%2!==0){
      arr.push(matrix[i].reverse())  }  
    else{
      arr.push(matrix[i])
    }
  }
  let str1 = String(arr).split(',')

  return str1
}
