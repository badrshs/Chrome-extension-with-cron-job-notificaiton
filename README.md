# API Cron Job Notifier

API Cron Job Notifier is a Chrome extension that periodically checks a specified API and sends a notification if the API returns `true`.

## Features

- Configure API URL and check interval directly from the extension popup
- Receive notifications when the API returns `true`
- Works in the background, no need to keep the extension popup open

## Installation

To install the extension, follow these steps:

1. Download or clone this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the folder containing the extension files.

The extension is now installed and ready to use. Click the extension icon in the Chrome toolbar to configure the API URL and check interval.

## Usage

1. Click the extension icon in the Chrome toolbar to open the popup.
2. Enter the API URL that you want to check periodically. The API should return a JSON value of `true` or `false`.
3. Set the check interval in minutes. The minimum value is 1 minute.
4. Click the "Save" button to save your settings.

The extension will now periodically check the API in the background and display a notification if the API returns `true`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
