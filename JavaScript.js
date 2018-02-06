

 var SelectDrink = function () {
     var Drink = document.querySelector("DrinkType").value;
    document.querySelector("#SelectedDrink").innerHTML = "You Selected: " + Drink;

     // document.queryselector("#SelectedDrink").innerhtml = "You selected:" + Drink;

}

var prices = [[1, 2.5, 4], [2, 3, 3.5], [6, 8, 10], [5, 9, 12]] 

GetDrinkInfo = function () {
        
    
    
}
window.onload = function ()  {

document.querySelector("#SubmitButton").onclick = SelectDrink;
}