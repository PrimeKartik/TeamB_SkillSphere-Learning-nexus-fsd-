package com.skillsphere.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 150)
    private String title;

    @Column(length = 20)
    private String badge; // BESTSELLER, POPULAR, TRENDING, NEW

    @Column(length = 30)
    private String badgeColor;

    @Column(length = 30)
    private String level; // Beginner, Intermediate, Advanced

    @Column(length = 30)
    private String duration; // e.g. "12 Weeks"

    private Double rating;

    private String reviews; // e.g. "1.2K" (kept as string to match display format)

    @Column(precision = 10, scale = 2)
    private BigDecimal price;

    public Course() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getBadge() { return badge; }
    public void setBadge(String badge) { this.badge = badge; }

    public String getBadgeColor() { return badgeColor; }
    public void setBadgeColor(String badgeColor) { this.badgeColor = badgeColor; }

    public String getLevel() { return level; }
    public void setLevel(String level) { this.level = level; }

    public String getDuration() { return duration; }
    public void setDuration(String duration) { this.duration = duration; }

    public Double getRating() { return rating; }
    public void setRating(Double rating) { this.rating = rating; }

    public String getReviews() { return reviews; }
    public void setReviews(String reviews) { this.reviews = reviews; }

    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }
}
