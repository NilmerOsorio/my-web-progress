# 📦 CSS Box Model — Padding Practice

This project is a simple exercise I created while learning about the **CSS Box Model**.

The main focus of this exercise was understanding how **width, margin, border, padding, and content** work together to define the size and appearance of an element.

## 🧠 What I Learned

### The CSS Box Model

Every HTML element can be understood as a box made up of different parts:

```text
┌───────────────────────────────┐
│            Margin             │
│  ┌─────────────────────────┐  │
│  │         Border          │  │
│  │  ┌───────────────────┐  │  │
│  │  │      Padding      │  │  │
│  │  │  ┌─────────────┐  │  │  │
│  │  │  │   Content   │  │  │  │
│  │  │  └─────────────┘  │  │  │
│  │  └───────────────────┘  │  │
│  └─────────────────────────┘  │
└───────────────────────────────┘
```

The four main parts are:

* **Content** — The actual text or elements inside the box.
* **Padding** — The space between the content and the border.
* **Border** — The visible edge surrounding the element.
* **Margin** — The space outside the border, separating the element from other elements.

## 🎨 CSS Properties I Practiced

### Width

This defines the width of the content area of the card.

### Margin

I used `margin-top` to create space above the card.

I also used `margin-left: auto` and `margin-right: auto` to horizontally center the card.

### Border

The `border` creates a 4-pixel solid border around the card.

`border-radius` makes the corners rounded.

### Padding

Padding creates space **inside the card**, between the text and the border.

This was one of the main concepts I wanted to practice in this exercise.

### Text Alignment

This centers the text horizontally inside the card.

## 🛠️ Technologies

* HTML5
* CSS3

The CSS then styles this element as a centered card with a border, rounded corners, and internal spacing.

## 🎯 Main Takeaway

The biggest thing I learned from this exercise is that **padding and margin are not the same thing**.

* `padding` → space **inside** the element.
* `border` → the element's visible boundary.
* `margin` → space **outside** the element.

Understanding the Box Model is important because it helps me control the **size, spacing, and position of elements** when building web pages.
