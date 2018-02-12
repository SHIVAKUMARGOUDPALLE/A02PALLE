function set(){
calculateLast();
$("total").innerHTML = calculateLast();

}
function set1(){

	calculate();
	$("result").innerHTML = calculate();
}

function set2(){
	calculateNext();
	$("result1").innerHTML =calculateNext() ;

}

function set3(){
	calculateFirst();
	$("result2").innerHTML = calculateFirst();
}








function calculate(qty= document.getElementById("qty0").value,value=document.getElementById("value0").value)
{
	//var qty = document.getElementById("qty0").value;
	//var value = document.getElementById("value0").value;

	var result =  value * qty;
		
	//document.getElementById("result").innerHTML = result;	
	return result;
}

function calculateNext(qty=document.getElementById("qty1").value,value = document.getElementById("value1").value)
{
	//var qty = document.getElementById("qty1").value;
	//var value = document.getElementById("value1").value;
	
	
	var result1 =  value * qty;
		
	//document.getElementById("result1").innerHTML = result1;	
	return result1;
}

function calculateFirst(qty = document.getElementById("qty2").value,value = document.getElementById("value2").value)
{
//	var qty = document.getElementById("qty2").value;
//	var value = document.getElementById("value2").value;
	
	var result2=  value * qty;
		
	//document.getElementById("result2").innerHTML = result2;
	return result2;
}

function calculateLast()
{
	
	
    var total=  calculate()+calculateNext()+calculateFirst();
		
	//document.getElementById("total").innerHTML = total;
	return total;
}