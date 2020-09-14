
function main(){
    handleFormDisplay();
    cancelBmark();
    watchForm();
    getMyBookMark();
  }

function getMyBookMark () {
    api.getBookmarks()
		.then((bookmarks) => {
			bookmarks.forEach((bookmark) => store.addBookmark(bookmark));
			bookmarkItems.render();
		});

	bookmarkItems.bindEventListeners();
  }

  function main(){
    handleFormDisplay();
    cancelBmark();
    watchForm();
    getMyBookMark();
    bindEventListeners();
  }
function bindEventListeners(){
    displayHeader();
}

function displayHeader(){
return `
<div class='container'>
        <header>
            <h1>My Book Mark List</h1>
            </header>
            <p id= "js-error-message" class= "error-message"></p>  
            <section id= "results" class= "hidden">
            <h3>Book List</h3>
                    <ul class= "results-list">
                        <div class="list-container">
                            <li class="bookmark-element" bookmark-id="">
                               
                                <div class="rating"></div>
                            </li>
                        </div>
                    </ul>
            </section><br>
            <button class= "newForm" type="submit">New</button>
            <select class= "filter-rating" checked=""><br>
                <option value="0" disabled selected hidden>Filter by Rating</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
                <option value="1">0 Stars</option>
            </select>
        </div>
`
   } 

  function handleFormDisplay() {
    $(".newForm").click(function (e) {
        $(".createBmark").show();
    })
  }

function getMyBookMark(){

}
  function cancelBmark(){
    $(".cancel").click(function (e) {
        $(".createBmark").hide();
       // 

    })
  }

 function watchForm() {
    $('.createBmark').submit(event => {
        event.preventDefault();
        const newBmark = {  
        title: $('#title').val(),
        description: $('#description').val(),
        url: $('#url').val(),
        rating: $('input[name="rating"]:checked').val()
        }
        }
    )}

$(watchForm);
$(main);
  
