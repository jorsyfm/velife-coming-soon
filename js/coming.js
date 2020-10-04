const getRemainingTime = deadline => {
    let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
        remainTime
    };

};

const countdown = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);

    const timerUpdate = setInterval(() => {
        let t = getRemainingTime(deadline);
        el.innerHTML = `
            <div class='home-clock-time'>
                <span class='time'>
                    ${t.remainDays}
                </span>
                <span class='text'>
                    Días
                </span>
            </div>
            <div class='home-clock-time'>
                <span class='time'>
                    ${t.remainHours}
                </span>
                <span class='text'>
                    Horas
                </span>
            </div>
            <div class='home-clock-time'>
                <span class='time'>
                    ${t.remainMinutes}
                </span>
                <span class='text'>
                    Minutos
                </span>
            </div>
            <div class='home-clock-time'>
                <span class='time'>
                    ${t.remainSeconds}
                </span>
                <span class='text'>
                    Segundos
                </span>
            </div>
        `;

        if (t.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
        }

    }, 1000);
};

countdown('Jan 01 2021 00:00:00  GMT-0500', 'clock', '¡Ya empezó!');