---
layout: default
title: "דף הבית"
permalink: /
---

<!-- דף הבית - מעוצב מחדש -->
<div class="category-page">
  <h1>קטגוריות מתכונים</h1>
  <div class="category-grid">
    {% assign categories = site.data.categories %}
    {% if categories.size > 0 %}
      {% for category in categories %}
      <div class="category-card">
        <!-- תצוגת מתכונים בקטגוריה -->
        <div class="recipe-preview-grid">
          {% assign recipes = site.data.recipes | where: "category", category.id | slice: 0,4 %}
          {% if recipes.size > 0 %}
            {% for recipe in recipes %}
            <div class="recipe-item">
              <a href="/recipes/{{ recipe.id }}/">
                <!-- עטיפת התמונה במיכל שמקבל את הגבול -->
                <div class="image-wrapper">
                  <img src="{{ recipe.image | default: '/images/placeholder.jpg' | relative_url }}" 
                       alt="{{ recipe.title }}" class="recipe-thumbnail">
                </div>
                <span class="recipe-title">{{ recipe.title }}</span>
              </a>
            </div>
            {% endfor %}
          {% else %}
            {% for i in (1..4) %}
            <div class="recipe-item">
              <a href="#">
                <div class="image-wrapper">
                  <img src="/images/placeholder.jpg" alt="תמונה חסרה" class="recipe-thumbnail">
                </div>
                <span class="recipe-title">מתכון חסר</span>
              </a>
            </div>
            {% endfor %}
          {% endif %}
        </div>

        <!-- תוכן קטגוריה -->
        <div class="category-content">
          <h2>{{ category.name }}</h2>
          {% if category.description %}
          <p>{{ category.description }}</p>
          {% endif %}
          <a href="/categories/{{ category.id }}/" class="btn">לכל המתכונים</a>
        </div>
      </div>
      {% endfor %}
    {% else %}
      <p>לא נמצאו קטגוריות להצגה.</p>
    {% endif %}
  </div>
</div>

<!-- קרוסלה למובייל עם תמונות קטגוריה -->
<div class="mobile-carousel">
  {% for category in site.data.categories %}
  <div class="carousel-item">
    <div class="carousel-category-box">
      <!-- קישור לתצוגת קטגוריה עם תמונה וכותרת -->
      <a href="/categories/{{ category.id }}/" class="category-link">
        <!-- מיכל התמונה במצב מובייל -->
        <div class="image-container">
          <img src="/images/categories/{{ category.id }}.jpg" 
               alt="{{ category.name }}"
               class="category-image-mobile"
               onerror="this.src='/images/placeholder.jpg'">
          <div class="category-title-overlay">
            <h3>{{ category.name }}</h3>
          </div>
        </div>
      </a>

      <!-- קרוסלת מתכונים עם שמות המתכון -->
      <div class="carousel-recipes">
        {% assign recipes = site.data.recipes | where: "category", category.id | slice: 0,4 %}
        {% if recipes.size > 0 %}
          {% for recipe in recipes %}
          <div class="carousel-recipe-item">
            <a href="/recipes/{{ recipe.id }}/">
              <img src="{{ recipe.image | default: '/images/placeholder.jpg' | relative_url }}" 
                   alt="{{ recipe.title }}">
              <span class="carousel-recipe-title">{{ recipe.title }}</span>
            </a>
          </div>
          {% endfor %}
        {% else %}
          {% for i in (1..4) %}
          <div class="carousel-recipe-item">
            <img src="/images/placeholder.jpg" alt="תמונה חסרה">
            <span class="carousel-recipe-title">מתכון חסר</span>
          </div>
          {% endfor %}
        {% endif %}
      </div>

      <!-- תיאור קטגוריה -->
      {% if category.description %}
      <p class="category-description">{{ category.description }}</p>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>

<style>
/* ------------------------- */
/* עיצוב כללי לדף הבית */
/* ------------------------- */

.category-page h1 {
  color: var(--primary-color);
}

.category-page a,
.category-page a:visited {
  color: var(--text-color);
}
.category-page a:hover,
.category-page a:focus {
  color: var(--accent-color);
}

.category-page {
  max-width: 90vw;
  margin: auto;
  padding: 2rem;
  background-color: var(--placeholder-bg-color);
  border-radius: 12px;
}

/* עיצוב למחשב */
.category-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
.category-card {
  background-color: var(--card-bg-color);
  border-radius: 12px;
  padding: 15px;
  border: 2px solid var(--category-border-color);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.category-card:nth-child(odd) {
  background-color: var(--card-bg-color);
}
.recipe-preview-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 15px;
}
.recipe-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
}

/* הוספת עיצוב לכותרת המתכון במצב מסך מחשב (למחשבים בלבד) */
@media (min-width: 769px) {
  .recipe-title {
    display: block;
    margin-top: 5px;
    text-align: center;
  }
}

.recipe-thumbnail {
  width: 100%;
  height: 120px;
  object-fit: cover;
  transition: transform 0.3s;
  display: block;
}
.recipe-item:hover .recipe-thumbnail {
  transform: scale(1.05);
}

/* תוכן קטגוריה */
.category-content h2 {
  margin-top: 0;
  color: var(--secondary-color);
}
.category-content p {
  margin: 0.5rem 0;
}
.btn {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 12px;
  background-color: var(--button-bg-color) !important;
  color: var(--button-text-color) !important;
  text-decoration: none;
  border-radius: 8px;
}
.btn:hover {
  background-color: var(--button-hover-bg-color) !important;
  transform: translateY(-3px);
}

/* עיצוב למובייל */
@media (max-width: 768px) {
  .mobile-carousel a,
  .mobile-carousel a:visited {
    color: var(--text-color) !important;
  }
  .mobile-carousel a:hover,
  .mobile-carousel a:focus {
    color: var(--accent-color) !important;
  }
}
.mobile-carousel {
  display: none;
  overflow-x: auto;
  padding: 0 2%;
  -webkit-overflow-scrolling: touch;
}
.carousel-item {
  display: inline-block;
  width: 95%;
  margin: 0 2% 30px 2%;
  vertical-align: top;
}
.carousel-item:first-child {
  margin-top: 30px;
}
.carousel-category-box {
  background-color: var(--card-bg-color);
  border: 2px solid var(--category-border-color)!important;
  border-radius: 12px;
  padding: 15px;
  box-sizing: border-box;
}

/* במצב מובייל – מיכל התמונה מקבל את הגבול */
.image-container {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-sizing: border-box;
  border: 2px solid var(--image-border-color);
}
.category-image-mobile {
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;
}
.category-title-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  padding: 5px 0;
}
.category-title-overlay h3 {
  margin: 0;
  font-size: 1.2rem;
  text-align: center;
}
.carousel-recipes {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 10px;
  margin-top: 10px;
}
.carousel-recipe-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
}
/* עדכון - הוספת גבול לתמונות הקטנות בקרוסלה */
.carousel-recipe-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 12px;
  box-sizing: border-box;
  border: 2px solid var(--image-border-color);
}
.carousel-recipe-title {
  display: block;
  margin-top: 5px;
  font-size: 0.9rem;
  text-align: center;
}
.category-description {
  margin-top: 10px;
  font-size: 0.95rem;
}

/* התאמות למכשירים ניידים */
@media (max-width: 768px) {
  .category-grid {
    display: none;
  }
  .mobile-carousel {
    display: block;
    padding: 0 2%;
  }
  .btn {
    display: none;
  }
  .category-page {
    padding: 0.5rem 2%;
    margin: 30px auto 30px auto;
  }
  .category-page h1 {
    font-size: 2rem;
    line-height: 1.2;
    margin: 20px 0 30px 0;
    text-align: center;
    background: none;
    padding: 0;
    border-radius: 0;
    color: var(--primary-color);
  }
  .mobile-carousel .carousel-item:nth-child(odd) .carousel-category-box {
    background-color: var(--card-bg-color);
  }
}

/* High Contrast Overrides for Accessibility */
.high-contrast .category-page {
  background-color: var(--high-contrast-bg) !important;
  color: var(--high-contrast-text) !important;
  border: 2px solid var(--high-contrast-link) !important;
}
.high-contrast .category-card {
  background-color: var(--high-contrast-btn) !important;
  border: 2px solid var(--high-contrast-link) !important;
  color: var(--high-contrast-text) !important;
}
.high-contrast .btn {
  background-color: var(--high-contrast-btn) !important;
  color: var(--high-contrast-link) !important;
}
.high-contrast .mobile-carousel {
  background-color: var(--high-contrast-bg) !important;
  color: var(--high-contrast-text) !important;
}
.high-contrast .carousel-category-box {
  background-color: var(--high-contrast-btn) !important;
  border: 2px solid var(--high-contrast-link) !important;
  color: var(--high-contrast-text) !important;
}
.high-contrast .carousel-recipe-item img {
  border: 2px solid var(--high-contrast-link) !important;
}
.high-contrast .carousel-recipe-title {
  color: var(--high-contrast-text) !important;
}
.high-contrast .category-content h2,
.high-contrast .category-content p {
  color: var(--high-contrast-text) !important;
}
.high-contrast .category-description {
  color: var(--high-contrast-text) !important;
}

@media (max-width: 768px) {
  .high-contrast .mobile-carousel {
    background-color: var(--high-contrast-bg) !important;
    color: var(--high-contrast-text) !important;
  }
  .high-contrast .carousel-category-box {
    background-color: var(--high-contrast-btn) !important;
    border: 2px solid var(--high-contrast-link) !important;
  }
  .high-contrast .category-page h1 {
    color: var(--high-contrast-link) !important;
  }
}
</style>
