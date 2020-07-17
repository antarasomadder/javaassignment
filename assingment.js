//feetToMile

function feetToMile(feet) {
    if (feet < 0){
        return 'Distrance can not be negative'
    }
    else{
    var mile = feet / 5280;
    return mile;
    }
}

var result = feetToMile(52800);
console.log ('Inputed Feet is convert into',result,'miles.');



//woodCalculatior

function woodCalclator(chair, table, bed) {
    var result = (chair *1 + table*3 + bed*5);
    return (result);
    }


var total = woodCalclator(5, 0, 8);
console.log('You need', total ,'quibic feet wood.');


//brickCalculator

function brickCalculator(floor) {
    if (floor > 20)
    {
        var first = floor - 20;
        var one = (first * 10 * 1000) + (10 * 12 * 1000) + (10 * 15 * 1000);
        return one;
        
    }
  
    if (floor >10 && floor <=20)
 {   
    var second = floor - 10 ;
     var two = (second * 12 * 1000) + (10 * 15 * 1000);
     return two;
}

if (floor >0 && floor <=10)
{   
  
    var three = (floor * 15 * 1000);
    return three;
}

     }


var total = brickCalculator(67);
console.log('You need',total,'Bricks to complete the building.');


//tinyFriend

function tinyFriend(friend){
    var min = friend[0];

    for (var i = 0; i< friend.length; i++){
        var element = friend[i];
        if (element.length < min.length) 
        min = element;
}
return min;
}
var mini = tinyFriend (['Abul', 'Babulal', 'saikat','Antara', 'oni', 'additiya','Barnil']);
console.log ('Name of our Tiny Friend is',mini,'.');
