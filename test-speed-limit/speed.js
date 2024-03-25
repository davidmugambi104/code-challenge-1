function speedText() {
    const speedInput = document.getElementById("speedInput");
    const pointsPrint = document.getElementById("pointsPrint");
    const speed = parseInt(speedInput.value);
    
    let demeritPoints = 0;

    switch (true) {
        case isNaN(speed) || speed < 0:
            pointsPrint.textContent = 'Invalid entry. Speed should be a positive number.';
            break;
        case speed <= 70:
            pointsPrint.textContent = 'OK';
            break;
        default:
            demeritPoints = Math.floor((speed - 70) / 5);
            pointsPrint.textContent = 'Driver\'s points = ' + demeritPoints;

            if (demeritPoints > 12) {
                pointsPrint.textContent += ', license suspended';
            }
            break;
    }
}