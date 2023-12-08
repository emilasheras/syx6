# Tasks needed to migrate a static website to ReactJs

### 🎃 Static Website => ReactJs + Vite

- [x] Create a new ReactJs project with Vite.
- [x] Copy SOME of the static website files to the new ReactJs project.
    - [x] `css` folder. (SASS)
    - [x] `js` files as needed (if any).
    - [x] `images` as needed. Favicon and logo. for now.
- [x] Make the ReactJs project work with the copied files.
    - [x] Create `App.jsx` for the apps main component.
    - [x] Create `main.jsx` for the apps main entry point.
    - [x] Create `index.html` for the apps main html file. 
        - [x] Check Metadata
        - [x] Check Favicon
        - [x] Check Title
        - [x] Check Links
        - [x] Check Scripts
        - [x] Check DNS Prefetch
    - [x] Import SASS files into `App.jsx` (or `main.jsx`).
    - [x] Install Bootstrap 5.x
- [x] Remake the pages in React JSX components
    - [ ] `404.html` => `<component>.jsx`
    - [ ] `about.html` => `<component>.jsx`
    - [ ] `changelog.html` => `<component>.jsx`
    - [ ] `gallery.html` => `<component>.jsx`
    - [x] `home.html` => [`HomePage.jsx`](/src/pages/HomePage.jsx)
    - [ ] `nexus.html` => `<component>.jsx`
    - [ ] `shop.html` => `<component>.jsx`

- [x] Copy the previous project's markdown and online-course files.
    - [x] Online bootcamp courses
    - [x] Online bootcamp mockups
    - [x] Online bootcamp readme files

- [ ] Javascript migration process
    - [ ] Console Logger behavior.
    - [ ] Word animation behavior.
