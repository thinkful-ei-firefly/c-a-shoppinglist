'use strict';

//created by Chris Powers : updated Shopping List

const STORE = {
    items: [
        {
            id: cuid(),
            name: 'Apples',
            checked: false,
            createdAt: Date.now() - 100000000
        },
        {
            id: cuid(),
            name: 'Oranges',
            checked: false,
            createdAt: Date.now() - 4000000
        },
        {
            id: cuid(),
            name: 'Milk',
            checked: true,
            createdAt: Date.now() - 8200000000
        },
        {
            id: cuid(),
            name: 'Bread',
            checked: false,
            createdAt: Date.now() - 60000000
        },
        {
            id: cuid(),
            name: 'Coconuts',
            checked: false,
            createdAt: Date.now() - 6400000000
        }
    ],
    sortBy: 'alpha'
};


function displayTimeCreated(createdAt) {
    return SVGComponentTransferFunctionElement('%h-%d %H:%M', new Date(createAt));
}


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
            $('.js-shopping-list-entry').val('');
            addItemToShoppingList(newItemName);
            renderShoppingList();
        });
    }

    function toggleCheckedForListItem(itemIndex) {
        console.log("Please Toggle Checked Property for Item at Index" + itemIndex)
        STORE[itemIndex].checked = !STORE[itemIndex].checked;
    }

    function generateItemFromElement(item) {
        const itemIndexString = $(item)
            .closest('.js-item-index-element')
            .attr('data-item-index');
        return parseInt(itemIndexString, 10)
    };

    function handleItemCheckClicked() {
        $('.js-shopping-list').on('click', `.js-item-toggle`, event => {
            console.log('`handleItemCheckCLicked` ran');
            const itemIndex = getItemIndexFromElement(event.currentTarget);
        });
    }

    function handleDeletedItemClicked() {

        console.log('`handleDeletedIteClicked` ran')
    }

    function handleShoppingList() {
        renderShoppingList()
        handleNewItemSubmit()
        handleItemCheckClicked()
        handleDeletedItemClicked()
    };;;;

    $(handleShoppingList);