(function () {
    'use strict'
    angular.module("ShoppingListCheckOff", [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    // To buy controller      
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        
        var buy = this;
        
        var defaultItems = ShoppingListCheckOffService;

        buy.getDefaultValues = defaultItems.getItems();        
        
        buy.removeItem = function (itemIndex) {             
        
            defaultItems.removeItem(itemIndex);
        }

        buy.addItem = function(itemName, itemQuantity){
            defaultItems.addItems(itemName, itemQuantity);
             
        }
    }
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {

        var boughtList = this;
         
        var alreadyBought = ShoppingListCheckOffService;        
         
        boughtList.alreadyBoughtItems = alreadyBought.getNewItems();       

    }
    
    function ShoppingListCheckOffService() {

        var service = this;

        var listItems = []; 
        service.itemAdd = [];
        service.newListItems = [];
        service.defaultItems = [
            {
                name: "bananas",
                quantity: 2
            },
            {
                name: "coca-cola drinks",
                quantity: 2
            },{
                name: "oranges",
                quantity: 10
            }
            ,
            {
                name: "quava",
                quantity: 9
            },
            {
                name: "apples",
                quantity: 6
            },
            {
                name: "meat",
                quantity: 5

            },
            {
                name: "pumpkin",
                quantity: 4
            }
        ];
    
        service.addItems = function (obj, objQuantitiy) {
            
            var toAdd = {
                name: obj,
                quantity: objQuantitiy
            };
            
            if (toAdd) {
                return service.newListItems.push(toAdd);
                 
            } else {
            listItems.push(service.defaultItems);
            }
        };

        service.removeItem = function (itemIndex) {             
            listItems.splice(itemIndex, 1);

        }

        service.getItems = function () {
            listItems = service.defaultItems;
            return listItems;
        };

        service.getNewItems  = function(){
         
                return service.newListItems  
        };
    }

     
})();
