<p align="center">
  <a href="https://wellness-icons.saunaworlds.com/#gh-light-mode-only" target="_blank">
    <img src="./.github/logo-light.svg" alt="wellness-icons" width="300">
  </a>
  <a href="https://wellness-icons.saunaworlds.com/#gh-dark-mode-only" target="_blank">
    <img src="./.github/logo-dark.svg" alt="wellness-icons" width="300">
  </a>
</p>

<p align="center">
  Beautiful hand-crafted Sauna & Wellness SVG icons, by Saunaworlds. <br>Available as basic SVG icons and via first-party <a href="#react">React</a> and <a href="#vue">Vue</a> libraries.
<p>

<p align="center">
  <a href="https://wellness-icons.saunaworlds.com"><strong>Browse at wellness-icons.saunaworlds.com &rarr;</strong></a>
</p>


<p align="center">
    <a href="https://github.com/saunaworlds/wellness-icons/releases"><img src="https://img.shields.io/npm/v/wellness-icons" alt="Latest Release"></a>
    <a href="https://github.com/saunaworlds/wellness-icons/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/wellness-icons.svg" alt="License"></a>
</p>


## Basic Usage

The quickest way to use these icons is to simply copy the source for the icon you need from [wellness-icons.saunaworlds.com](https://wellness-icons.saunaworlds.com) and inline it directly into your HTML:

```html
<svg class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  />
</svg>
```

Both icon styles are preconfigured to be stylable by setting the `color` CSS property, either manually or using utility classes like `text-gray-500` in a framework like [Tailwind CSS](https://tailwindcss.com).

## React

First, install `@wellness-icons/react` from npm:

```sh
npm install @wellness-icons/react
```

Now each icon can be imported individually as a React component:

```js
import { BeakerIcon } from '@wellness-icons/react/24/outline'

function MyComponent() {
  return (
    <div>
      <BeakerIcon className="h-6 w-6 text-blue-500"/>
      <p>...</p>
    </div>
  )
}
```

The 24x24 outline icons can be imported from `@wellness-icons/react/24/outline`.

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.

[Browse the full list of icon names on UNPKG &rarr;](https://unpkg.com/browse/@wellness-icons/react/24/outline/)


## Vue

*Note that this library currently only supports Vue 3.*

First, install `@wellness-icons/vue` from npm:

```sh
npm install @wellness-icons/vue
```

Now each icon can be imported individually as a Vue component:

```vue
<template>
  <div>
    <BeakerIcon class="h-6 w-6 text-blue-500"/>
    <p>...</p>
  </div>
</template>

<script>
import { BeakerIcon } from '@wellness-icons/vue/24/outline'

export default {
  components: { BeakerIcon }
}
</script>
```

The 24x24 outline icons can be imported from `@wellness-icons/vue/24/outline`.

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.

[Browse the full list of icon names on UNPKG &rarr;](https://unpkg.com/browse/@wellness-icons/vue/24/outline/)

## License

Icons designed by the amazing [Roberta Lanzetti](https://www.robertalanzetti.it/).

Codebase is forked from [saunaworlds/wellness-icons](https://github.com/saunaworlds/wellness-icons).

This library is MIT licensed.
