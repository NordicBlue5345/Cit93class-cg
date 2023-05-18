const formEl = document.getElementById('form');
const output = document.getElementById('output');

formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    const type = e.target.type.value;
    const reps = parseFloat(e.target.reps.value);
    const time = parseFloat(e.target.time.value);

    // Create a string with the exercise information
    const exerciseInfo = `Type: ${type}, Reps: ${reps}`;

    // Create a new paragraph element to display the exercise information
    const exercisePara = document.createElement('p');
    exercisePara.textContent = exerciseInfo;

    // Append the paragraph element to the output container after a delay of 1 second
    setTimeout(function() {
        output.appendChild(exercisePara);
    }, 1000);

    // Reset the form inputs
    formEl.reset();
});