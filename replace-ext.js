//Remove all content from parent page
javascript:
var e = opener.document.getElementsByTagName('html')[0];
e.removeChild(opener.document.body);

//POC: Add new content on page

//      Element to change:
//      <h2 id="app-title" class="items-container">Chrome Apps</h2>
var e = opener.document.getElementById('app-title');
e.innerHTML = "POC";
