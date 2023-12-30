# Explanation on the `public` folder weirdness

## `public` folder
Vite only translates relative path references if declared in an `import` statement.
For the purpose of testing the `.json` files with `fetch()`, I temporarily moved 
them to the `public` folder. 
This doesnt happen with `.js` files because they are usually defined in import statements. (in my use-cases at least)

## `src` folder
This mirrors the `src` folder in the `vite` project. For the same reason as above.

All this is for `testing` purposes and only temporary until I find a better way to test the `.json` files, or until API calls are implemented in this project. Either way, I wouldn't want my assets publicly available anyways.