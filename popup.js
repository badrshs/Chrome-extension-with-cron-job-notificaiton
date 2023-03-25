function loadSettings() {
  chrome.storage.sync.get(['apiUrl', 'interval'], items => {
    document.getElementById('api-url').value = items.apiUrl || '';
    document.getElementById('interval').value = items.interval || 1;
  });
}

document.addEventListener('DOMContentLoaded', loadSettings);

document.getElementById('save-btn').addEventListener('click', event => {
  event.preventDefault();

  const apiUrl = document.getElementById('api-url').value;
  const interval = parseInt(document.getElementById('interval').value) || 1;

  chrome.storage.sync.set({ apiUrl, interval }, () => {
    chrome.alarms.clear('apiCheck', () => {
      chrome.alarms.create('apiCheck', {
        periodInMinutes: interval
      });
    });

    Swal.fire({
      icon: 'success',
      title: 'Settings saved',
      showConfirmButton: false,
	  width: '200px', // Adjust the width of the SweetAlert2 popup,
      timer: 1500,
	  customClass: {
        title: 'smaller-font' // Add a custom class to the title
      }
    });
  });
});