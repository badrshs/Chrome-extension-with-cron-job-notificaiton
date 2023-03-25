function loadSettings() {
  chrome.storage.sync.get(['apiUrl', 'interval'], items => {
    document.getElementById('api-url').value = items.apiUrl || '';
    document.getElementById('interval').value = items.interval || 1;
  });
}

document.addEventListener('DOMContentLoaded', loadSettings);

document.getElementById('save-btn').addEventListener('click', () => {
  const apiUrl = document.getElementById('api-url').value;
  const interval = parseInt(document.getElementById('interval').value) || 1;

  chrome.storage.sync.set({ apiUrl, interval }, () => {
    chrome.alarms.clear('apiCheck', () => {
      chrome.alarms.create('apiCheck', {
        periodInMinutes: interval
      });
    });

    alert('Settings saved.');
  });
});