
function renderAddEventModal() {
    var element = document.getElementById('addEventModalContainer');
    //nullcheck
    if(typeof element !== 'undefined' && element !== null)
        element.style.display = 'block';
}
// ----------------------------------> REMOVE THIS ONCE IT WORKS JAMES <----------------------------------
renderAddEventModal()
// ----------------------------------> REMOVE THIS ONCE IT WORKS JAMES <----------------------------------
function removeAddEventModal() {
    var element = document.getElementById('addEventModalContainer');
    //nullcheck
    if(typeof element !== 'undefined' && element !== null)
    element.style.display = 'none';
}

function renderEventInfoModal() {
    var element = document.getElementById('eventInfoModalContainer');
    if(typeof element !== 'undefined' && element !== null){
        var target = this.id.match(/^\d+|\d+\b|\d+(?=\w)/g);
        element.eventTarget = target;
        element.style.display = 'block'
    }
}
// ----------------------------------> REMOVE THIS ONCE IT WORKS JAMES <----------------------------------
renderEventInfoModal()
// ----------------------------------> REMOVE THIS ONCE IT WORKS JAMES <---------------------------------

function removeEventInfoModal() {
    var element = document.getElementById('eventInfoModalContainer');
    //nullcheck
    if (typeof element !== 'undefined' && element !== null)
        element.style.display = 'none'
}