---
layout: page
title: research
permalink: /projects/
#description:
nav: true
nav_order: 1
display_categories: [work, fun]
horizontal: false
---

I develop and use methods primarily based on `electronic structure theory`, `molecular dynamics`, and `stochastic methods` to try and solve interesting/ challenging problems in physics, chemistry, and biology.<br>

Problems that I am interested in are very `multiscale`, both in length and time; and cover a wide range of topics. Some areas of my active research are mentioned below.

`Potential collaborators`: I have worked/ continue to work in close collaboration with exceptional experimentalists across the globe who make my research both more impactful and fun. If you want to collaborate on any interesting scientific problem, please feel free to reach out at `subhajyoti.chaudhuri@northwestern.edu`


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
