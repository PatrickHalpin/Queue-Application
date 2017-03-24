# Queue-Application
Sample queue application made using javascript, html and css.

For this test I decided to use javascript as although I am comfortable using many different programming languages I feel that I am strongest using javascript and it was also one of the languages you recommended using.

This application is made using the bootstrap 3 css framework which added to the design of the buttons and tables but custom styling was also used for the layout and overall design of the application. A good system was also used for the layout of the application which results in it being mobile responsive.

When the application runs the user is to select a service and wether or not they are a citizen, organisation or wish to remain anonymous by clicking the appropriate button depending on which button they click a different input field will be shown for each, citizens will have to give a title, first name and last name, organisations will just give a single name and anonymous will have none. This was done by having each button call a function which will set a variable to either “Citizen”,”Organisation” or “Anonymous” and then change the dom elements of the page to suit that selection.

After the user has entered all their information they submit their data by clicking on the submit button this calls a function called “submit()”. This function starts by obtaining the current time, then checks each of the radio buttons to see if they are checked or not if they are a variable called service is set to the value of the checked box giving us the service the user initially selected. Next 3 if statements checked wether the user had selected “Citizen”,”Organisation” or “Anonymous” this means that the right data will be passed into the queue table. The value from the input field or fields is saved in a variable called name.

A function called “create()” is then called and passed all the relative info such as the type,name,service and time and this function create a new table line and adds it to the existing table on the web page but uses the variables obtained in the “submit()” function to fill in the information.

