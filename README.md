# Problem: 
You have over a million rows of data. You need to display this data on a web page along with a search field. Update search results with each character entered by the user. Make sure to call out any assumptions and / or limitations in your solution.

# Installation
After cloning this repository, `npm install` then `npm run start` to run the app. The app should run on localhost:3000
# Discussion 

This code was completed in approximately 60 minutes. First, a file of mock data was created, consisting of an array of size 1000. Every line of mock data is of the format "mockData" + "&gt;an integer&lt;" Next, a search form was written. This form simply updates React state as the user inputs a value into the search field. Once the search value is entered, the data is displayed. The JavaScript 'filter()' function is used to filter the data array in order to only display data that includes text the user has entered. Finally, once the array has been filtered, the JavaScript "map()" function is used to create HTML elements out of the filtered array. The elements are then displayed them on the webpage, using JSX.

There are several improvements that could be made to this code, given more time. The most glaring problem is that the current mock data array is only size 1000. Performing the above functions on an array of size greater than a million would be far too slow. Instead, a different data structure, other than an array, would serve better. For example, searching and filtering JavaScript objects by keys should be much faster, given that objects, unlike arrays, are not ordered and are inherently faster to search through. If initially given an array, it could should be converted to an object. Another solution would be to ultimately use a database that indexes stored data, such as a SQL database. The data in such a database is indexed to specifically speed up searches of large amounts of data.

The second obvious improvement that could be made is to the UI design. Currently it is extremely minimal. UI functionality could serve to do things such as loading in data as the user scrolls down, or separating data into pages. Actual design work could be done as well, to include things such as a title, centering, coloring, shadows, etc.

Overall the basic search and filter functionality is present, but the code falls short of being able to filter millions of rows of data.