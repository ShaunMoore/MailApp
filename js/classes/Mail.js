// Class name
var Mail = function(){};

// The get mail determines the data to be grabbed and then passes this off to another function
Mail.prototype.getMail = function(key){
	// check if the 'key' parameter has not been passed and set to default 'inbox' mail
	if( key == undefined ){
		// set 'key' var to default
		var key = 'inbox';
	}
	// pass the correct to displayMail function below. data from the data.js var data = {} json string
	this.displayMail(data[key]);
}

// Here we get the data, loop through it and display it within the #content div
Mail.prototype.displayMail = function(emails){

	// Get the content element
	var container = document.getElementById('content');

	// Loop through and remove any existing elements from the content div
	while (container.firstChild) {
	    container.removeChild(container.firstChild);
	}

	// Loop through the appropriate email data
	for( i = 0; i < emails.length; i++ ){

		// create 'li' element for each email
		var listItem = document.createElement('li');

		// check if the 'to' field exists. If not show no recipient specified.  
		var toField = ( (emails[i].to) ? '<span>To: '+emails[i].to+'</span>' : '<span>To: No Recipient Specified</span>' );
		// check if the 'from' field exists. If not show From: Me as these specific emails will almost always be drafts or sent.
		var fromField = ( (emails[i].from) ? '<span>From: '+emails[i].from+'</span>' : '<span>From: Me</span>' );

		// Build the 'li' element content with a string and set as the innerHTML of each element
		listItem.innerHTML = '<div class="content-item">'+
							 	'<div class="float-left width-25"><h4 class="bold color-dark-grey">'+fromField+'</h3></div>'+
							 	'<div class="float-left width-50">'+
							 		'<span class="color-dark-grey large-text">'+emails[i].subject+'</span> - '+
								 	'<span class="color-light-grey small-text">'+emails[i].summary+'</span>'+
							 	'</div>'+
							 '</div>';

		// for each loop append a new li item to the #content div
		container.appendChild(listItem);
	}

}
