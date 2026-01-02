
---

# 🎓 Student Result Management System

A modern **web-based Student Result Management System** built using **HTML, CSS, and JavaScript** that allows teachers or admins to enter student marks, calculate results, assign grades, and store data permanently using **Local Storage**.

This project is designed to demonstrate **front-end development skills, form handling, data processing, and browser-side persistence**.

---

## 🚀 Live Demo

https://yamanaaravindreddy.github.io/student-result-management-system/

---

## 📌 Features

✔️ Add student name and roll number
✔️ Enter marks for three subjects
✔️ Automatically calculates:

* Total marks
* Percentage
* Grade (A, B, C, F)
* Pass / Fail status

✔️ Displays results in a clean table
✔️ Stores records permanently using **Local Storage**
✔️ Automatically loads saved data on page refresh
✔️ Delete any student record
✔️ Fully responsive and modern UI

---

## 🖥️ Tech Stack

| Technology                  | Purpose                               |
| --------------------------- | ------------------------------------- |
| **HTML5**                   | Structure of the web application      |
| **CSS3**                    | Styling and layout                    |
| **JavaScript (Vanilla JS)** | Logic, calculations, DOM manipulation |
| **LocalStorage API**        | Persistent data storage               |

---

## 📂 Project Structure

```
Student-Result-System/
│
├── index.html     → UI layout
├── style.css      → Styling and design
├── script.js      → Application logic
└── README.md      → Project documentation
```

---

## 🧠 How It Works

1. User enters:

   * Student Name
   * Roll Number
   * Marks for 3 subjects

2. When **Generate Result** is clicked:

   * Total is calculated
   * Percentage is computed
   * Grade is assigned
   * Pass / Fail is determined

3. The result is:

   * Displayed on the screen
   * Saved to **Local Storage**
   * Shown in the results table

4. On page reload:

   * All previous records are automatically loaded

5. User can delete any record with one click

---

## 📊 Grading Logic

| Percentage    | Grade |
| ------------- | ----- |
| 75% and above | A     |
| 60% – 74%     | B     |
| 40% – 59%     | C     |
| Below 40%     | F     |

**Pass Criteria:**
Percentage ≥ 40 → Pass
Percentage < 40 → Fail

---

## 📥 Installation & Setup

No installation required.

### Run Locally:

1. Download or clone the repository

```
git clone https://github.com/yourusername/student-result-system.git
```

2. Open `index.html` in any browser
   That’s it — the system is ready to use 🎉

---


## 🔐 Data Storage

All student records are saved using the browser’s **Local Storage**, meaning:

* Data stays even after page refresh
* No backend or database required
* Each browser keeps its own data

---

## 🧩 Future Enhancements

* Add edit/update feature
* Export results as PDF or Excel
* Add subject-wise analysis
* Add login system for teachers
* Cloud database integration

---



## ⭐ Support

If you like this project, don’t forget to **⭐ Star this repository** — it motivates me to build more awesome projects!

---

