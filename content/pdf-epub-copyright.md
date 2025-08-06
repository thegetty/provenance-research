---
layout: page
order: 4
classes:
  - copyright-page
outputs:
  - epub
  - pdf
toc: false
menu: false
---
{{ config.quire_credit_line | markdownify }}

{{ publication.description.online_edition }}

{% copyright %}

First edition {{ publication.pub_date | date: "%Y" }}

Any revisions or corrections made to this publication after the date of the first edition will be listed in detail in the project repository at [{{ publication.repository_url }}]({{ publication.repository_url }}). The revisions branch of the project repository, when present, will show any changes currently under consideration but not yet published here.

{% for press in publication.publisher %}
{{ press.address | markdownify }}
{% endfor %}

{% for person in publication.project_team %}
- {{ person | markdownify }}
{% endfor %}

Distributed in the United States and Canada by the University of Chicago Press

Distributed outside the United States and Canada by Yale University Press, London

Authorized Product Safety Representative in the European Union: Easy Access System Europe, Mustamäe tee 50, 10621 Tallinn, Estonia, [gpsr.requests@easproject.com](mailto:gpsr.requests@easproject.com)

{{ publication.library_of_congress_cip | markdownify }}

This publication was peer reviewed through a single-masked process in which the reviewers remained anonymous.

Every effort has been made to contact the owners and photographers of illustrations reproduced here whose names do not appear in the captions. Anyone having further information concerning copyright holders is asked to contact Getty Publications so this information can be included in future printings. 
