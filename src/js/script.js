window.addEventListener("load", () => {

    let DATE_TARGET = new Date('08/18/2024 9:00 AM');
    // DOM for render
    let SPAN_DAYS = document.querySelector('.number_days');
    
    let SPAN_HOURS = document.querySelector('.hours');
    let SPAN_MINUTES = document.querySelector('.minutes');
    let SPAN_SECONDS = document.querySelector('.seconds');
    // Milliseconds for the calculations
    const MILLISECONDS_OF_A_SECOND = 1000;
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;

    function updateCountdown() {
        // Calcs
        const NOW = new Date()
        const DURATION = DATE_TARGET - NOW;
        const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
        const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
        const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
        const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
        // Thanks Pablo Monteserín (https://pablomonteserin.com/cuenta-regresiva/)
    
        // Render
        SPAN_DAYS.textContent = REMAINING_DAYS;
        SPAN_HOURS.textContent = REMAINING_HOURS;
        SPAN_MINUTES.textContent = REMAINING_MINUTES;
        SPAN_SECONDS.textContent = REMAINING_SECONDS;
    }

    updateCountdown();
    // Refresh every second
    setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);

    let DATE_TARGET_DESK = new Date('08/18/2024 9:00 AM');
    // DOM for render
    let SPAN_DAYS_DESK = document.querySelector('.number_days_desktop');
    
    let SPAN_HOURS_DESK = document.querySelector('.hours_desktop');
    let SPAN_MINUTES_DESK = document.querySelector('.minutes_desktop');
    let SPAN_SECONDS_DESK = document.querySelector('.seconds_desktop');
    // Milliseconds for the calculations
    const MILLISECONDS_OF_A_SECOND_DESK = 1000;
    const MILLISECONDS_OF_A_MINUTE_DESK = MILLISECONDS_OF_A_SECOND_DESK * 60;
    const MILLISECONDS_OF_A_HOUR_DESK = MILLISECONDS_OF_A_MINUTE_DESK * 60;
    const MILLISECONDS_OF_A_DAY_DESK = MILLISECONDS_OF_A_HOUR_DESK * 24;

    function updateCountdown2() {
        // Calcs
        const NOW_DESK = new Date()
        const DURATION_DESK = DATE_TARGET_DESK - NOW_DESK;
        const REMAINING_DAYS_DESK = Math.floor(DURATION_DESK / MILLISECONDS_OF_A_DAY_DESK);
        const REMAINING_HOURS_DESK = Math.floor((DURATION_DESK % MILLISECONDS_OF_A_DAY_DESK) / MILLISECONDS_OF_A_HOUR_DESK);
        const REMAINING_MINUTES_DESK = Math.floor((DURATION_DESK % MILLISECONDS_OF_A_HOUR_DESK) / MILLISECONDS_OF_A_MINUTE_DESK);
        const REMAINING_SECONDS_DESK = Math.floor((DURATION_DESK % MILLISECONDS_OF_A_MINUTE_DESK) / MILLISECONDS_OF_A_SECOND_DESK);
        // Thanks Pablo Monteserín (https://pablomonteserin.com/cuenta-regresiva/)
    
        // Render
        SPAN_DAYS_DESK.textContent = REMAINING_DAYS_DESK;
        SPAN_HOURS_DESK.textContent = REMAINING_HOURS_DESK;
        SPAN_MINUTES_DESK.textContent = REMAINING_MINUTES_DESK;
        SPAN_SECONDS_DESK.textContent = REMAINING_SECONDS_DESK;
    }

    updateCountdown();
    // Refresh every second
    setInterval(updateCountdown2, MILLISECONDS_OF_A_SECOND_DESK);

    function removeOptions(selectElement) {
        var i, L = selectElement.options.length - 1;
        for(i = L; i >= 0; i--) {
            selectElement.remove(i);
        }
    }

    function createFirstOption( input ) {
        let opt = document.createElement('option');
        opt.text = 'Horario de Taller';
        opt.value = "";
        opt.disabled = true;
        opt.selected = true;
        return input.options.add(opt);
    }

    let inputElement = document.getElementById('LEADCF220');
    let inputHidden = document.getElementById('formTerminosSalud');

    inputElement.addEventListener("change", () => {

        let carrerasConHorario = [
            "MEDICINA",
            "ENFERMERIA",
            "ESTOMATOLOGIA",
            "PSICOLOGIA", 
            "MEDICINA VETERINARIA Y ZOOTECNIA",
            "TERAPIA FISICA Y REHABILITACION",
            "RADIOLOGIA",
            "LABORATORIO CLINICO",
            "TERAPIA OCUPACIONAL",
            "TERAPIA DE AUDICION, VOZ Y LENGUAJE"  
        ];

        if(carrerasConHorario.includes(inputElement.value)) {
            inputHidden.style.display = 'grid';
        }else {
            if(!carrerasConHorario.includes(inputElement.value)) {
                inputHidden.style.display = 'none';
            }
            inputHidden.style.display = 'none';
        }
    })

    let boton = document.querySelector('.bloqueFloat');

   window.addEventListener("scroll", (e) => {


        if( screen.width >= 320 && screen.width <= 1019 ) {
            if( window.scrollY >= 650 && window.scrollY <= 4300 ) {
                boton.classList.add('bloqueFloatActive')
            }else {
                boton.classList.remove('bloqueFloatActive')
            }
        }

        // console.log(window.scrollY)
       
        if( screen.width >= 1020 && screen.width <= 1280 ) {
            // console.log(window.scrollY);
            if( window.scrollY >= 350 && window.scrollY <= 1500 ) {
                boton.classList.add('bloqueFloatActive')
            }else {
                boton.classList.remove('bloqueFloatActive')
            }
        }

        if( screen.width >= 1360 && screen.width <= 2600 ) {
            if( window.scrollY >= 350 && window.scrollY <= 2000 ) {
                boton.classList.add('bloqueFloatActive')
            }else {
                boton.classList.remove('bloqueFloatActive')
            }
        }

   })

})

