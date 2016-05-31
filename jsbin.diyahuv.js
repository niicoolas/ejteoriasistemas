function sumarray(x) {
  var sum = 0;
  for (i=0;i<x.length;i++) sum+=x[i];
  return sum;
}

function productarray(x) {
  var prod=x[0];
  for (i=1;i<x.length;i++) prod*=x[i];
  return prod;
}