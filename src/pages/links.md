---
title: Links ’n’ stuff
permalink: /links/index.html
description: Links
layout: page
youtube: true
---
Places you can find me on the world wide web.
### Social!
{% for element in social %}
<a href="{{element.url}}" target="bank">{{ element.platform }}</a>
{% endfor %}

### Websites!
{% for element in websites %}
<a href="{{element.url}}" target="bank">{{ element.platform }}</a>
{% endfor %}


