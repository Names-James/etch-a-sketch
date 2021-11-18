# etch-a-sketch
I felt really happy with this challenge. The directions stated that it should be difficult, and I was pretty proud when my first instinct to create the grid using nested loops worked. I assigned the class 'space' to each box as well as a starting background color. Both of these gave me something to target with my code immediately after the grids creation.

My biggest challenges were learning the basic css-grid syntax, saving RGB values to an array, and using the Math function to generate the types of values I wanted. Google solved these quickly, however I should practice working with these more.

Design choices:
--(script 48-54) I choise to tackle grayscale first of the optional features. I already had the idea to save the rgb values into an array, edit the values, and join them back together. I wanted to check if the cell was a shade of gray, darken the shade, or turn it a shade of gray that was not white.
--(script 14-19) I used the variable 'style' to make the decision of which effect to apply to a space that is moused-over.


What I learned:
--(script 78-87) Shorthand for applying array methods at the same time as declaring the array.
--(script 86) Using .map to return a new array with post-fuction/method array values.
--(script 58-60) Removing the background color with the erase function would break the space, and not allow any following effects to be applied.
--(script 35, 59) Assigning the value of 'white' to the background would break the functions that required rgb values to manipulate.
--(script 29) In order to create a new grid, I had to destroy the old one or the spaces would remain.