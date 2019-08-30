// populate the array "topics"
var topics = document.querySelectorAll('.list');

// iterate through the array and expand all
for (i = 0; i < topics.length; i++) { 
    topics[i].click();
}

var search_txt = input("Enter the keyword")