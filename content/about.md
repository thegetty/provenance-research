---
title: About
layout: page
order: 1000
outputs:
  - html
---

{{ publication.description.full }}

{% backmatter %}

## Citation Information 

### Chicago 

{% citation context='publication', type='chicago' %}

### MLA

{% citation context='publication', type='mla' %}

### Permanent URL

{{ publication.url }}

## Revision History

{{ publication.revision_statement | markdownify }}

{% for revision in publication.revision_history %}

### {{ revision.date }}

{% for item in revision.summary %}
- {{ item | markdownify }}
{% endfor %}

{% endfor %}

## Other Formats

{% for link in publication.resource_link %}
{% if link.type == "other-format" %}
- [{{ link.name }}]({{ link.url }})
{% endif %}
{% endfor %}

## Copyright

{{ config.quire_credit_line | markdownify }}

{% copyright %}

{% for press in publication.publisher %}
**Published by the {{ press.name }}, {{ press.location }}**
{{ press.address | markdownify }}
{% endfor %}

{% for person in publication.project_team %}
- {{ person | markdownify }}
{% endfor %}

{{ publication.library_of_congress_cip | markdownify }}

This publication was peer reviewed through a single-masked process in which the reviewers remained anonymous.

Front cover: *Title*, date (detail, plate/fig. 00)
Back cover: *Title*, date (detail, plate/fig. 00)
Title page: *Title*, date (detail, plate/fig. 00)
[any other decorative image captions here]

Illustration Credits

Every effort has been made to contact the owners and photographers of illustrations reproduced here whose names do not appear in the captions. Anyone having further information concerning copyright holders is asked to contact Getty Publications so this information can be included in future printings. 

Authorized Product Safety Representative in the European Union: Easy Access System Europe, Mustamäe tee 50, 10621 Tallinn, Estonia, [gpsr.requests@easproject.com](mailto:gpsr.requests@easproject.com)

{% endbackmatter %}
