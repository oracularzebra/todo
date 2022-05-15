# A Simple Todo App

                                index.html

The app uses form for input submission.
There are two buttons below the Add button, which are used to remove the
tasks. The first button called deleteAll us used to empty the list.
The second button called deleteSelected is used to remove the checked items.

Here every li element has three childrens, a input element with checkbox type, a div having a strong as the child element, a button which shows when you hover the li element.

                                style.css
First div after the body element is root with width and height equal to the width and height of the view port. and overflow-y as scroll.

Second div after body is our main div which contains the form, and list of tasks. It's display type is flex. Here some of the css used are box-shadow, border-radius, background-color, margin.

On hovering add button it's background-color changes from red to green, and font color changes from black to white.

All the buttons have border-radius of 5px.

Display type of list is grid, with all the content aligned to center.

List items(li) has display type, flex, with row flex-direction. Here the border-radius is 5px, the font size increases when hovering the li element.

The scale of checkbox increases from 1 to 2 when hovering the li element.

When using on devices with screen width less than 500px the width of main changes from 60vw to 100vw, and border-radius also changes from 40px to 20px.

                            main.js

Here the list items are stored in an array as objects with properties checked, value and id. After every submit the array is stored in localStorage as an object. When reloading the webpage if there is any object existing in the localStorage then it would be retured else an empty array will be returned.

The array retured will be created into li element using the function makeLiElement which takes an object with two properties checked and value. It creates a checkbox with its checked property equal to the checked property of the passed object. And creates a div with strong as a child having innerText equal to the value property of passed object. The function returns the li element.

After that fetchAndSetItems function is called which gives the focus to the input text field on every refresh and appends the li elements provided by the makeLiElement to the list of tasks.

The input form has an eventListener which is executed when we submit the form. After adding the task to the array of tasks with properties checked, value, and id we update the array in the localStorage. 

Every list item has a checkbox which on selected sets the checked property of that object in the array, and stores the updated array in the localStorage.

On clicking the delete button the li element is removed from the list, and from the array of items.

The delete All button empties the array of items and textContent of the list, then saves the empty array to the localStorage.

The delete button in the li element gets the parent node from their it gets the innerText of strong, after finding the matching value in the array of items. It removes it from there and updates the localStorage along with removing that li element from list.