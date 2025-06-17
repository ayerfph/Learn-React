# Backbone.js Routing Guide

Backbone.js offers a straightforward way to manage navigation and application state using routers. This guide introduces the essentials of creating and using Backbone routers, with clear examples and best practices.

---

## 🚦 1. What is a Router?

A **Router** maps URLs to functions, enabling single-page application (SPA) navigation without full page reloads.

---

## 🛠️ 2. Defining a Router

Extend `Backbone.Router` to define your application's routes and handlers:

```js
var AppRouter = Backbone.Router.extend({
    routes: {
        "": "home",                       // #/
        "about": "aboutPage",             // #/about
        "projects/:id": "viewProject"     // #/projects/123
    },

    home: function() {
        // Render home view
    },

    aboutPage: function() {
        // Render about view
    },

    viewProject: function(id) {
        // Render project with given id
    }
});
```

---

## 🚀 3. Initializing the Router

Create an instance of your router and start Backbone history:

```js
var router = new AppRouter();
Backbone.history.start();
```

---

## 🔗 4. Navigating Programmatically

Use `router.navigate` to change routes in your code:

```js
router.navigate('about', { trigger: true });
```

- `trigger: true` calls the route handler immediately.

---

## 🧩 5. Route Parameters

Routes can include parameters (e.g., `:id`). These are passed as arguments to the handler functions.

---

## 🌐 6. Hash vs. PushState

By default, Backbone uses hash fragments (`#/route`). To enable clean URLs with HTML5 `pushState`:

```js
Backbone.history.start({ pushState: true });
```

---

## 📁 7. Example Project Structure

```plaintext
/js
    /views
    /models
    /routers
        appRouter.js
    app.js
index.html
```

---

## 📚 8. Resources

- [Backbone.js Routing Documentation](https://backbonejs.org/#Router)
- [Backbone.js Tutorials](https://backbonejs.org/#examples)

---
