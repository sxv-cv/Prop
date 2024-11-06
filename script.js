document.addEventListener('DOMContentLoaded', () => {
    const continueBtn = document.querySelector('.continue-btn');
    const yesBtn = document.querySelector('.yes-btn');
    const noBtn = document.querySelector('.no-btn');
    const steps = document.querySelectorAll('.step');
    let currentStep = 0;

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === stepIndex);
        });
    }

    continueBtn.addEventListener('click', () => {
        currentStep = 1;
        showStep(currentStep);
    });

    yesBtn.addEventListener('click', () => {
        currentStep = 2;
        showStep(currentStep);
    });

    noBtn.addEventListener('mouseover', () => {
        const maxX = window.innerWidth - noBtn.clientWidth;
        const maxY = window.innerHeight - noBtn.clientHeight;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });

    showStep(currentStep);
});