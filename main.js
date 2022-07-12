// get all dropdowns from the document
const dropdowns = document.querySelectorAll('.dropdown');

// loop through all dropdwon elements

dropdowns.forEach(dropdown => {
    // get inner elements from each dropdown
    const select = dropdown.querySelector('.select')
    const caret = dropdown.querySelector('.caret')
    const menu = dropdown.querySelector('.menu')
    const options = dropdown.querySelector('.menu li')
    const selected = dropdown.querySelector('.selected')
})

// this method allows multiple dropdown on the page to work

// add a click event to the select element
