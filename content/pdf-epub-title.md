---
title: Title Page
layout: base.11ty.js
classes:
  - title-page
order: 3
outputs:
  - pdf
  - epub
toc: false
---

{%- if publication.title -%}
  <h1 class="title">
    {{- publication.title | markdownify -}}
    {%- if publication.subtitle -%}
      <span class="visually-hidden">: </span>
      <span class="subtitle">{{- publication.subtitle | markdownify -}}</span>
    {%- endif -%}
  </h1>
{%- endif -%}

{%- if publication.contributor_as_it_appears -%}
  <p class="contributor">{{- publication.contributor_as_it_appears | markdownify -}}</p>
{%- else -%}
  {%- contributors context=publicationContributors type="primary" format="name" -%}
{%- endif -%}

{%- for publisher in publication.publisher -%}
  {%- if publisher.name -%}
    <p class="publisher">{{ publisher.name }}{% if publisher.location %}, {{ publisher.location }}{% endif %}</p>
  {%- endif %}
{%- endfor -%}


