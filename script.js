// ----------------- Part 1 ----------------- //
// Create a function called includesFromStrInArray that takes in two parameters:
// - array (array)
// - value (string)
// The function should loop through the array parameter and check if any of the items in the array parameter includes the value parameter.
// If any of the items in the array parameter includes the value parameter, the function should return true. Otherwise, the function should return false.
function includesFromStrInArray(array, value){
    return array.includes(value);
   }
   // ...
   // ----------------- Part 2 ----------------- //
   // Create a function called renderLink. It takes a parameter 'link' which is an array containing information about a link.
   // The function generates HTML elements (an anchor, image, heading, and button), and modifies their properties to display a link on the page.
   // ...
   // Inside the function, extract the title, url, and color from the passed 'link' array
   // ...
   function renderLink(link){
       let title = link[0];
       let url = link[1];
       let color = link[3];
   // Create an anchor element and assign it to the variable 'linkEl'
   // ...
   // Similarly, create image, heading and button elements
   // ...
       let linkEl = document.createElement("a");
       let image = document.createElement("img");
       let heading = document.createElement("h2");
       let button = document.createElement("button");   
   // ----------------- Part 3 ----------------- //
   // Add CSS classes to the anchor element, set its background color, href attribute, and target attribute.
   // ...
   linkEl.style.backgroundColor = color;
   linkEl.classList.add("gallery-item");
   linkEl.innerHTML = title;
   linkEl.href = url;
   linkEl.target = "_blank"
   // Set the text content of the heading element to the link's title
   // ...
   heading.innerText = title;
   // Set the source of the image element to a Google service that returns a favicon for the domain in the URL. (https://www.google.com/s2/favicons?domain=www.example.com)
   // Set the alternate text of the image to the link's title and add a CSS class to the image.
   // ...
   image.src = "https://www.google.com/s2/favicons?domain=" + url;
   image.setAttribute("alt", title);
   image.classList.add("gallery-item__img");
   // ----------------- Part 4 ----------------- //
   // Add a CSS class to the delete button, set its text content, and add an event listener to the button.
   // When the button is clicked, it removes itself from the event listeners list, deletes the link from the 'links' array,
   // saves the updated 'links' array to local storage, and re-renders the links.
   // ...
   button.classList.add("gallery-item__delete");
   button.innerHTML = "X";
   button.addEventListener("click", function deleteButton(e){
       e.preventDefault();
       let index = links.indexOf(link);
         if (index !== -1) {
           links.splice(index, 1);
           saveLinksToLocalStorage(links);
           renderLinks(links);
         }
   })
   // Append the image, heading, and delete button as child elements of the anchor element
   // ...
   linkEl.appendChild(image);
   linkEl.appendChild(button);
   // Append the anchor element as a child element of the gallery
   // ...
   let gallery = document.getElementById("gallery");
   gallery.appendChild(linkEl);
   // End of renderLink function
   }
   // ----------------- Part 5 ----------------- //
   // Create a function named filterLinks. It takes two parameters 'links' (an array of links) and 'query' (a search term),
   // and it returns an array of links that match the search term.
   // ...
   function filterLinks(links, query){
   // Convert the search term to lower case and remove white space from both ends
   // ...
   query = document.getElementById("search");
   let lowerCase = query.value.toLowerCase();
   let trim = query.value.trim();
   query.innerHTML = lowerCase + trim;
   // Check if the search term is empty
   // ...
   if (query == ""){
   // Initialize an empty array to hold the selected links
   // ...
   selectedLinks = [];
   return links;
   } else {
   // If the search term is not empty, loop through the 'links' array.
   // If a link's title or tags includes the search term, add the link to the 'selectedLinks' array.
   // ...
   for (let i = 0; document.getElementById("url" + i); i++){
       links[i] = document.getElementByID("url" + i).value;
       selectedLinks.push(links);
       return selectedLinks;
   }
   // If the search term is empty, return the original 'links' array. Otherwise, return the 'selectedLinks' array.
   // ...
   } 
   }
   filterLinks();
   // ----------------- Part 6 ----------------- //
   // Create a function called renderLinks. It takes a parameter 'links' which is an array of links.
   // The function clears the gallery's HTML content and re-renders the links.
   // ...
   function renderLinks(links){
       let gallery = document.getElementById("gallery");
       gallery.innerHTML = "";
       for (i = 0; i < links.length; i++){
         renderLink(links[i]);  
       }
       
   }
   // ----------------- Part 7 ----------------- //
   // Select the element with the id of "gallery" and store it in a variable named gallery
   // Select the element with the id of "search" and store it in a variable named search
   // Call the function getLinksFromLocalStorage() and store the result in a variable named links
   // ...
   let gallery = document.getElementById("gallery");
   let search = document.getElementById("search");
   let links = getLinksFromLocalStorage();
   // Request focus on the search input element. This is to enable the user to start typing immediately.
   // ...
   search.focus();
   // Add an event listener to the search input field that listens for the 'input' event, which is fired whenever the user types into the field.
   // When the event is fired, get the search term from the input field, filter the links using the search term, and re-render the filtered links.
   // ...
   search.addEventListener("input", function eventFired(gallery, links){
   for (i = 0; i < gallery.length; i++){
       a = links[i].getElementsByTagName("a")[0];
       txtValue = a.textContent || a.innerText;
       if (txtValue.toUpperCase().indexOf(filter) > -1) {
           links[i].style.display = "";
         } else {
           links[i].style.display = "none";
         }
   }})
   // Call the renderLinks function to render all the links when the page loads.
   // ...
   renderLinks(links);
   // ----------------- Part 8 ----------------- //
   // Add a click event listener to the "add-button" element. When clicked, it displays a form modal.
   // ...
   let formAddButton = document.getElementById("add-button");
   let addedForm = document.getElementById("form-modal");
   formAddButton.addEventListener("click", function showForm(){
       addedForm.style.display = "block";
   })
   // Add a click event listener to the "form-close-button" element. When clicked, it hides the form modal.
   // ...
   let formCloseButton = document.getElementById("form-close-button");
   let hiddenForm = document.getElementById("form-modal");
   formCloseButton.addEventListener("click", function hideForm(){
       addedForm.style.display = "none";
   })
   // ----------------- Part 9 ----------------- //
   // Add a submit event listener to the "add-form" element.
   // ...
   let form = document.getElementById("form-modal");
   form.addEventListener("submit", function submitForm(event){
   // When submitted, it prevents the form from being submitted in the usual way.
   // ...
   event.preventDefault();
   // Then it gathers the form data, calls the saveNewLink function with the form data, and hides the form modal.
   // ...
   let formInput = document.getElementsByClassName("form-input");
   saveNewLink(formInput);
       addedForm.style.display = "none"
   })
   // ----------------- Part 10 ----------------- //
   // The saveNewLink function takes the name, url, and tags of a new link, and saves the new link to local storage and to the page.
   // ...
   function saveNewLink(){
   // Generate a random color for the new link
   // ...
   let randomColor = Math.floor(Math.random()*16777215).toString(16);
   let color = "#" + randomColor;;
   // Create an array for the new link, including the name, url, tags, and color. The tags are converted to an array and trimmed.
   // ...
   let name = document.getElementById("name");
       let url = document.getElementById("url");
       let tags = document.getElementById("tags");
       let array = [name, url, tags, color];
       let tagsArray = tags.split(",");
       tagsArray.slice();
   // Save the new link to local storage
   // ...
   localStorage.setItem("newLink", array);
   // Render the new link on the page
   // ...
   renderLink();
   }