# WebScreenshot.io Screenshot API

Generate screenshots of web pages using the WebScreenshot.io API. Per

Sign up for an API key and secret at [WebScreenshot.io](https://webscreenshot.io).

## Installation

```
npm install webscreenshot-io
```

## Node.js Usage Example

```js
import Webscreenshot from 'webscreenshot-io';

// API key and secret from webscreenshot.io
const webscreenshot = Webscreenshot(API_KEY, API_SECRET);

// Available options: webscreenshot.io/documentation/options/options/
const options = {
  page: 'google.com',
  height: 600,
  width: 800,
  format: 'jpeg'
}

const imageUrl = webscreenshot.screenshotUrl(options);
console.log(imageUrl);
```
