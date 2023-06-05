'use strict';

const alertText = alert('Если вы хотите:\n внести текст в список - наберите его,\n удалить последний элемент - введите "del",\n очистить список - введите "clear", \n выйти - введите "exit" или нажмету Esc');

let listItems = document.createElement('ul');
document.body.append(listItems);

const stringItem = prompt('Введите пункт списка');

const createList = (item) => {
    if (item === null || item === 'exit') {
        console.log(`The adding of items is stoped!`);
        return
    } else {
        if (item === 'clear') {
            listItems.innerHTML = '';
            console.log(`Очищен список`);
            document.body.append(listItems);
        } else
            if (item === 'del') {
                listItems.removeChild(listItems.lastChild);
                console.log(`Удален элемент ${listItems.lastChild.textContent}`);
                document.body.append(listItems);
            }
            else
                if (item.trim() !== '') {
                    let currentString = document.createElement('li');
                    currentString.textContent = item;
                    console.log(`Добавлен элемент ${item}`);
                    listItems.append(currentString);
                    document.body.append(listItems);
                }
    }
    const stringItem = prompt('Введите следующий пункт списка');
    createList(stringItem);
}

createList(stringItem);

