// roman calculator engine:
// This roman number calculator convert numbers from 1 to 3999.




var range = function(start, end, step) {
    var range = [];
    var typeofStart = typeof start;
    var typeofEnd = typeof end;

    if (step === 0) {
        throw TypeError("Step cannot be zero.");
    }

    if (typeofStart == "undefined" || typeofEnd == "undefined") {
        throw TypeError("Must pass start and end arguments.");
    } else if (typeofStart != typeofEnd) {
        throw TypeError("Start and end arguments must be of same type.");
    }

    typeof step == "undefined" && (step = 1);

    if (end < start) {
        step = -step;
    }

    if (typeofStart == "number") {

        while (step > 0 ? end >= start : end <= start) {
            range.push(start);
            start += step;
        }

    } else if (typeofStart == "string") {

        if (start.length != 1 || end.length != 1) {
            throw TypeError("Only strings with one character are supported.");
        }

        start = start.charCodeAt(0);
        end = end.charCodeAt(0);

        while (step > 0 ? end >= start : end <= start) {
            range.push(String.fromCharCode(start));
            start += step;
        }

    } else {
        throw TypeError("Only string and number types are supported");
    }

    return range;

}
//---------------------------------------




function  numberseperator(x){
    var disector =[];
    x = x.toString();
    x = x.split("");
    
    var d =1;
    for (var i in x){
    	
        var j = x.length-d;
        var local = x[i];
        if (x[i] !=="0"){
        	if (j>0){
        		for ( k in range(1,j)){
       	        local +="0";
        	}

        	}else {
        		local = local;
            

           }
     
          disector.push(local);

        }
        else{

        }

       
       d +=1;

}

   return disector;

}

//---------------------------------

function romefalling(x){
    var value;
     if (x.length===3){
        if(parseInt(x[0])===9){
               value = "CM"
        }
        else if(parseInt(x[0])>5 ){
            value = "D";
            
            for (var i in range(1,parseInt(x[0])-5)){
                   value +="C";
                   
            }
            
         }
         else if(parseInt(x[0])===5){
            value = "D"
        }
        else if(parseInt(x[0])===4){
            value ="CD";
        }
        else if(parseInt(x[0])>1){
            value ="C";
            for (var i in range(1,parseInt(x[0])-1)){
                   value +="C";
            }

        }
        else if(parseInt(x[0])===1){
            value ="C";
        }
     }
     else if(x.length===2){
        if(parseInt(x[0])===9){
               value = "XC"
        }
        else if(parseInt(x[0])>5 ){
            value = "L";
            
            for (var i in range(1,parseInt(x[0])-5)){
                   value +="X";
                   
            }
            
         }
         else if(parseInt(x[0])===5){
            value = "L"
        }
        else if(parseInt(x[0])===4){
            value ="XL";
        }
        else if(parseInt(x[0])>1){
            value ="X";
            for (var i in range(1,parseInt(x[0])-1)){
                   value +="X";
            }

        }
        else if(parseInt(x[0])===1){
            value ="X";
        }


     }

     else if(x.length===1){

        if(parseInt(x[0])===9){
               value = "IX"
        }
        else if(parseInt(x[0])>5 ){
            value = "V";
            
            for (var i in range(1,parseInt(x[0])-5)){
                   value +="I";
                   
            }
            
         }
         else if(parseInt(x[0])===5){
            value = "V"
        }
        else if(parseInt(x[0])===4){
            value ="IV";
        }
        else if(parseInt(x[0])>1){
            value ="I";
            for (var i in range(1,parseInt(x[0])-1)){
                   value +="I";
            }

        }
        else if(parseInt(x[0])===1){
            value ="I";
        }
     }
     else if(x.length===4){

        if(parseInt(x[0])>1){
            value ="M";
            for (var i in range(1,parseInt(x[0])-1)){
                   value +="M";
            }

        }
        else if(parseInt(x[0])===1){
            value ="M";
        }
      
     }
	return value;
}


//_________________________________________________

function romanCalculator (number){

	number = parseInt(number);
	
   
   if (number>=4000){
   	return "Sorry, this claculator only calculate number from 1 to 3999";
   }
   else if (isNaN(number)){
   	return "Enter some numbers to convert";
   }
   else {

    var newnumber = numberseperator(number);
    var result = [];
    for (var i in newnumber){
        result.push(romefalling(newnumber[i]));
    }
    result = result.join("");
    
    return result;
   }
}

//-----------------------------------------------------------

// script for iteracting with DOM
// this is the calling function when you click the convert button

function convertor(){
    var input = document.getElementById('input1').value;
    var result = romanCalculator(input);
    document.getElementById("val").innerHtml = result;
    document.getElementById("item3").style.display = "display";


}

var convertor =function(){
	
	var input = document.getElementById('input1').value;
    var result = romanCalculator(input);
    
    document.getElementById("val").innerHTML = result;
    document.getElementById("item3").style.display = "block";

}

document.getElementById("button").addEventListener("click", convertor);
