## 📖 What is a User Story?

A **user story** is a simple, clear description of something a user wants to do or experience on a website. It helps developers understand what they’re building — not just how it should look, but why it matters to the person using the site.

Most user stories follow this structure:

> **As a user, I want [something], so that [reason].**

In your resume project, each part of the design (like a button, layout, or style) is tied to a user story that helps you understand the **purpose** of the design decisions and **how to implement them in code**.

---

## 🧪 Examples from Your Resume Project

Let’s look at three actual user stories from your rubric and break down what they mean and how you’d implement them.

---

### ✅ **Example 1: Profile Picture**

> **User Story:**  
> *As a user, I want the profile picture to be displayed in a 1:1 aspect ratio with 24px rounded corners and a fixed size of 144px by 144px so that it maintains a clean and modern design.*

**How to implement this:**
- Use an `<img>` tag for the profile picture.
- In your CSS, give it a fixed width and height of `144px`.
- Use `border-radius: 24px` to round the corners.
- Use `object-fit: cover` to keep the image perfectly square and centred.

```css
.profile-img {
  width: 144px;
  height: 144px;
  border-radius: 24px;
  object-fit: cover;
}
```

💡 *This user story focuses on **visual consistency and style**, helping the profile section look polished and professional.*

---

### ✅ **Example 2: Skill Tags Design**

> **User Story:**  
> *As a user, I want each skill tag to be a light green pill shape (#ECF4F1) with 8px vertical padding, 14px horizontal padding, and 6px rounded corners so that they stand out as interactive elements while keeping a balanced look.*

**How to implement this:**
- Wrap each skill in a `span` or `div` with a class like `.skill-tag`.
- Use padding and border-radius to create the pill shape.
- Use the specified background colour.

```css
.skill-tag {
  background-color: #ECF4F1;
  padding: 8px 14px;
  border-radius: 6px;
  display: inline-block;
  font-size: 14px;
}
```

💡 *This user story focuses on **usability and visual clarity**, ensuring the skills are easy to scan and nicely styled.*

---

### ✅ **Example 3: Project Card Highlight**

> **User Story:**  
> *As a user, I want the first project card (highlighted) to have a background colour of #2E6E5B (dark green) with white text (#FFFFFF), while the other cards remain white (#FFFFFF) with black text (#000000) so that the featured project stands out.*

**How to implement this:**
- Use a `class="project-card featured"` on the first card.
- In your CSS, apply a dark green background and white text styles for the `.featured` card.
- Style the other cards as standard with white backgrounds and black text.

```css
.project-card {
  background-color: #FFFFFF;
  color: #000000;
}

.project-card.featured {
  background-color: #2E6E5B;
  color: #FFFFFF;
}
```

💡 *This user story focuses on **visual hierarchy**, making it easy for users to see which project is the most important.*

---

## 🧠 Why User Stories Matter

User stories help you:
- Think like a user (not just a coder)
- Understand the purpose behind every layout, style, or interaction
- Build features that improve the **experience**, not just the appearance

Throughout your project, use the rubric’s user stories as your **guide**. They tell you exactly what to build — and *why* it matters.

