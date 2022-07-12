// get all dropdowns from the document
const dropdowns = document.querySelectorAll('.dropdown');

// loop through all dropdwon elements

dropdowns.forEach(dropdown => {
    // get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    // this method allows multiple dropdown on the page to work

    // add a click event to the select element
    select.addEventListener('mouseover', () => {
        // add clicked select styles to the select element
        select.classList.toggle('select-clicked');
        // add the rotate style to the caret shiit
        caret.classList.toggle('caret-rotate');
        //  open menu
        menu.classList.toggle('menu-open');
    });

    // loop through all option element
    options.forEach(option => {
        option.addEventListener('mouseover', () => {
            // change selected inner text to clicked option inner text
            selected.innerText = option.innerText;
            // add the clicked select styles to the select element
            select.classList.remote('select-clicked');
            // add the rotate style to the caret
            caret.classList.remove('caret-rotate');
            // add the open style to the menu element
            menu.classList.remove('menu-open');
            // remove active class from all option elements
            options.forEach(option => {
                option.classList.remove('active');
            });
            // add active class to the clicked option element
            option.classList.add('active');
        });
    });
});