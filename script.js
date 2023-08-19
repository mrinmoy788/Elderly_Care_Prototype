document.addEventListener("DOMContentLoaded", function () {
    const exerciseList = document.getElementById("exercise-list");
    const addExerciseForm = document.getElementById("add-exercise-form");
    const exerciseInput = document.getElementById("exercise-input");
    const addExerciseButton = document.getElementById("add-exercise-button");
    const successMessage = document.getElementById("success-message");
    const deleteSuccessMessage = document.getElementById("delete-success");
    const alertMessage = document.getElementById("alert-message");

    const exercises = [
        "Stretching exercises for 10 minutes",
        "Yoga session for 20 minutes",
        "15-minute brisk walk around the garden"
    ];

    function updateExerciseList() {
        exerciseList.innerHTML = ""; // Clear the list

        exercises.forEach((exercise, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = exercise;
            listItem.innerHTML += ` <button class="delete-button" data-index="${index}">Delete</button>`;
            exerciseList.appendChild(listItem);
        });

        addDeleteEventListeners();
    }

    function addDeleteEventListeners() {
        const deleteButtons = document.querySelectorAll(".delete-button");
        deleteButtons.forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                exercises.splice(index, 1);
                updateExerciseList();
                showDeleteSuccessMessage();
            });
        });
    }

    function showDeleteSuccessMessage() {
        deleteSuccessMessage.style.display = "block";
        setTimeout(() => {
            deleteSuccessMessage.style.display = "none";
        }, 2000);
    }

    addExerciseForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const newExercise = exerciseInput.value.trim();
        if (newExercise !== "") {
            exercises.push(newExercise);
            exerciseInput.value = "";
            updateExerciseList();
            showAddSuccessMessage();
        } else {
            showAlertMessage("Please enter a task.");
        }
    });

    function showAddSuccessMessage() {
        successMessage.style.display = "block";
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 2000);
    }

    function showAlertMessage(message) {
        alertMessage.textContent = message;
        alertMessage.style.display = "block";
        setTimeout(() => {
            alertMessage.style.display = "none";
        }, 2000);
    }

    updateExerciseList();
});
