
function renderAddEventModal() {
    var element = document.getElementById('addEventModalContainer');
    element.innerHTML = `
        <section id="overlay">
            <container id="modal_container" class="open-modal">
                <div>
                    <h1>New Event</h1>

                    <p>Which Family?</p>
                    <button id="event_name1" class="modal-input1" >Johnson  </button>
                    <button id="event_name2" class="modal-input2" > Smith </button>
                    <div>Title:</div>
                    <input id="event_title" class="modal-input" type="text" placeholder="Title">
                    <br>
                    <p>Date:</p>
                    <input id="event_date" class="modal-input" type="text" placeholder="Date">
                        <br>
                    <p>Category:</p>
                    <input id="event_category" class="modal-input" type="text" placeholder="Category">
                        <br>
                    <p>Location:</p>
                    <input id="event_location" class="modal-input" type="text" placeholder="Location">
                        <br>

                    <button id="create" onclick="saveSessionEvent();removeAddEventModal()">Create</button>
                    <button id="cancel" onclick="removeAddEventModal()">Cancel</button>
                </div>
            </container>
        </section>
    `;
}

function removeAddEventModal() {
    var element = document.getElementById('overlay');
    //nullcheck
    if(typeof element !== 'undefined' && element !== null)
        element.remove();
}

function renderEventInfoModal() {
    var element = document.getElementById('eventInfoModalContainer');
    var target = this.id.match(/^\d+|\d+\b|\d+(?=\w)/g);
    element.innerHTML = `
        <section id="overlay_2">
            <container id="event_modal_container" class="open-info-modal">
            <div>

                <h1>Event: Birthday Party</h1>

                <div id="maps_container" class="modal-pane">
                <!-- Will Contain Appended Content -->
                This div will contain appended [MAP] API data from JS
                </div>

                <div id="weather_container" class="modal-pane">
                <!-- Will Contain Appended Content -->
                This div will contain appended [WEATHER] API data from JS
                </div>

                <button id="edit">Edit</button>
                <button id="cancel-2" onclick="removeEventInfoModal()">Cancel</button>
                <button id="delete-event" onclick="removeEventButton()">Delete</button>

            </div>
            </container>
        </section>
    `;
    element.eventTarget = target;
    //identify which event this is

}

function removeEventInfoModal() {
    var element = document.getElementById('overlay_2');
    //nullcheck
    if (typeof element !== 'undefined' && element !== null)
        element.remove();
}