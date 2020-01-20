function show(){
  console.log(this)
}
var arr = [1,2,3];
arr.a = show;
setTimeout(arr.a, 100);
arr.a();