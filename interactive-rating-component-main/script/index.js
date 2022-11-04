document.addEventListener('DOMContentLoaded', () => {
    const ratingNumber = document.location.href.slice(-1);
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = `You selected ${ratingNumber} out of 5`
})