## 🧠 Project Walkthrough: Resume Project (Section-by-Section Breakdown)

This guide follows the **rubric categories** and breaks down *exactly* what you need to do to build your resume website. It also explains *why* each section matters, so you understand how to impress your coach and grow your dev skills.

---

### 🟢 1. Layout and Structure (HTML)

📚 **Why this matters:** Using semantic HTML means your code is readable, accessible, and structured properly. This is the foundation of a good website.

**What to do:**
- Use meaningful HTML tags:
  - `<header>` for your name and summary
  - `<section>` for each major part (projects, skills, education, etc.)
  - `<article>` or `<div>` for individual cards (e.g. one job or one project)
  - `<footer>` for your contact section

**Follow this order (from Figma):**
1. Profile & Summary
2. Proficiency Bars
3. Skills
4. Projects
5. Education
6. Work Experience
7. Tools
8. Footer

**Use proper heading levels:**
- Only one `<h1>` for your name
- Then use `<h2>` for section titles, and `<h3>` for smaller content

💡 *Test it:* If you remove all your CSS, does the structure of your site still make sense?

🚫 Common mistakes to avoid:
- Only using `<div>`s
- Heading levels out of order
- Putting everything inside one giant `<section>`

---

### 🟢 2. Styling and Visual Accuracy (CSS)

🎨 **Why this matters:** You’re practising how to turn a design into code — just like real frontend developers do.

**What to do:**
- Use the same:
  - Fonts and sizes (check Google Fonts if needed)
  - Colours
  - Padding, spacing, and alignment
  - Card and tag styles
- Use `rem`, `%`, or `em` instead of fixed pixels to help with responsiveness
- Use **Flexbox** or **Grid** to create structure

🌟 *Want full marks?* You can earn bonus marks for pixel-perfect alignment with the Figma!

🚫 Avoid:
- Choosing your own colours or fonts
- Ignoring layout spacing
- Using `px` for everything (bad for mobile)

---

### 🟢 3. Responsiveness

📱 **Why this matters:** Most people will view your site on a phone — it needs to work on small screens.

**What to do:**
- Use media queries like:
```css
@media (max-width: 768px) {
  .intro {
    flex-direction: column;
    align-items: center;
  }
}
```
- Make sure:
  - Text scales properly
  - Images resize and don’t overflow
  - Columns stack vertically
  - No horizontal scrollbars appear

💡 *Test this:* Drag your browser smaller — does everything still look clean?

🚫 Avoid:
- Fixed widths that break layout
- Not testing your site on mobile or smaller screens

---

### 🟢 4. Content Accuracy

📜 **Why this matters:** You’re telling *your story* as a developer. Every section is about making your skills shine — no filler!

#### 👤 Profile & Summary
- Add your name and a short intro (2–4 lines)
- Include a profile image
- Tip: Answer “What kind of dev am I becoming? What excites me about tech?”

#### 📊 Proficiency Bars
- Create visual bars for: HTML, CSS, JavaScript, React, Node.js
- Honest reflection of your current level
- Use CSS `width` and background colours to create bar visuals

#### 🧹 Skills Tags
- Use consistent style and spacing
- Include **at least 8** short skill tags. These are short keywords like:

🟢 Software Development  
🟢 Agile  
🟢 RESTful APIs  
🟢 Git and Version Control

**How to do it:**  
- Each tag is a styled `span` or `div`  
- Space them out with margin  
- Keep the font and layout tidy

#### 💼 Projects
Each card must have:
- Year
- Project name
- Brief summary (what it does)
- Technologies used
- What *you* built

#### 🏫 Education
- School or course name
- Dates attended
- Bullet points: what you learned or built

#### 👨‍💼 Experience
- Job title, company, dates
- 2–3 bullet points explaining what you did

Even if you’ve never worked in tech, this section shows you’re responsible, reliable, and great with people.

#### 🛠️ Tools

This is a fun one — show off the tools, languages, and platforms you’ve used.

Split this into 3 mini categories (just like in the design):
- **Languages** (e.g., HTML, CSS, JavaScript, etc.)  
- **Design Tools** (e.g., Figma, Canva, etc.)  
- **Other Tools** (e.g., Git, GitHub, VS Code, npm)

Use icons where possible (you can use free icon libraries like [Icons8](https://icons8.com/), [Font Awesome](https://fontawesome.com/), or [Devicon](https://devicon.dev/)). 

✨ Make it visually engaging — this section should *pop*!

#### 📧 Footer
- Add friendly message
- Include clickable links:
  - `mailto:` for email
  - GitHub
  - LinkedIn
  - Optional: phone number

🚫 Don’t:
- Leave out any required section
- Use dummy text or lorem ipsum

---

### 🟢 5. Code Quality

🔧 **Why this matters:** Good code is easy to read, update, and debug. It shows professionalism.

**What to do:**
- Use proper indentation and spacing
- Use clear, descriptive class names (`.skills-tag`, not `.bluebox1`)
- Remove unused code, empty styles, and unnecessary comments
- Group CSS logically (e.g. all card styles together)

💡 *Tip:* Run your HTML through [HTML Validator](https://validator.w3.org/)

🚫 Avoid:
- Random spacing or indentation
- Messy, repeated CSS
- Leaving in test code or unused classes

---

### 🟢 6. Presentation & Communication

💬 **Why this matters:** It’s not just about what you build, but how well you can explain it. This shows your understanding and communication skills.

**What to do in validation:**
- Walk through each section of your site
- Explain:
  - Why you used certain HTML tags
  - How you matched the Figma layout
  - How you approached responsiveness
- Be honest about challenges and how you solved them


🚫 Don’t:
- Say "I just copied" or "I don’t know what this does"

💡 You don’t need to be perfect — just *clear* and *confident*.

---

### 🟢 7. GitHub & Project Upload

📂 **Why this matters:** You’re showing that you can organise and manage your code using version control — a core dev skill.

**What to do:**
- Push your code to your SDFPP GitHub repo
- Commit often with meaningful messages like:
  - “Added Education section layout”
  - “Styled skills tags with Flexbox”
- Check that your files open correctly in the browser

🚫 Note: **Deployment is not required**, but your project must run locally with no errors.

💡 Bonus: Include your GitHub and LinkedIn in your footer!

---

### ✅ Final Quick Checklist
- [ ] All required sections are included
- [ ] HTML is semantic and structured well
- [ ] CSS matches Figma design
- [ ] Site works well on mobile
- [ ] No console or browser errors
- [ ] Clear, meaningful Git commits
- [ ] Ready to explain your work in validation

---

You’ve got this! Build something you’re proud to show off — and use this project to show the world what kind of dev you’re becoming.

