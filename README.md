# Early Link Generator
Generates checkout/early links for shopify sites. Now an NPM module for developers!

## Requirements
| Requirement | Version |
| ---|---|
| Node | ^8.8.0 |
| NPM | ^5.5.1 |
| Git | ^2.15.0


## NPM Module Installation

### Step 1.<br>
Type in console/terminal: ``npm i earlylinkgenerator``

### Step 2.<br>
Use this example code to run it.

```
const api = require('earlylinkgenerator');

links = ['array of links']

api.generate(links, (earlylinks, error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(earlylinks);
  }
})```
<br>

## Script Installation

### Step 1.<br>
Type in console/terminal: ``git clone https://github.com/aarock1234/earlylinkgenerator``

### Step 2.<br>
Type in console/terminal: ``npm i``

### Step 3.<br>
Open the config.json file in the directory you cloned the repository in and put in a product in the "link" section.

### Step 4.<br>
Type in console/terminal: ``node script.js``
It should print all early/checkout links for that product.
