var dateDropdownField = $('#event_date');
var titleField = $('#event_title');
var locationField = $('#event_location');

function renderAddEventModal() {
    var element = document.getElementById('addEventModalContainer');
    //nullcheck
    if(typeof element !== 'undefined' && element !== null){
        element.style.display = 'block';
        //add dates to selector
        populateDateDropdown();
    }
}

function removeAddEventModal() {
    var element = document.getElementById('addEventModalContainer');
    //nullcheck
    if(typeof element !== 'undefined' && element !== null){
        element.style.display = 'none';
        //make sure other fields are empty
        titleField[0].value = '';
        locationField[0].value='';
    }
}

function populateDateDropdown() {
    dateDropdownField.empty();
    //get the last day, so the number of days in that month
    const days = 30;
    //lets create the days of that month
    for (let d = 1; d <= days; d++) {
      const option = document.createElement("OPTION");
      option.innerHTML = d;
      option.value = d;
      dateDropdownField.append(option);
    }
  }

function renderEventInfoModal() {
    var element = document.getElementById('eventInfoModalContainer');
    var modalTitle = $('#event-info-title');
    modalTitle[0].innerHTML = this.textContent;
    if(typeof element !== 'undefined' && element !== null){
        var target = this.id.match(/^\d+|\d+\b|\d+(?=\w)/g);
        element.eventTarget = target;
        element.style.display = 'block'
    }
    var event = getSessionEventById(target[1]);
    getLatLon(event.location);
}

function removeEventInfoModal() {
    var element = document.getElementById('eventInfoModalContainer');
    //nullcheck
    if (typeof element !== 'undefined' && element !== null)
        element.style.display = 'none'
}