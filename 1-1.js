var a = 0;
var b = 0;
var c = 0;

$(document).ready(function(){
	$(".ansA").click(function(){
	a++;});
  $(".ansB").click(function(){
		b++;});
 	$(".ansC").click(function(){
		c++;});
	$("button").click(function(){
  if(a > b && a > c){
    $("#imgA").show();
  }
  if(b > a && b > c){
    $("#imgB").show();
  }
  if(c > a && c > b){
    $("#imgC").show();
  }
  if(a == b && a == c && b == c){
    $("#imgD").show();
  }
	});
});
