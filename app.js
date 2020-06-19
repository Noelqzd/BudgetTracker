//Budget controller
let budgetController = (function () {

    let Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };


})();

//UI Controller
let UIController = (function () {

    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function () {
            return {

                type: document.querySelector(DOMstrings.inputType).value, // Will be inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };

        },

        getDOMstrings: function () {
            return DOMstrings;
        }

    };

})();


//Global App Controller
let controller = (function (budgetCtrl, UICtrl) {

    let setupEventListners = function () {
        let DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }

        });
    };

    let ctrlAddItem = function () {

        // 1.- Get the field input data
        let input = UICtrl.getInput();


        //2.- Add the item to budget controller

        //3.- Add the item to user interface

        //4.- Calculate Budget

        //5.- Display the budget

    };

    return {
        init: function () {
            console.log('Application has started');
            setupEventListners();
        }
    };

})(budgetController, UIController);

controller.init();