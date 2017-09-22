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
		$("#paraA").show();
	}
	if(b > a && b > c){
		$("#imgB").show();
		$("#paraB").show();
	}
	if(c > a && c > b){
		$("#imgC").show();
		$("#paraB").show();
	}
	if(a == b && a == c && b == c){
		$("#imgD").show();
		$("#paraD").show();
	}
	});
});
