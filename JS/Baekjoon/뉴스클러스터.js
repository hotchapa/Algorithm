function solution(str1, str2) {
  var answer = 0;
  let len1 = str1.length;
  let len2 = str2.length;
  let str1Arr = [];
  let str2Arr = [];
  
  for(let i =0; i<len1-1; i+=2){
    let temp = typeof(str1[i])
    let temp2 =typeof(str1[i+1])
      if(temp == "string" && temp2 == "string")
        str1Arr.push([str1[i],str1[i+1]])
      }
  for(let i =0; i<len2-1; i+=2){
    let temp = typeof(str2[i])
    let temp2 =typeof(str2[i+1])
      if(temp == "string" && temp2 == "string")
        str2Arr.push([str2[i],str2[i+1]])
      }
  
  
  console.log(str1Arr,str2Arr)
  
  return answer;
}

solution("FRANCE","french")
