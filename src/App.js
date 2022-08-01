import { useEffect, useState } from 'react';
import './App.css';
import { checkboxArray } from './data';

const PREFIX = 'checkbox';

function createCheckboxes() {
    checkboxArray.forEach((element) => {
        let tag = 'li';
        let idName = PREFIX + element.name;
        let children = checkboxArray.filter((el) => element.name == el.parentId);
        if (children.length > 0) {
            tag = 'ul';
        }
        let listItem = document.createElement(tag);
        listItem.setAttribute('id', idName);
        if (tag === 'ul') {
            addExpandButton(listItem);
        }
        listItem.style.display = 'none';
        let inputBox = createInputBox(element);
        let parentName = element.parentId === null ? 'checkbox0' : PREFIX + element.parentId;
        document.getElementById(parentName).append(listItem);
        document.getElementById(idName).append(inputBox);
        let label = document.createElement('label');
        label.setAttribute('for', element.name);
        label.innerHTML = element.label;
        document.getElementById(idName).append(label);
    });
}

function createInputBox(element) {
    let input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('name', `${element.name}`);
    input.setAttribute('value', `${element.name}`);
    input.addEventListener('click', inputClickHandler);
    return input;
}

function addExpandButton(listItem) {
    let span = document.createElement('div');
    span.classList.add('toggle-button');
    span.innerHTML = '+';
    span.addEventListener('click', toggleCollapse);
    listItem.append(span);
}

function inputClickHandler(event) {
    let inputName = event.target.name;
    let currentListId = PREFIX + inputName;
    let checkboxList = document.querySelectorAll(`#${currentListId} input`);

    checkboxList.forEach((checkbox, index) => {
        if (index !== 0) {
            checkbox.checked = checkboxList[0].checked;
            checkbox.indeterminate = false;
        }
    });
    setParentCheckboxState(currentListId);
    event.stopPropagation();
}

function toggleCollapse(event) {
    let children = event.currentTarget.parentElement.children;
    for (let child of children) {
        if (child.tagName == 'LI' || child.tagName == 'UL') {
            if (child.style.display == 'none') {
                child.style.display = child.tagName == 'LI' ? 'flex' : 'inherit';
            } else {
                child.style.display = 'none';
            }
        }
    }
    if (event.currentTarget.innerHTML === '-') {
        event.currentTarget.innerHTML = '+';
    } else {
        event.currentTarget.innerHTML = '-';
    }
}

function setParentCheckboxState(currentListId) {
    if (currentListId == 'checkbox0') return;
    let parent = document.getElementById(currentListId)?.parentElement;
    let totalInputCount = document.querySelectorAll(`#${parent?.id} > ul > input , #${parent?.id} > li > input`).length;
    let selectedInputCount = document.querySelectorAll(
        `#${parent.id} > ul > input[type=checkbox]:checked , #${parent?.id} > li > input[type=checkbox]:checked`
    ).length;
    let parentInput = document.querySelectorAll(`#${parent?.id} input`)[0];
    if (selectedInputCount == totalInputCount && selectedInputCount !== 0 && parentInput) {
        parentInput.checked = true;
        parentInput.indeterminate = false;
    } else if (selectedInputCount > 0 && parentInput) {
        parentInput.checked = false;
        parentInput.indeterminate = true;
    } else if (parentInput) {
        parentInput.checked = false;
        parentInput.indeterminate = false;
    }
    setParentCheckboxState(parent?.id);
}

function App() {
    useEffect(() => {
        createCheckboxes();
    }, []);
    return (
        <div className='App'>
            <form>
                <ul id='checkbox0' onClick={inputClickHandler}>
                    <div class='toggle-button' onClick={toggleCollapse}>
                        +
                    </div>
                    <input type='checkbox' name='0' value='0' />
                    <label for='0'>Sports</label>
                </ul>
            </form>
        </div>
    );
}

export default App;
