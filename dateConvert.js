var numberMapping ={
  0:"零",
  1:"一",
};

function toROCYear(year) {
  var ROCYearStr = (year - 1911).toString();
  console.log(ROCYearStr);
  var convertDtr="";
  for (var i=0; i<ROCYearStr.length; i++ ){
    console.log(numberMapping[ROCYearStr[i]]);
  }
  
}