var bkmarkName = document.getElementById("bookmarkName");
var bkmarkURL = document.getElementById("bookmarkURL");
// var bookmarkContainer;
if (localStorage.getItem("bkMarkList") == null) {
    var bookmarkContainer = [];
}
else {
    bookmarkContainer = JSON.parse(localStorage.getItem("bkMarkList"));
    displayAllBookmarks();
}

function validateInput(bMark) {
    var valid = true;
    if (bMark.name == "") {
        document.getElementById("nameError").style = "display: block !important;";
        valid = false;
    }
    if (bMark.url == "") {
        document.getElementById("urlError").style = "display: block !important;";
        valid = false;
    }
    return valid;
}
function clearInputs() {
    bkmarkName.value = "";
    bkmarkURL.value = "";
}
function addBookmark() {
    var bookmark = {
        name: bkmarkName.value,
        url: bkmarkURL.value
    }

    if (!validateInput(bookmark))
        return;

        document.getElementById("nameError").style = "display: none !important;";
        document.getElementById("urlError").style = "display: none !important;";

    bookmarkContainer.push(bookmark);
    localStorage.setItem("bkMarkList", JSON.stringify(bookmarkContainer));
    clearInputs();
    displayBookmark(bookmark);
}

function displayBookmark(bookmark, index) {
    document.getElementById("bookmarkList").innerHTML += `  <div class="row bookmarkRow   m-3">
    <div class="bookmarkItem col-xl-6 col-lg-7   col-md-8  p-5 d-flex justify-content-between">
        <h3>`+ bookmark.name + `</h3>
      
        <div>
            <a ></a>
            <a target="_blank" href="`+ bookmark.url + `" class="btn btn-primary myBtn mx-2">Visit</a>
            <button onclick="deleteBookmark(`+ index + `)" class="btn btn-danger myBtn mx-2">Delete</button>
        </div>
    </div>
</div>`;

}

function displayAllBookmarks() {
    var cartoona = "";
    document.getElementById("bookmarkList").innerHTML = "";
    for (var i = 0; i < bookmarkContainer.length; i++) {
        displayBookmark(bookmarkContainer[i], i);
    }

}

function deleteBookmark(index) {
    alert("index is"+index)
    bookmarkContainer.splice(index, 1);
    localStorage.setItem("bkMarkList", JSON.stringify(bookmarkContainer));
    displayAllBookmarks();
}

