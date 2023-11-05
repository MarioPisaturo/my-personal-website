---
title: Links ’n’ stuff
permalink: /links/index.html
description: Links
layout: page
youtube: false
---
Places you can find me on the world wide web.
### Social!
{% for element in social %}
<a rel="me" href="{{element.url}}" target="bank">{{ element.platform }}</a>
{% endfor %}

### Websites!
{% for element in websites %}
<a rel="me" href="{{element.url}}" target="bank">{{ element.platform }}</a>
{% endfor %}


