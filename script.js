const STORE = [
    {name: "Apples", checked: false},
    {name: "Coconut", checked: false},
    {name: "Coconut", checked: false},
    {name: "Hamsters", checked: false},
    {name: "Magazines", checked: false},
    {name: "Broccoli", checked: false},
]

function generateItemElement(item, itemIndex, template) {
    return `
        <li class="js-item-index-element" data-item-index="${itemIndex}">
            <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item_checked" : ''}">${item.name}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle js-item-toggle">
                    <span class="butt-label>Submit</span>
                </button>
            </div>
        </li>`;
    }

    function generateItemsString(shoppingList) {
        console.log("Generate Shopping List Element");

        const items = shoppingList.map((item, index) => generateItemElement(item, index));

        return items.join("");
    }

    function renderShoppingList() {
        console.log('`renderShoppingList` ran');
        const shoppingListItemsString = generateShoppingItemsString(STORE);

        $('.js-shopping-list').html(shoppingListItemsString);
    }

    function addItemToShoppingList(itemName) {
        console.log(`Adding "${itemName}" to shopping list`);
        STORE.push( {name: itemName, checked: false} );
    }

    function handleNewItemSubmit() {
        $('#js-shopping-list-form').submit(function(event) {
            event.preventDefault();
            console.log('`handleNewItemSubmit` ran');
            const newItemName = $('.js-shopping-list-entry').val();
            $('.js-shopping-list-entry')
        }
    }