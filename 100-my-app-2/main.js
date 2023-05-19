// Function to add a new recipe
// Define an array to store the recipes
let recipes = [];

// Function to add a new recipe
function addRecipe(event) {
  event.preventDefault();

  // Get form input values
  const recipeNameInput = document.getElementById('recipeName');
  const recipeIngredientsInput = document.getElementById('recipeIngredients');
  const recipeInstructionsInput = document.getElementById('recipeInstructions');

  // Create a new recipe object
  const recipe = {
    name: recipeNameInput.value,
    ingredients: recipeIngredientsInput.value.split('\n'),
    instructions: recipeInstructionsInput.value.split('\n')
  };

  // Add the recipe to the recipes array
  recipes.push(recipe);

  // Clear the form inputs
  recipeNameInput.value = '';
  recipeIngredientsInput.value = '';
  recipeInstructionsInput.value = '';

  // Update the recipe list
  updateRecipeList();

  console.log(`Recipe "${recipe.name}" has been added.`);

 // Make a decision based on the recipe name
    if (recipe.name.toLowerCase() === 'pizza') {
      console.log('Great choice! You added a pizza recipe.');
    } else {
      console.log(`You added a ${recipe.name} recipe.`);
    }
  

  // Delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    const index = recipes.indexOf(recipe);
    deleteRecipe(index);
  });
  listItem.appendChild(deleteButton);

  recipeList.appendChild(listItem);
}

// Function to delete a recipe
function deleteRecipe(index) {
  const recipe = recipes[index];
  recipes.splice(index, 1);
  updateRecipeList();
  console.log(`Recipe "${recipe.name}" has been deleted.`);
}



// Function to update the recipe list
function updateRecipeList() {
  const recipeList = document.getElementById('recipeList');
  recipeList.innerHTML = ''; // Clear the list

  recipes.forEach((recipe, index) => {
    const listItem = document.createElement('li');

    // Recipe name
    const nameElement = document.createElement('h3');
    nameElement.textContent = recipe.name;
    listItem.appendChild(nameElement);

    // Ingredients
    const ingredientsElement = document.createElement('p');
    ingredientsElement.textContent = `Ingredients: ${recipe.ingredients.join(', ')}`;
    listItem.appendChild(ingredientsElement);

    // Instructions
    const instructionsElement = document.createElement('p');
    instructionsElement.textContent = `Instructions: ${recipe.instructions.join('\n')}`;
    listItem.appendChild(instructionsElement);

    // Edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      editRecipe(index);
    });
    listItem.appendChild(editButton);

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteRecipe(index);
    });
    listItem.appendChild(deleteButton);

    recipeList.appendChild(listItem);
  });
}

// Function to edit a recipe
function editRecipe(index) {
  const recipe = recipes[index];

  // Set form inputs with recipe data
  const recipeNameInput = document.getElementById('recipeName');
  const recipeIngredientsInput = document.getElementById('recipeIngredients');
  const recipeInstructionsInput = document.getElementById('recipeInstructions');

  recipeNameInput.value = recipe.name;
  recipeIngredientsInput.value = recipe.ingredients.join('\n');
  recipeInstructionsInput.value = recipe.instructions.join('\n');

  // Update the recipe
  document.getElementById('recipeForm').addEventListener('submit', (event) => {
    event.preventDefault();

    recipe.name = recipeNameInput.value;
    recipe.ingredients = recipeIngredientsInput.value.split('\n');
    recipe.instructions = recipeInstructionsInput.value.split('\n');

    // Clear the form inputs
    recipeNameInput.value = '';
    recipeIngredientsInput.value = '';
    recipeInstructionsInput.value = '';

    // Update the recipe list
    updateRecipeList();

    console.log(`Recipe "${recipe.name}" has been updated.`);
  });
}

// Event listener for adding a recipe
document.getElementById('recipeForm').addEventListener('submit', addRecipe);

// Initial recipe list
updateRecipeList();