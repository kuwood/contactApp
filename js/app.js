var contactsArray = []

function Contact(first,last,phone,street,city,state) {
  this.first = first;
  this.last = last;
  this.phone = phone;
  this.street = street;
  this.city = city;
  this.state = state;
}

function createContact() {
  var c = new Contact($('#firstName').val(),$('#lastName').val(),$('#phone').val(),$('#street').val(),$('#city').val(),$('#state').val());
  contactsArray.push(c);
  console.log('created!');
}

function clearList() {
  $('.contactList ul').children().remove();
}

function populateList() {
  contactsArray.forEach(function(c) {
    $('.contactList ul').append('<li><a>' + c.first + ' ' + c.last + '</a></li>')
  })
}


$(document).ready(function() {
  $("#add").click(function() {
    createContact();
    clearList();
    populateList();
  })
})
