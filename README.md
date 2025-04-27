# Eliq-drinks-app
This project is a modern and white-label-ready Angular application that fetches and displays drink-related information using a public API. It features a stylish UI, dynamic branding support, and a modular structure that allows for easy configuration and expansion.

# Config Management and White-Labelling
One of the core ideas in this application is the ability to customize the app's appearance and branding using a single JSON file — config.json. This makes the app highly reusable across different clients or branding requirements without changing the code.

# Contents of config.json
The config.json file holds settings like:
App name, Logo URL, Brand colors (primary, background, text, accent),Font family, theme.

# How it works
1. The config file is loaded before the app starts (before bootstrapApplication) using a ConfigService.

2. The branding variables are then injected into a <style> tag dynamically into the document head.

3. The CSS variables are used globally in the app through the :root selector.

This approach ensures the brand can be customized at runtime without rebuilding the app.

# Services
All API logic is moved out of the components into Angular services. This makes the code cleaner, more maintainable, and easier to test.
DrinkService contains:
    getDrinks() – fetches all drinks
    getDrinkById(id) – fetches single drink details

# Trade Offs
1. I introduced config-loader.js to handle dynamic branding before Angular boots, ensuring smoother UX and simplifying white-labeling. Here’s why:

    a. Early Styling: Applies brand styles (CSS variables) before Angular loads, preventing style flashes and ensuring the app loads styled from the start.

    b. Simplifies White Labeling: Same build for multiple brands, change config.json, no need to rebuild.

    c. Avoids Angular Complexity: No need for AppInitializer or injecting configs into services/components; styles are set globally outside Angular.

    d. Tiny and Maintainable: config-loader.js is lightweight (~few lines) and simple to manage.

2. Keeping the config structure simple (but tidy)
While it might have been tempting to flatten everything in the config for easier access, I decided to group brand-related settings under a brand key. It keeps things more organized and readable, especially when the config grows over time.

3. Working with the Cocktail API's format
the cocktail API lists ingredients like strIngredient1, strIngredient2, and so on — instead of giving a nice clean array. To work around this, I wrote a little logic to loop through them and build our own strIngredients array. It adds a bit of code, but gives us a much cleaner way to use the data in the UI.

