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
                {% if category.image %}
                <img src="{{ category.image | relative_url }}" alt="{{ category.name }}" class="category-image">
                {% else %}
                <div class="category-image-placeholder">אין תמונה זמינה</div>
                {% endif %}
                <div class="category-content">
                    <h2>{{ category.name }}</h2>
                    {% if category.description %}
                    <p>{{ category.description }}</p>
                    {% endif %}
                    <a href="{{ site.baseurl }}/categories/{{ category.id }}/" class="btn">לצפייה במתכונים</a>
                </div>
            </div>
            {% endfor %}
        {% else %}
            <p>לא נמצאו קטגוריות להצגה.</p>
        {% endif %}
    </div>
</div>

<style>
/* תיקון מרווח מתחת ל-header */
@media (min-width: 769px) { /* רק במסכים רחבים ממובייל */
  body {
    margin-top: -100px; /* ריווח שלילי רק במחשבים */
  }
}

/* עיצוב כפתורים */
.btn,
.view-category,
.back-button {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--button-bg-color);
  color: #000;
  text-decoration: none;
  border-radius: 4px;
  margin: 1rem 0;
  font-weight: 700;
  transition: background-color 0.3s, transform 0.2s;
}

.btn:hover,
.view-category:hover,
.back-button:hover {
  background-color: var(--button-hover-bg-color);
  transform: translateY(-3px);
}

/* עיצוב דף הבית */
.category-page {
  padding: 2rem;
  text-align: center;
  background-color: var(--secondary-color);
  color: var(--text-color);
}

.category-page h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  text-transform: uppercase;
  border-bottom: 2px solid var(--text-color);
  padding-bottom: 0.5rem;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem 0;
}

@media (max-width: 992px) {
  .category-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .category-grid {
    grid-template-columns: 1fr;
  }
}

.category-card {
  background-color: var(--card-bg-color);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.category-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  transition: transform 0.3s, opacity 0.3s, box-shadow 0.3s;
}

.category-card:hover img {
  transform: scale(1.03);
  opacity: 0.95;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}

.category-image-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--placeholder-bg-color);
  color: var(--placeholder-text-color);
  height: 160px;
  border-radius: 8px;
  font-size: 1rem;
}

.category-content {
  padding: 0.5rem;
}

.category-content h2 {
  font-size: 1.4rem;
  margin: 0.7rem 0 0.5rem;
  color: var(--placeholder-text-color);
  text-transform: uppercase;
  font-weight: bold;
}

.category-content p {
  font-size: 0.95rem;
  color: var(--text-color);
}

.category-content .btn {
  margin-top: 0.5rem;
  background-color: var(--button-bg-color);
  color: var(--button-text-color);
  transition: background-color 0.3s, transform 0.2s;
}

.category-content .btn:hover {
  background-color: var(--button-hover-bg-color);
  transform: translateY(-3px);
}

/* התאמות מובייל */
@media (max-width: 768px) {
  .category-card h2 {
    font-size: 1.2rem;
  }

  .category-card p {
    font-size: 0.9rem;
  }

  .category-content .btn {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>
