function log(msg, obj){
  var time = '[' + Date.now() + '] ';
  console.log(time + msg);
  if (obj) { console.log(obj); }
  return;
}
