function to_miles(){
    var km = document.getElementById('km_miles').value;
    if (km == ''){
        km = 1;

    }
    document.getElementById('miles_km').value = (km*1.61).toFixed(2);
}

function to_km(){
    var miles = document.getElementById('miles_km').value;
    if (miles == ''){
        miles = 1.61;

    }
    document.getElementById('km_miles').value = (miles/1.61).toFixed(2);
}

function to_fahrenheit(){
    var celsius = document.getElementById('celsius_fahrenheit').value;
    if (celsius == ''){
        celsius = 24;
    }

    document.getElementById('fahrenheit_celsius').value = ((celsius*1.8) + 32).toFixed(2);
}

function to_celsius(){
    var fahrenheit = document.getElementById('fahrenheit_celsius').value;
    if (fahrenheit == ''){
        fahrenheit = 75.20;
    }
    document.getElementById('celsius_fahrenheit').value = ((fahrenheit-32)*(5/9)).toFixed(2);
}

function to_lb(){
    var kg = document.getElementById('kg_lb').value;
    if (kg == ''){
        kg = 1;
    }
    document.getElementById('lb_kg').value = (kg*2.20462).toFixed(2);
}

function to_kg(){
    var lb = document.getElementById('lb_kg').value;
    if (lb == ''){
        lb = 2.20462;
    }
    document.getElementById('kg_lb').value = (lb/2.20462).toFixed(2);
}

function to_oz(){
    var ml = document.getElementById('ml_oz').value;
    if (ml == ''){
        ml = 1;
    }
    document.getElementById('oz_ml').value = (ml*0.0338).toFixed(2);
}

function to_ml(){
    var oz = document.getElementById('oz_ml').value;
    if (oz == ''){
        oz = 1;
    }
    document.getElementById('ml_oz').value = (oz*29.573).toFixed(2);
}

function to_ft(){
    var m = document.getElementById('m_ft').value;
    if (m == ''){
        m = 1;
    }
    document.getElementById('ft_m').value = (m/3.281).toFixed(2);
}

function to_m(){
    var ft = document.getElementById('ft_m').value;
    if (ft == ''){
        ft = 3.28084;
    }
    document.getElementById('m_ft').value = (ft*3.28084).toFixed(2);
}
