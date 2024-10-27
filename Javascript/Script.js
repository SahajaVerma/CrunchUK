function showMessage() {
    // Trigger 75ms vibration (if supported by device)
    if (navigator.vibrate) {
        navigator.vibrate(75);
    }
    // Display the popup message
    alert('Hello, PsyQuiz');
}
