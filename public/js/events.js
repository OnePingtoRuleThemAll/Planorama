const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#event-name').value.trim();
    const body = document.querySelector('#event-desc').value.trim();
    const location = document.querySelector('#ev-loc').value.trim();
    const coordinates = document.querySelector('#loc-coor').value.trim();
    const privacy = document.querySelector('#is-priv').value.trim();
    const date = document.querySelector('#event-date').value.trim();
    const created = document.querySelector('#date-created').value.trim();

    if (name && body && location && coordinates && privacy && date && created) {
        const response = await fetch(`/api/events`, {
        method: 'POST',
        body: JSON.stringify({ name, body, location, coordinates, privacy, date, created }),
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
        console.log(id);
        const response = await fetch(`/api/events/${id}`, {
        method: 'DELETE',
        });
    
        if (response.ok) {
        document.location.reload();
        } else {
        alert('Failed to delete event');
        }
    }
    };


const shareButton = document.querySelector('.share-button');
const shareDialog = document.querySelector('.share-dialog');
const closeButton = document.querySelector('.close-button');

shareButton.addEventListener('click', event => {
  console.log("Share button pressed");
  if (navigator.share) { 
   navigator.share({
      title: 'WebShare API Demo',
      url: 'https://www.yahoo.com'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
    }
});

closeButton.addEventListener('click', event => {
  shareDialog.classList.remove('is-open');
});
document.querySelector('.btn-danger').addEventListener('click', delButtonHandler);
document.querySelector('.new-event-form').addEventListener('submit', newFormHandler);

