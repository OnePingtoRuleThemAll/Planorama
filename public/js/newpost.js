const newpostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#event-title').value.trim();
    const body = document.querySelector('#event-description').value.trim();
    const event_date = document.querySelector('#event-date').value.trim();
    const eventLocation = document.querySelector('#event-location').value.trim();
    const locationCoordinates = document.querySelector('#location-coordinates').value.trim();
    const isPrivate = document.querySelector('#event-privacy').value.trim();
   
   
    
    if (title && body && event_date && eventLocation && locationCoordinates && isPrivate) {
        const response = await fetch('/api/events', {
            method: 'POST',
            body: JSON.stringify({ title, body, event_date, eventLocation, locationCoordinates, isPrivate}),
            headers: {
                'Content-Type': 'application/json',
            }, 
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create event');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/events/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Faile to delete event');
        }
        }
    };

document
    .querySelector('.new-event-form')
    .addEventListener('submit', newpostFormHandler);

document
    .querySelector('.event-list')
    .addEventListener('click', delButtonHandler);

