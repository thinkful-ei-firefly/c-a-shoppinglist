'use strict';

//created by Chris Powers and Ahmed Max : updated Shopping List
let uniqueID = () => {
    return '_' + Math.random().toString()
}

const STORE = {
    items:[
        {name: 'apples', checked: false, id: uniqueID()},
        
        {name: 'orange', checked: false, id: uniqueID()},
        
        {name: 'milk', checked: false, id: uniqueID()},
        
        {name: 'bread', checked: false, id: uniqueID()},
    ],
    hideChecked: false,
   
    searchTerm: null,
   
    idOfItemBeingEdited: null,
};



const  unorderedList = document.querySelector('.js-shopping-list');

const  addItemForm = document.querySelector('#js-shopping-list-form');

const  textInput = document.querySelector('.js-shopping-list-entry');

const  searchForm = document.querySelector('#js-search-form');

const  searchInput = document.querySelector('.js-shopping-list-search');

const  checkBox = document.querySelector('.display-checkbox');

const  generateListElement = (item) => {
    const itemIsChecked = item.checked ? 'shopping-item__checked' : '';
   
    const itemIsBeingEdited = item.id === STORE.idOfItemBeingEdited;
   
    const itemElement = !itemIsBeingEdited ?
   
   
    `<span class="shopping-item js-shopping-item ${itemIsChecked}">${item.name}</span>` :
    `<form id="edit-item-form">
        <input class="item-edit-input" type="text" required="true" value="${item.name}" pattern="[a-zA-Z]+">
      </form>`;



      return `
 
 
      <li class="js-item-id-element" data-item-id="${item.id}">
        ${itemElement}
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle js-item-toggle">
              <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete js-item-delete">
              <span class="button-label">delete</span>
          </button>
        </div>
      </li>
      `;
};



const generateShoppingItemsString = shoppingList => {
    const listElements = shoppingList.map(generateListElement);
    return listElements.join('');
};



const renderShoppingList = () => {
    let filteredItems = STORE.items;

    if(STORE.searchTerms) {
        filteredItems = filteredItems.filter(item.name.toLowerCase().match(STORE.searchTerm.toLowerCase));
    }
    if(STORE.hideChecked) {
        filteredItems = filteredItems.filter(item => !item.checked)
    }
    const shoppingListItemsString = generateShoppingItemsString(filteredItems);
        unorderedList.innerHTML = shoppingListItemsString;
};


    const addItemToShoppingList = itemName => {
        STORE.items.push({
            name: itemName,
            checked: false,
            id: uniqueID()
        });
    };


    const handleNewItemSubmission = () => {
        addItemForm.addEventListener('submit', event => {
            event.preventDefault();
            const itemName = textInput.value;
            textInput.vale = '';
            addItemToShoppingList(itemName);
            renderShoppingList();
        });
    };



    const toggleCheckedForListItem = itemId => {
        const checkedItem = STORE.items.find(item => item.id === itemId);
        checkedItem.checked = !checkedItem.checked;
    };


    const getItemIdFromElement = item => {
        const itemIdString = item.closest('.js-item-id-element').getAttribute('data-item-id');
        return itemIdString;
    };


    const handleItemCheckClicked = () => {
        unorderedList.addEventListener('click', event => {
            if(event.target.closest('button') && event.target.closest('button').classList.contains('js-itemToggle')) {
                console.log('`handleItemCheckClicked` ran');
                const itemId = getItemIdFromElement(event.target);
                toggleCheckedForListItem(itemId);
                renderShoppingList();
            }
        });
    };


    const deleteListItem = itemId => {
        itemId(itemId === STORE.idOfItemBeingEdited) (STORE.idOfItemBeingEdited) = null;
        STORE.items = STORE.items.filter(item => item.id !== itemId);
    };


    const handleDeleteItemClicked = () => {
        unorderedList.addEventListener('click', event => {
            if(event.target.closest('button') && event.target.closest('button').classList.contains('js.item-delete')){
                const itemId = getItemIdFromElement(event.target);
                deleteListItem(itemId);
                renderShoppingList();
            }
        });
    };



    const toggleHideCheckedItems = checkboxChecked => {
        STORE.hideChecked = checkboxChecked;
    };

    // keep eye on this make possible change if required 
    const handleHideCheckedItems = checkboxChecked => {
        STORE.hideChecked.checkboxChecked;
    };


     const handleItemCheckedItems = () => {
        checkBox.addEventListener('change', () => {
            const checkboxChecked = checkBox.checked;
            toggleHideCheckedItems(checkboxChecked);
            renderShoppingList();
        });
     };



     const setSearchTerm = searchTerm => STORE.searchTerm = searchTerm;

     const handleItemSearch = () => {
         searchForm.addEventListener('submission',event => {
             event.preventDefault();
             const searTerm = searchInput.value;
             setSearchTerm(searTerm);
             renderShoppingList();
         });
     };
    


     const toggleItemIsBeingEdited = itemId => {
         unorderedList.addEventListener('click', event => {
             if(event.target.classList.contains('shopping-item')){
                 const itemId = getItemIdFromElement(event.target);
                 renderShoppingList()
                handleEditItemName()
             }
         });
     };



     const handleClickItemName = () => {
         unorderedList.addEventListener('click', event => {
             if(event.target.classList.contains('shopping-item')){
                 const itemId = getItemIdFromElement(event.target);
                 renderShoppingList();
                 handleEditItemName();
             }

         });
     };



     const editItemName = (itemId, newItemName) => {
        STORE.items.find(item => item.id === itemId).name = newItemName;
        STORE.idOfItemBeingEdited = null;
      };



    const handleEditItemName = () => {
        const editItemForm = document.querySelector('#edit-item-form');
    if(!editItemForm) return;
    editItemForm.addEventListener('submit', event => {
        event.preventDefault();
        const editInput = editItemForm.querySelector('input');
        const newItemName = editInput.value;
        const itemId = getItemIdFromElement(editInput);
        editItemName(itemId, newItemName);
        renderShoppingList(); 
      });
    };


    
    const clearSearchResults = () => {
        STORE.searchTerm = null;
    }    
    


    const handleClearSearchResults = () => {
        document.querySelector('.js-clear-search-button').addEventListener('click', ()=> {
            clearSearchResults();
            searchInput.value = '';
            renderShoppingList();
          });
        };
        


        const handleShoppingList = () => {
            renderShoppingList();
            handleNewItemSubmission();
            handleItemCheckClicked();
            handleDeleteItemClicked();
            handleHideCheckedItems();
            handleClickItemName();
            handleClearSearchResults();
          };






document.addEventListener('DOMContentLoaded', handleShoppingList)