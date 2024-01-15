![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/t/emilasheras/s6-rctjs/main?style=flat-square&color=ff9900) 
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/emilasheras/s6-rctjs/main?style=flat-square&color=ff9900) 
![GitHub repo size](https://img.shields.io/github/repo-size/emilasheras/s6-rctjs?style=flat-square&color=ff9900) 

# 🎃 Syx + ⚛ React + ⚡ Vite

### Brief
React app made from the [Syx6](https://github.com/emilasheras/s6) project.

## Quick start
1. Clone this repo
```bash
git clone https://github.com/emilasheras/s6-rctjs
```
2. Install dependencies
```bash
npm install
```
3. Run the app
```bash
npm run dev
```
4. Open your browser at http://localhost:{{PORT}}

## Production Deployment

1. Clone this repo (see above)

2. Install dependencies (see above)

3. Create and populate the `.env.production` following the structure of `.env.example`

4. Build the app
```bash
npm run build
```
This creates the dist folder with the static files.

4. Preview the app build
```bash
npm run preview
```

5. Copy the contents of the dist folder to your server and serve it with your favorite web server.

## Known issues

Rollup missing dependency:
```bash
npm install rollup
```