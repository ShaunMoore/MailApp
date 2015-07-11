// Get Mail class object
var mail = new Mail();
// Get inbox mail by default on page load 
mail.getMail();

// Loop through and get click event from specific mail folder - then display appropriate emails
(function() {
	// find elements with the class name get-mail
    var elements = document.getElementsByClassName('get-mail');
    // initiate loop
    for( i = 0; i < elements.length; i++) {
        (function(i) {
        	// handle click event
            elements[i].onclick = function(event) {
            	// prevent the anchor from doing what it's supposed to
            	event.preventDefault;
            	// get the appropriate mail based on the folder clicked - data-key="" attribute
                mail.getMail(this.getAttribute('data-key'));
            };
        })(i);
    }
})();