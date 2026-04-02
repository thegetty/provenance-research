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
**Published by the {{ press.name }}, {{ press.location }}** {.no-line-space-below}
{{ press.address | markdownify }}
{% endfor %}

<div class="project-team">

{% for person in publication.project_team %}
- {{ person | markdownify }}
{% endfor %}

</div>
<div class="cip-data">

{{ publication.library_of_congress_cip | markdownify }}

</div>

This publication was peer reviewed through a single-masked process in which the reviewers remained anonymous.

Front cover: Objects of art and statuary at Spink & Son Ltd., 1918 (detail, fig. 51) overlaid with stamps, markings, and text found on or related to works reproduced in figs. 8, 20B, 13, and 18.

Illustration Credits {.no-line-space-below}

Every effort has been made to contact the owners and photographers of illustrations reproduced here whose names do not appear in the captions. Anyone having further information concerning copyright holders is asked to contact Getty Publications so this information can be included in future printings. 

{% endbackmatter %}
