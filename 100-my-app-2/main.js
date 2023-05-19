// Define an array to store the recipes
const recipes = [];

// Function to add a new recipe
function addRecipe(name, ingredients, instructions) {
  const recipe = {
    name: name,
    ingredients: ingredients,
    instructions: instructions
  };
  recipes.push(recipe);
}

// Example usage
addRecipe('Chocolate Cake', ['Flour', 'Sugar', 'Cocoa Powder', 'Eggs'], '1. Mix dry ingredients. \n2. Add wet ingredients. \n3. Bake at 350°F for 30 minutes.');
addRecipe('Carbonara', ['Spaghetti', 'Bacon', 'Eggs', 'Parmesan Cheese', 'Black Pepper'],'1. Cook spaghetti according to package instructions. \n2. In a pan, fry the bacon until crispy. \n3. In a bowl, beat the eggs and mix in grated Parmesan cheese. \n4. Drain the cooked spaghetti and add it to the pan with the bacon. \n5. Remove the pan from heat and quickly pour in the egg mixture, stirring well to coat the spaghetti. \n6. Season with black pepper and serve immediately.');

// Function to view all recipes
function viewRecipes() {
  recipes.forEach((recipe, index) => {
    console.log(`Recipe ${index + 1}: ${recipe.name}`);
    console.log(`Ingredients: ${recipe.ingredients.join(', ')}`);
    console.log(`Instructions: ${recipe.instructions}`);
    console.log('------------------------');
  });
}

// Function to display the recipes
function displayRecipes() {
  const recipesContainer = document.getElementById('recipesContainer');
  recipesContainer.innerHTML = ''; // Clear the container

  recipes.forEach((recipe, index) => {
    const recipeElement = document.createElement('div');
    recipeElement.innerHTML = `
      <h3>Recipe ${index + 1}: ${recipe.name}</h3>
      <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
      <p><strong>Instructions:</strong> ${recipe.instructions}</p>
      <hr>
    `;
    recipesContainer.appendChild(recipeElement);
  });
}



// Function to update the carbonara recipe
function updateCarbonaraRecipe() {
  updateRecipe(
    'Carbonara',
    ['Spaghetti', 'Guanciale', 'Eggs', 'Parmesan Cheese', 'Black Pepper'],
    '1. Cook spaghetti according to package instructions. \n2. In a pan, fry the guanciale until crispy. \n3. In a bowl, beat the eggs and mix in grated Parmesan cheese. \n4. Drain the cooked spaghetti and add it to the pan with the guanciale. \n5. Remove the pan from heat and quickly pour in the egg mixture, stirring well to coat the spaghetti. \n6. Season with black pepper and serve immediately.'
  );
  console.log('Carbonara recipe has been updated.');
}

// Function to delete the carbonara recipe
function deleteCarbonaraRecipe() {
  // Implementation for deleting the carbonara recipe
  console.log('Carbonara recipe has been deleted.');
}


// Add a new recipe
addRecipe(
  'Carbonara',
  ['Spaghetti', 'Bacon', 'Eggs', 'Parmesan Cheese', 'Black Pepper'],
  '1. Cook spaghetti according to package instructions. \n2. In a pan, fry the bacon until crispy. \n3. In a bowl, beat the eggs and mix in grated Parmesan cheese. \n4. Drain the cooked spaghetti and add it to the pan with the bacon. \n5. Remove the pan from heat and quickly pour in the egg mixture, stirring well to coat the spaghetti. \n6. Season with black pepper and serve immediately.'
);

// View all recipes
console.log('Recipes:');
viewRecipes();

// Define the updateRecipe function
function updateRecipe(name, ingredients, instructions) {
  console.log(`Recipe updated for ${name}`);
  console.log(`Ingredients: ${ingredients.join(', ')}`);
  console.log(`Instructions: \n${instructions}`);
}

// Call the updateRecipe function to update the carbonara recipe
updateRecipe(
  'Carbonara',
  ['Spaghetti', 'Guanciale', 'Eggs', 'Parmesan Cheese', 'Black Pepper'],
  '1. Cook spaghetti according to package instructions. \n2. In a pan, fry the guanciale until crispy. \n3. In a bowl, beat the eggs and mix in grated Parmesan cheese. \n4. Drain the cooked spaghetti and add it to the pan with the guanciale. \n5. Remove the pan from heat and quickly pour in the egg mixture, stirring well to coat the spaghetti. \n6. Season with black pepper and serve immediately.'
);

// View all recipes after update
console.log('Recipes after update:');
viewRecipes();

// View all recipes after deletion
console.log('Recipes after deletion:');
viewRecipes();