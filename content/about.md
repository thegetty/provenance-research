---
title: About
layout: page
order: 1000
outputs:
  - html
---

{{ publication.description.full }}

## Citation Information 

### Chicago 

{% citation context='publication', type='chicago' %}

### MLA

{% citation context='publication', type='mla' %}

### Permanent URL

{{ publication.url }}

## Revision History

Any revisions or corrections made to this publication after the date of the first edition will be listed here and in the project repository at [{{ publication.repository_url }}]({{ publication.repository_url }}), where a more detailed version history is available. The revisions branch of the project repository, when present, will show any changes currently under consideration but not yet published here.

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
{{ press.address | markdownify }}
{% endfor %}

{% for person in publication.project_team %}
- {{ person | markdownify }}
{% endfor %}

{{ publication.library_of_congress_cip | markdownify }}

