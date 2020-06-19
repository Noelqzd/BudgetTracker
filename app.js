//Budget controller
let budgetController = (function () {

    //some code

})();

//UI Controller
let UIController = (function(){

    //code later

})();


//Global App Controller
let controller = (function(budgetCtrl, UICtrl){
    
let ctrlAddItem = function(){
 // 1.- Get the field input data

       //2.- Add the item to budget controller

       //3.- Add the item to user interface

       //4.- Calculate Budget

       //5.- Display the budget
       console.log('it works');
}

document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

document.addEventListener('keypress', function(event) {

    if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
    }

});

})(budgetController, UIController);


