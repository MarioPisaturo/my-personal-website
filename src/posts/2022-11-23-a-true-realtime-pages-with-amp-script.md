---
title: 'A true realtime AMP pages with <amp-script> & React'
description: 'From zero to (Amp)hero - part 1'
date: 2022-11-23
---
So, if you want to use your fancy React component on a  AMP  page and you want to know how to do it I exhort you to join me on my journey so as to make it work well and make it production-ready.

**Note**: This is a proof of concept. In production environments, additional configurations will be needed.


---

## AMP

> AMP (originally an acronym for Accelerated Mobile Pages) is a web component framework and a website publishing technology developed by Google which has the mission to “provide a user-first format for web content".

  
Unfortunately,  AMP  is not exactly a developer-first framework, it imposes significant restrictions and limits on the content of the page and  it has a lot of very strict rules, for example until recently it was not possible to use custom JavaScript.

Speaking of limits, in a lot of projects some pages were already hitting total style size limit (size of CSS rules we include on a page) hence when I decided to try rendering quite big React Component using `<amp-script>` I encountered difficulties.

Let's assume our componet was implemented as React component, it had a lots of logic in it and styling for different statuses.
Also I hope to reuse existing code and save time on re-implementing and re-testing it using  AMP  native solutions.

And that’s what I learned while I was trying to make it work…

## A big journey
First of all to load custom JavaScript to your page you have to use `<amp-script>`…but let’s check restrictions:


1.  DOM API is partially limited (see **DOM API Compatibility)** [**https://github.com/ampproject/worker-dom/blob/main/web_compat_table.md**](https://github.com/ampproject/worker-dom/blob/main/web_compat_table.md)
2.  Maximum total of 150,000 bytes for all <amp-script> elements on the page.
3.  Maximum total of 75,000 bytes for all styles on the page.
4.  All custom styles should be placed in `<style  amp-custom>` in the document’s head (inlining the styles in the elements is not  amp-valid).

  

Here we can see the first big problem, the total amount of bundle size of React is pretty close to limit.

But in other projects, for performances reasons, I usually use Preact (Fast 3kB alternative to React with the same modern API).

Most importantly Preact is compatible with React components, thanks to **preact/compat** module, so I decided to use it.

  
Notice:
_I’ve considered to discard `<amp-script>` and use `<amp-iframe>` instead for rendering widgets.
This is a very simple solution but not a good idea, this option has been discarded because of SEO purposes.
If the non-amp web version of the component is SSR using iframes in AMP version will make the content to be different from the view of the crawler_

  
### So let’s jump in my tech stack
  
_The Libs:_
I use Typescript and Storybook (React + Sass).

_The code :_
For the realtime  AMP  pages I mixed this elements to create self-contained  "micro-front-end" components able to get data and render itself in  AMP  pages.

_The style:_
CSS needed by all components on the page must be in the head section of hosting HTML page, inside a `<style amp-custom>` tag, as mentioned above inlining the styles in the elements is not  amp-valid. This is a big limit if you use **styled-components** or other CSS in JS libraries because require a lots of overhead to extract only the style you need.

```...pt2 WIP```
