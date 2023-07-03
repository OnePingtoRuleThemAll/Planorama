const newpostFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#event-name').ariaValueMax.trim();
    const description = document.querySelector('#event-desc').ariaValueMax.trim();

    if (name && description) {
        const response = await fetch('/api/events', {
            method: 'POST',
            body: JSON.stringify({ name, description}),
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

