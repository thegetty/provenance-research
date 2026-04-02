---
title: Copyright
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

<div class="backmatter">

{{ config.quire_credit_line | markdownify }}

{{ publication.description.online_edition }}

{% copyright %}

First edition {{ publication.pub_date | date: "%Y" }}

{{ publication.revision_statement | markdownify }}

{% for press in publication.publisher %}
**Published by the {{ press.name }}, {{ press.location }}** {.no-line-space-below}
{{ press.address | markdownify }}
{% endfor %}

<div class="project-team">

{% for person in publication.project_team %}
- {{ person | markdownify }}
{% endfor %}

</div>

Distributed in the United States and Canada by the University of Chicago Press

Distributed outside the United States and Canada by Yale University Press, London

<div class="cip-data">

{{ publication.library_of_congress_cip | markdownify }}

</div>

This publication was peer reviewed through a single-masked process in which the reviewers remained anonymous.

Front cover: Objects of art and statuary at Spink & Son Ltd., 1918 (detail, fig. 51) overlaid with stamps, markings, and text found on or related to works reproduced in figs. 8, 20B, 13, and 18.

Illustration Credits {.no-line-space-below}

Every effort has been made to contact the owners and photographers of illustrations reproduced here whose names do not appear in the captions. Anyone having further information concerning copyright holders is asked to contact Getty Publications so this information can be included in future printings. 

Authorized Product Safety Representative in the European Union: Easy Access System Europe, Mustamäe tee 50, 10621 Tallinn, Estonia, [gpsr.requests@easproject.com](mailto:gpsr.requests@easproject.com)

</div>