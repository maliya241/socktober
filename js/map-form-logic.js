function checkProfanity( data ) {
	//https://github.com/ChaseFlorell/jQuery.ProfanityFilter
	// send user a message if filter finds naughty words
}

function checkLocation( address ) {
	var geocoder = new google.maps.Geocoder();
	geocodeAddress(geocoder, address);
}

function storeFormData( data ) {
	// send data to PHP to add to file
	// map-form-processor.php
}

$('#map-form').submit(function(event) {
	// to stop the form from submitting and refreshing page
	event.preventDefault();

	//collection data from form >> https://api.jquery.com/serializeArray/
	var data = [];

	var address = {address: document.getElementById('address').value};
	var orgName = {organization: document.getElementById('organization').value};
	var charityName = {charity: document.getElementById('charity').value};
	var numSocks = {numSocks: document.getElementById('num_socks').value};
	$.extend(data,address, orgName, charityName, numSocks);

	// validate submission
	// -- checkProfanity()
	
	var longLad = checkLocation( document.getElementById('address').value )
	if ( !longLad ) {
		throw new error("Location not found. :(");
	}
	
	// checkLocation success, add long and lad to data object
	$.extend(data,longLad);

	// if ( !storeFormData(data) ) {
	// 	throw new error("Submission wasn't successful :(");
	// }

	// notify user of a successful addition to the map
	organization = document.getElementById('organization').value;
	$("#map-form").notify("Hi, "+ organization +"! Thanks for the submission!", "success");

	// update the map data
});