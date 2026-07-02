# 🎨 Integrating CSS into HTML: Methods & Implementations

A structured frontend laboratory exercise focused on mastering the foundational methods of adding **CSS3 cascading styles** to an **HTML5 semantic document**. This project demonstrates how to decouple content from presentation while experimenting with structural style inheritance.

---

## 🖥️ Project Core Objective

The primary focus of this project was learning exactly how to bridge structural HTML markup with a CSS design engine. Instead of just writing styles, this exercise serves as a practical exploration of **how the browser loads, interprets, and applies styles** using different integration methods. 

To test these integration mechanics, a single-page layout ("Midnight Sysadmin Ramen Card") was built as a data skeleton to verify structural changes in real-time.

---

## 🧠 Key Takeaways: Methods of Adding CSS

During this exercise, I analyzed and implemented the most common methodology for adding CSS styles to HTML elements, understanding the use case and structural impact:

### External Stylesheets (Best Practice Deployment)
The dominant method practiced was using an external stylesheet, linking an independent `styles.css` file to the `midnight-sysadmin-ramen.html` document.
* **Implementation:** Handled inside the HTML `<head>` container using the self-closing link element:
  ```html
  <link rel="stylesheet" href="styles.css">