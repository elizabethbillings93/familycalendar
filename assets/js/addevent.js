function addEvent(targetDate, text){
    //figure out where we want to place it
    var elementNumber = targetDate + 5;
    var elementName = 'day-' + elementNumber + '-event-pane';
    var element = document.getElementById(elementName);
    var eventNumber = element.childElementCount + 1;

    //create the element and give it the correct classes and a unique id
    var newEvent = document.createElement('div');
    newEvent.id = 'day-' + elementNumber + '-event-' + eventNumber;
    newEvent.classList.add('calendar-event');
    newEvent.textContent = text;
    //make element clickable, open info modal
    element.addEventListener("click", renderEventInfoModal);
    
    
    element.appendChild(newEvent);
}

function removeEvent(targetDate, eventNumber) {
    var elementNumber = targetDate + 5;
    var element = document.getElementById('day-' + elementNumber + '-event-' + eventNumber);

    //nullcheck
    if(typeof element !== 'undefined' && element !== null){
        element.remove();
    }
    else
        console.log('element id supplied \'' + eventNumber + '\' does not correspond to an existing element for the date \'' + targetDate + '\'.');
}