var contactsArray = []

function Contact(first, last, phone, street, city, state) {
    this.first = first;
    this.last = last;
    this.phone = phone;
    this.street = street;
    this.city = city;
    this.state = state;
}

function createContact() {
    var c = new Contact($('#firstName').val(), $('#lastName').val(), $('#phone').val(), $('#street').val(), $('#city').val(), $('#state').val());
    contactsArray.push(c);
    console.log('created!');
}

function clearList() {
    $('.contactList ul').children().remove();
}

function populateList() {
    contactsArray.forEach(function(c) {
        var item = $('<li data-id="' + contactsArray.indexOf(c) + '"><a>' + c.first + ' ' + c.last + '</a></li>')
        item.click(function() {
            $('#contactTitle').text(c.first + " " + c.last);
            $('#showFirst').text("First name: " + c.first)
            $('#showLast').text("Last name: " + c.last)
            $('#showPhone').text("Phone number: " + c.phone)
            $('#showAddressTitle').text("Addresses:")
            $('#addressList').append('<li>' + c.street + " " + c.city + ", " + c.state + '</li>')
        })
        $('.contactList ul').append(item)
    })
}

$(document).ready(function() {
    $("#addContact").submit(function() {
        createContact();
        clearList();
        populateList();
        return false;
    })
})
