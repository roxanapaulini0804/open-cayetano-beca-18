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

    let inputElement = document.getElementById('LEADCF6');
    let inputHorarios = document.getElementById('LEADCF22');

    inputElement.addEventListener("change", () => {

        let carrerasConHorario = [
            "PSICOLOGIA", 
            "EDUCACION",
            "ADMINISTRACION", 
            "ADMINISTRACION EN SALUD", 
            "BIOLOGIA", 
            "INGENIERIA AMBIENTAL", 
            "INGENIERIA INDUSTRIAL", 
            "INGENIERIA BIOMEDICA", 
            "INGENIERIA INFORMATICA", 
            "FARMACIA Y BIOQUIMICA",
            "NUTRICION",
            "MEDICINA VETERINARIA Y ZOOTECNIA",

        ];

        if(carrerasConHorario.includes(inputElement.value)) {
            removeOptions(inputHorarios);
            inputHorarios.style.backgroundColor = "white";
            if( inputElement.value === "PSICOLOGIA" ){
                inputHorarios.disabled = false;
                createFirstOption(inputHorarios);
                inputHorarios.add(new Option("10:30 a.m. - Psicólogos en acción", "10:30 A.M. - Psicólogos en acción"));
            } else if( inputElement.value === "EDUCACION" ) {
                inputHorarios.disabled = false;
                createFirstOption(inputHorarios);
                inputHorarios.add(new Option("10:30 a.m. - Inteligencia Artificial en Educación", "10:30 A.M. - Inteligencia Artificial en Educación"));
            } else if( inputElement.value === "ADMINISTRACION" ) {
                inputHorarios.disabled = false;
                createFirstOption(inputHorarios);
                inputHorarios.add(new Option("10:30 a.m. - Producto innovador con lego 1", "10:30 A.M. - Producto innovador con lego 1"));
                inputHorarios.add(new Option("11:30 a.m. - Producto innovador con lego 2", "11:30 A.M. - Producto innovador con lego 2"));
                inputHorarios.add(new Option("12:30 a.m. - Producto innovador con lego 3", "12:30 A.M. - Producto innovador con lego 3"));
            } else if( inputElement.value === "ADMINISTRACION EN SALUD" ) {
                inputHorarios.disabled = false;
                createFirstOption(inputHorarios);
                inputHorarios.add(new Option("10:30 a.m. - Toma de decisiones en crisis", "10:30 A.M. - Toma de decisiones en crisis"));
            } else if( inputElement.value === "BIOLOGIA" ) {
                inputHorarios.disabled = false;
                createFirstOption(inputHorarios);
                inputHorarios.add(new Option("10:30 a.m. - Extracción de ADN 1", "10:30 A.M. - Extracción de ADN 1"));
                inputHorarios.add(new Option("11:30 a.m. - Extracción de ADN 2", "11:30 A.M. - Extracción de ADN 2"));
            } else if( inputElement.value === "INGENIERIA AMBIENTAL" ) {
                inputHorarios.disabled = false;
                createFirstOption(inputHorarios);
                inputHorarios.add(new Option("10:30 a.m. - Gennerando energía eléctrica limpia 1", "10:30 A.M. - Gennerando energía eléctrica limpia 1"));
                inputHorarios.add(new Option("11:30 a.m. - Gennerando energía eléctrica limpia 2", "11:30 A.M. - Gennerando energía eléctrica limpia 2"));
            } else if( inputElement.value === "INGENIERIA INDUSTRIAL" ) {
                inputHorarios.disabled = false;
                createFirstOption(inputHorarios);
                inputHorarios.add(new Option("10:40 a.m. - Restricciones en la línea de producción 1", "10:40 A.M. - Restricciones en la línea de producción 1"));
                inputHorarios.add(new Option("11:40 a.m. - Restricciones en la línea de producción 2", "11:40 A.M. - Restricciones en la línea de producción 2"));
            } else if( inputElement.value === "INGENIERIA INFORMATICA" ) {
                inputHorarios.disabled = false;
                createFirstOption(inputHorarios);
                inputHorarios.add(new Option("10:30 a.m. - Realidad virtual con visores 1", "10:30 A.M. - Realidad virtual con visores 1"));
                inputHorarios.add(new Option("11:30 a.m. - Realidad virtual con visores 2", "11:30 A.M. - Realidad virtual con visores 2"));
            } else if( inputElement.value === "INGENIERIA BIOMEDICA" ) {
                inputHorarios.disabled = false;
                createFirstOption(inputHorarios);
                inputHorarios.add(new Option("10:30 a.m. - Ingeniería de tejidos y medicina regenerativa", "10:30 A.M. - Ingeniería de tejidos y medicina regenerativa"));
                inputHorarios.add(new Option("11:30 a.m. - Comprendiendo las señales biomedicas", "11:30 A.M. - Comprendiendo las señales biomedicas"));
            } else if( inputElement.value === "FARMACIA Y BIOQUIMICA" ) {
                inputHorarios.disabled = false;
                createFirstOption(inputHorarios);
                inputHorarios.add(new Option("10:30 a.m. - Elabora tu propio ungüento de eucalipto", "10:30 A.M. - Elabora tu propio ungüento de eucalipto"));
                inputHorarios.add(new Option("11:30 a.m. - Fabrica tabletas de calidad con facilidad", "11:30 A.M. - Fabrica tabletas de calidad con facilidad"));
            } else if( inputElement.value === "MEDICINA VETERINARIA Y ZOOTECNIA" ) {
                inputHorarios.disabled = false;
                createFirstOption(inputHorarios);
                inputHorarios.add(new Option("10:30 a.m. - Ecografía en ovinos 1", "10:30 A.M. - Ecografía en ovinos 1"));
                inputHorarios.add(new Option("11:15 a.m. - Ecografía en ovinos 2", "11:15 A.M. - Ecografía en ovinos 2"));
                inputHorarios.add(new Option("12:00 a.m. - Visita por la Facultad", "12:00 A.M. - Visita por la Facultad"));
            } else if( inputElement.value === "NUTRICION" ) {
                inputHorarios.disabled = false;
                createFirstOption(inputHorarios);
                inputHorarios.add(new Option("10:30 a.m. - Regula tus emociones a través de la Nutrición", "10:30 A.M. - Regula tus emociones a través de la Nutrición"));
                inputHorarios.add(new Option("11:30 a.m. - Sé un detective de la Nutrición", "11:30 A.M. - Sé un detective de la Nutrición"));
            } else {
            }
        }else {
            if(!carrerasConHorario.includes(inputElement.value)) {
                inputHorarios.style.backgroundColor = "gray";
            }
            inputHorarios.disabled = true;
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

