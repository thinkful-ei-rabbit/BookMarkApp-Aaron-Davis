
// Local store object
/*let bookMark = [];
let adding = false;
let error = null;
let filter =  0;

const addBookMark = function (id){
  Object.assign(bookMark,{expanded: false})
  this.bookMark.push(push);
};


// Function to toggle error
function setError(err){
  store.error = (err)
}

function clearError(){
  store.error = null
}

// function to toggle adding mode
function toggleAdding(){
  if (store.adding === false){
    store.adding = true
  } else {
    store.adding = false
  }
}
const deleteBmark= function (id) {
  this.bookMarks.filter(selectedBmark => selectedBmark.id)
}
// Function to set rating value 
function toggleRating(val){
  store.filter = val
}

// Function to add bookmarks to local store
const addToStore = function (bookMarks){
  this.store.bookmarks.push(bookMarks);
}

// Function to delete bookmarks 


// Function to toggle editing mode

// Function to toggle exanded


// Function to find and update data inside the local store
const findAndUpdate = function (id, newData){
  const newBmark = this.findById(id);
  Object.assign(newBmark, newData);
}

export default {
  bookMark,
  adding,
  error,
  filter,
  toggleEdit,
  toggleExpand,
  addBookMark,
  findAndUpdate,
  
};*/

let bookmarks = [];
let error = '';
let adding = false;
let filter = 0;

const findById = function (id) {
	return this.bookmarks.find(currentBookmark => currentBookmark.id === id);
};

const addBookmark = function (bookmark) {
	Object.assign(bookmark, {expanded: false})
	this.bookmarks.push(bookmark);
};

const findAndDelete = function (id) {
	this.bookmarks = this.bookmarks.filter(currentBookmark => currentBookmark.id !== id);
};

const toggleForm = function () {
	this.adding = !this.adding;
};

const findAndUpdate = function (id, newData) {
	const currentBookmark = this.findById(id);
	Object.assign(currentBookmark, newData);
};

const logError = function (error) {
  this.error = error;
};

export default {
	bookmarks,
	error,
	adding,
	filter,
	toggleForm,
	findById,
	addBookmark,
	findAndDelete,
	findAndUpdate,
	logError
};