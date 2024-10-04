# Portfolio.
My Very opiniated Eleventy starter based on the workflow suggested by Andy Bell's <https://buildexcellentwebsit.es/>.

## Preview

https://mariopisaturo.netlify.app

## Features

This starter includes:

- The whole CSS workflow as suggested by buildexcellentwebsit.es
- Accessible site navigation, editable in \_data/navigation.js
- Image optimization with Eleventy-img (see blog post)
- Youtube embed with lite-youtube (see blog post)
- Syntax highlighting via eleventy-plugin-syntaxhighlight
- SEO (XML-sitemap, metadata)
- dayjs handling dates & times
- 301 redirects for netlify
- markdown handling
- Bundling via esbuild


## Development

### Install dependencies

```
npm install
```

### Working locally

Starts watch tasks to compile when changes detected

```
npm start
```

### Creating a production build

Minify JS, inline and minify CSS.

```
npm run build
```

