const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;
  let item;

  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);

    // TODO láta hluti í _items virka
    
    for(item of items.querySelectorAll('.item')) {
    const checkbox = item.querySelector('.item__checkbox');
    const text = item.querySelector('.item__text');
    const button = item.querySelector('.item__button');

    checkbox.addEventListener('click', finish);
    text.addEventListener('click', edit);
    button.addEventListener('click', deleteItem);
    }
    
  }

  function formHandler(e) {
    e.preventDefault();

    const input = e.target.querySelector('.form__input');

    if(input.value.trim().length > 0) {
      add(input.value.trim());
    }

    input.value = '';

  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    const parentnode = e.target.parentNode;
    parentnode.classList.toggle('item--done');

  }

  // event handler fyrir það að breyta færslu
  function edit(e) {

    const parentnode = e.target.parentNode;

    parentnode.removeChild(e.target);

    const input = el('input', 'item__edit');
    input.setAttribute('type', 'text');
    input.value = e.target.textContent;
    input.addEventListener('keydown', commit);

    input.focus();

    const button = parentnode.querySelector('.item__button');
    parentnode.insertBefore(input, button);

  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {

    if(e.keyCode == ENTER_KEYCODE) {
      e.target.removeEventListener('keydown', commit);
      const parentnode = e.target.parentNode;
      parentnode.removeChild(e.target);

      const text = el('span', 'item__text', edit);
      text.appendChild(document.createTextNode(e.target.value));

      const button = parentnode.querySelector('.item__button');
      parentnode.insertBefore(text, button);
    } else {
      return;
    }

  }

  // fall sem sér um að bæta við nýju item
  function add(value) {

    //Fyrirlestur 10 - dæmi Create.html
    const item = el('li', 'item');
    const checkbox = el('input', 'item__checkbox', finish);
    const text = el('span', 'item__text', edit);
    const button = el('button', 'item__button', deleteItem);

    checkbox.setAttribute('type', 'checkbox');
    text.appendChild(document.createTextNode(value));
    button.appendChild(document.createTextNode('Eyða'));

    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(button);
    items.appendChild(item);

  

    
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
    const parentnode = e.target.parentNode;
    const checkbox = parentnode.querySelector('.item__checkbox');
    const text = parentnode.querySelector('.item__text');
    const button = parentnode.querySelector('.item__button');

    checkbox.removeEventListener('click', finish);
    text.removeEventListener('click', edit);
    button.removeEventListener('click', deleteItem);

    parentnode.parentNode.removeChild(parentnode);
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
    const element = document.createElement(type);

    if(className) {
      element.classList.add(className);
    }

    if(clickHandler) {
      element.addEventListener('click', clickHandler);
    }

    return element;

  }

  return {
    init: init
  }
})();
