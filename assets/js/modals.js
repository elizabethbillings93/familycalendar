function renderAddEventModal() {
    var element = document.getElementById('addEventModalContainer');
    element.innerHTML = `
        <section id="overlay">
            <container id="modal_container" class="open-modal">
                <div>
                    <h1>How's your day going to go?</h1>

                    <p>Your name:</p>
                    <input id="event_name" class="modal-input" type="text" placeholder="Your name">
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

                    <button id="create" class="">Create</button>
                    <button id="cancel" onclick="removeAddEventModal()">Cancel</button>
                </div>
            </container>
        </section>
    `;
}
// ----------------------------------> REMOVE THIS ONCE IT WORKS JAMES <----------------------------------
renderAddEventModal()
// ----------------------------------> REMOVE THIS ONCE IT WORKS JAMES <----------------------------------
function removeAddEventModal() {
    var element = document.getElementById('overlay');
    //nullcheck
    if(typeof element !== 'undefined' && element !== null)
        element.remove();
}

function renderEventInfoModal() {
    var element = document.getElementById('eventInfoModalContainer');
    element.innerHTML = `
        <section id="overlay_2">
            <container id="event_modal_container" class="open-info-modal">
            <div>

                <h1>Event: Birthday Party</h1>

                <div id="maps_container" class="modal-pane">
                <!-- Will Contain Appended Content into map id -->
                    <div id="map"></div>
                </div>

                <div id="weather_container" class="modal-pane">
                <h2 id="location_name"></h2>
                <div id="items_container">
                <img id="icon" src="">
                    <p id="temp"></p>
                    <p id="wind"></p>
                    <p id="humidity"></p>
                </div>
                </div>

                <button id="edit">Edit</button>
                <button id="cancel-2" onclick="removeEventInfoModal()">Cancel</button>

            </div>
            </container>
        </section>
    `;
}
// ----------------------------------> REMOVE THIS ONCE IT WORKS JAMES <----------------------------------
renderEventInfoModal()
// ----------------------------------> REMOVE THIS ONCE IT WORKS JAMES <---------------------------------

function removeEventInfoModal() {
    var element = document.getElementById('overlay_2');
    //nullcheck
    if (typeof element !== 'undefined' && element !== null)
        element.remove();
}