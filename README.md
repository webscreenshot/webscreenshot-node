## Node.js Example

```js
import Webscreenshot from 'webscreenshot-io';

// API key from webscreenshot.io
const webscreenshot = Webscreenshot(API_KEY, API_SECRET);

// webscreenshot.io/documentation/options/options/
const options = {
  page: 'google.com',
  height: 600,
  width: 800,
  format: 'jpeg'
}

const imageUrl = webscreenshot.screenshotUrl(options);
console.log(imageUrl);
```
