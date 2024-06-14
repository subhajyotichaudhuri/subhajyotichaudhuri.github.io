---
layout: page
title: Research
permalink: /projects/
#description:
nav: true
nav_order: 3
display_categories: [development, application]
horizontal: false
---

I develop scalable mixed quantum-classical methods to study charge, spin, and energy transfer in non-equilibrium, driven, chiral, and complex systems; with the goal of understanding the multi-scale physics behind the properties of materials. I also heavily utilize `electronic structure theory`, `molecular dynamics`, `stochastic methods`, and `machine learning` in my research.

Problems that I am interested in are multi-scale, both in length and time; and cover a wide range of topics. Some areas of active research are mentioned below.

I work closely with several theoretical and experimental groups. If you are interested in collaborating, please reach out at `subhajyoti.chaudhuri@northwestern.edu`

<!-- pages/projects.md -->
<div class="projects">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_projects = site.projects | where: "category", category -%}
  {%- assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}
<!-- Display projects without categories -->
  {%- assign sorted_projects = site.projects | sort: "importance" -%}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>
