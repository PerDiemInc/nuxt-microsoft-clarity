# NuxtJS Microsoft Clarity

A NuxtJS plugin for injecting the Microsoft Clarity script tags into the head section of the HTMl page

## Table of Contents
- [Requirements](#requirements)
- [Install](#install)
- [Getting Started](#getting-started)
- [Options](#options)
- [Usage](#usage)

## Requirements
  - npm
  - NuxtJS
  - NodeJS

## Install
```sh
  # npm
  $ npm i nuxtjs-microsoft-clarity --save

  # yarn
  $ yarn add nuxtjs-microsoft-clarity

```

## Getting Started
Add `'nuxtjs-microsoft-clarity'` to the `modules` section of your `nuxt.config.js` file.

### Method 1: Inline configuration entry

```js
{
  modules: [
    'nuxtjs-microsoft-clarity', {
      // Options
    }
  ],
}
```

### Method 2: External configuration entry
Add `microsoftClarity` section in `nuxt.config.js` to set the module options:

```js
{
  modules: [
    'nuxtjs-microsoft-clarity'
  ],
  microsoftClarity: {
    // Options
  },
}
```

### Method 3: Runtime Config

```js
{
  modules: [
    'nuxtjs-microsoft-clarity'
  ],
  // Use as fallback if no runtime config is provided
  microsoftClarity: {
    // Options
  },
  publicRuntimeConfig: {
    microsoftClarity: {
      // Options
    }
  }
}
```

## Options
The following options can be configured in the module's configuration entry in your `nuxt.config.js` file

### Microsoft Clarity ID - `id`
- Required
- Default: `null`
## Usage 
 Starts tracking automatically if everything goes well. Note: It takes maximum duration of 2 hours before data start showing up on Microsoft Clarity dashboard
