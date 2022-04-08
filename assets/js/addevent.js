function addEvent(targetDate, text, eventId){
    //figure out where we want to place it
    var elementNumber = targetDate + 5;
    var elementName = 'day-' + elementNumber + '-event-pane';
    var element = document.getElementById(elementName);

    //create the element and give it the correct classes and a unique id
    var newEvent = document.createElement('div');
    newEvent.id = 'day-' + elementNumber + '-event-' + eventId;
    newEvent.classList.add('calendar-event');
    newEvent.textContent = text;
    //make element clickable, open info modal
    newEvent.addEventListener("click", renderEventInfoModal);
    newEvent.dataset.eventId = eventId;
    
    
    element.appendChild(newEvent);
}

function removeEventButton() {
    var modal = document.getElementById('eventInfoModalContainer'); 
    var targets = modal.eventTarget;
    removeEvent(targets[0], targets[1]);
}

function removeEvent(targetDate, eventNumber) {
    var element = document.getElementById('day-' + targetDate + '-event-' + eventNumber);
    var eventCount = JSON.parse(sessionStorage.getItem('eventCount')) - 1;

    //nullcheck
    if(typeof element !== 'undefined' && element !== null){
        element.remove();
        sessionStorage.removeItem('day-'+ targetDate + '-event-' + eventNumber);
        sessionStorage.setItem('eventCount', eventCount);
        removeEventInfoModal();
    }
    else
        console.log('element id supplied \'' + eventNumber + '\' does not correspond to an existing element for the date \'' + targetDate + '\'.');
}

function removeEventRenderOnly(targetDate, eventNumber) {
    var element = document.getElementById('day-' + targetDate + '-event-' + eventNumber);

    //nullcheck
    if(typeof element !== 'undefined' && element !== null){
        element.remove();
        removeEventInfoModal();
    }
    else
        console.log('element id supplied \'' + eventNumber + '\' does not correspond to an existing element for the date \'' + targetDate + '\'.');
}

function saveSessionEvent() {
    var formTitle = document.getElementById('event_title').value;
    var formDate = parseInt(document.getElementById('event_date').value);
    var formLocation = document.getElementById('event_location').value;
    var eventId = Math.trunc(Math.random()*1000000);
    var event = {
        title: formTitle,
        date: formDate,
        location: formLocation,
        id: eventId
    };

    var eventCount = 0;
    //figure out how many events are currently stored
    if (sessionStorage.getItem('eventCount'))
        eventCount = JSON.parse(sessionStorage.getItem('eventCount'));

    //save event obj + increment eventcount
    sessionStorage.setItem('eventCount', JSON.stringify(eventCount+1));
    sessionStorage.setItem('day-' + (formDate+5) + '-event-' + eventId, JSON.stringify(event));
    addEvent(formDate, formTitle, eventId);
}

function getAllSessionEvents() {
    //create array to save objects
    var events = [];
    //get all events from session storage
    for (var key in sessionStorage) {
        if (key.indexOf('day') === 0){
            events.push(JSON.parse(sessionStorage.getItem(key)));
        }
    }
    return events;
}

function getSessionEventById(targetId) {
    var event = {};
    for (var key in sessionStorage) {
        if(key.indexOf('day') === 0 && key.includes(targetId)){
            event = JSON.parse(sessionStorage.getItem(key));
        }
    }
    return event;
}

function renderEventsFromSessionStorage(){
    var events = getAllSessionEvents();
    var eventCount = 0;
    //clear all events
    for (var i = 0; i < events.length; i++){
        removeEventRenderOnly(events[i].date, events[i].id);
        addEvent(events[i].date, events[i].title, events[i].id);
        eventCount++;
    }
    //render all events
    //save event count
    sessionStorage.setItem('eventCount', JSON.stringify(eventCount));
}