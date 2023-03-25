function checkApiAndNotify() {
  chrome.storage.sync.get(['apiUrl', 'interval'], items => {
    const API_URL = items.apiUrl || '';

    if (!API_URL) {
      console.error('API URL not configured.');
      return;
    }

    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        if (data === true) {
          chrome.notifications.create('notification', {
            type: 'basic',
            iconUrl: 'icon.png',
            title: 'API Notification',
            message: 'The API returned true.'
          });
        }
      })
      .catch(error => console.error('Error fetching API:', error));
  });
}

chrome.storage.sync.get('interval', items => {
  const interval = items.interval || 1;
  chrome.alarms.create('apiCheck', {
    periodInMinutes: interval
  });
});


chrome.alarms.onAlarm.addListener(alarm => {
  if (alarm.name === 'apiCheck') {
    checkApiAndNotify();
  }
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get('interval', items => {
    const interval = items.interval || 1;
    chrome.alarms.create('apiCheck', {
      periodInMinutes: interval
    });
  });
});