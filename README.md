# easy-rtp-parser

easy rtp parser

## install

`npm i @penggy/easy-rtp-parser`

## usage

```js
const Parser = require('easy-rtp-parser');

var rtp = Parser.parseRtpPacket(rtpBuf);
console.log(`ssrc : ${rtp.ssrc}`);

var bKeyframe = Parser.isKeyframeStart(rtp.payload);
console.log(`key frame : ${bKeyframe}`);
```