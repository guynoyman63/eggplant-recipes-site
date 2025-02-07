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
                                <img src="{{ recipe.image | default: '/images/placeholder.jpg' | relative_url }}" 
                                     alt="{{ recipe.title }}" class="recipe-thumbnail">
                                <span class="recipe-title">{{ recipe.title }}</span>
                            </a>
                        </div>
                        {% endfor %}
                    {% else %}
                        {% for i in (1..4) %}
                        <div class="recipe-item">
                            <img src="/images/placeholder.jpg" alt="תמונה חסרה" class="recipe-thumbnail">
                            <span class="recipe-title">מתכון חסר</span>
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
            <!-- קישור לתצוגת קטגוריה עם תמונה וכותרת (לחיצה על התמונה או הכותרת מובילה לדף הקטגוריה) -->
            <a href="/categories/{{ category.id }}/" class="category-link">
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

            <!-- תיאור קטגוריה (המלל שהיה מתחת לכותרת) -->
            {% if category.description %}
            <p class="category-description">{{ category.description }}</p>
            {% endif %}
        </div>
    </div>
    {% endfor %}
</div>

<style>
/* הגדרת משתנים לעיצוב */
:root {
    --page-bg-color: #EDF2E0; /* רקע כללי לדף */
    --category-bg-color: #d7efb6; /* רקע רגיל לקטגוריות */
    --category-bg-alt: #D0DFC0; /* רקע שונה לכל קטגוריה שנייה */
    --category-border-color: #B0C5A0; /* מסגרת לכל קטגוריה */
}

/* עיצוב כללי */
.category-page {
    max-width: 90vw;
    margin: auto;
    padding: 2rem;
    background-color: var(--page-bg-color);
    border-radius: 12px;
}

/* עיצוב למחשב */
.category-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
}

.category-card {
    background-color: var(--category-bg-color);
    border-radius: 12px;
    padding: 15px;
    border: 2px solid var(--category-border-color);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.category-card:nth-child(odd) {
    background-color: var(--category-bg-alt);
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

.recipe-thumbnail {
    width: 100%;
    height: 120px;
    object-fit: cover;
    transition: transform 0.3s;
    border-radius: 12px; /* מעגלת את כל הפינות */
}

.recipe-item:hover .recipe-thumbnail {
    transform: scale(1.05);
}

/* תוכן קטגוריה */
.category-content h2 {
    margin-top: 0;
}

.category-content p {
    margin: 0.5rem 0;
}

.btn {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 12px;
    background-color: var(--category-border-color);
    color: #fff;
    text-decoration: none;
    border-radius: 8px;
}

/* עיצוב למובייל */
.mobile-carousel {
    display: none;
    overflow-x: auto;
    padding: 0 2%;
    -webkit-overflow-scrolling: touch;
}

.carousel-item {
    display: inline-block;
    width: 95%;
    margin: 0 2% 30px 2%; /* רווח גדול בין כל קטגוריה */
    vertical-align: top;
}

.carousel-category-box {
    background-color: var(--category-bg-color);
    border: 2px solid var(--category-border-color);
    border-radius: 12px;
    padding: 15px;
    box-sizing: border-box;
}

/* עיגול מלא של תמונת הקטגוריה */
.image-container {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
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

/* עיצוב לקרוסלת מתכונים במובייל */
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

.carousel-recipe-item img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 12px;
}

.carousel-recipe-title {
    display: block;
    margin-top: 5px;
    font-size: 0.9rem;
    text-align: center;
}

/* תיאור קטגוריה במובייל */
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
    
    /* ניתוק הרקע של הכותרת מה-header ושמירה על גודלה המקורי */
    .category-page {
        padding: 0.5rem 2%;
        margin: 30px auto 30px auto; /* מרווח חיצוני גדול יותר מה-header */
    }
    .category-page h1 { 
        font-size: 2rem;
        line-height: 1.2;
        margin: 20px 0 30px 0; /* רווח מעל ומתחת – כך נוצר ניתוק מה-header */
        text-align: center;
        /* מבטלים את העיצוב של רקע, padding ו-border-radius כך שהכותרת תישאר בגודלה המקורי */
        background: none;
        padding: 0;
        border-radius: 0;
    }
    
    /* החלפת צבע בין קטגוריות זוגיות ואי זוגיות */
    .mobile-carousel .carousel-item:nth-child(odd) .carousel-category-box {
        background-color: var(--category-bg-alt);
    }
}
</style>
