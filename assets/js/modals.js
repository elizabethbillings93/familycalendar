function renderModal() {
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
                    <button id="cancel" onclick="removeModal()">Cancel</button>
                </div>
            </container>
        </section>
    `;
}

function removeModal() {
    var element = document.getElementById('overlay');
    element.remove();
}