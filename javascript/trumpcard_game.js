function request_Json(pokemon_number){
    url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon_number.toString()
    var httpreq = new XMLHttpRequest();
    httpreq.open("GET",url,false);
    httpreq.send(null);
    return JSON.parse(httpreq.responseText);
    
}

function get_card_attributes(json){
    hp = json.stats[0].base_stat
    attack = json.stats[1].base_stat
    defense = json.stats[2].base_stat
    special_attack = json.stats[3].base_stat
    special_defense = json.stats[4].base_stat
    speed = json.stats[5].base_stat
    weight = json['weight']/10


    if (attack >= special_attack){
        final_attack = attack;
    }
    else{
        final_attack = special_attack;
    }


    if (defense >= special_defense){
        final_defense = defense;
    }
    else{
        final_defense = special_defense;
    }


    stats = [hp, final_attack, final_defense, speed, weight];
    return stats;
}

function get_pokemon_name(json){
    return json.name
}

function get_sprite_url(json){
    return json['sprites']['other']['official-artwork']['front_default']
}

function check_card_already_exist(name){
    for (let i = 0; i < cards.lenght ; i++){
        if (name == cards[i].name){
            return true;
        }
    }
}

function create_card(card_name, attributes_list, sprite_url){
    var card  = {name: card_name,
        attributes: {
            health:  attributes_list[0],
            attack:  attributes_list[1],
            defense:  attributes_list[2],
            speed:  attributes_list[3],
            weight: attributes_list[4]
        },
        sprite: sprite_url,
        supertrump: false
    }
    cards.push(card);
    return card;
}

function choose_random_card_number(){
    min_number = Math.ceil(1);
    max_number = Math.floor(pokemon_number);
    return parseInt(Math.floor(Math.random() * (max_number - min_number)) + min_number);
}

function create_random_card(){
    var json = request_Json(choose_random_card_number());
    var pokemon_name = get_pokemon_name(json);
    if (check_card_already_exist(pokemon_name)){
        json = request_Json(choose_random_card_number());
    }

    var stats = get_card_attributes(json);
    var sprite_url = get_sprite_url(json)
    var card = create_card(pokemon_name, stats, sprite_url);
    return card;
}


function randomCard(){
    enemy_card = create_random_card();
    player_card = create_random_card();

    while (player_card.name == enemy_card.name){
        enemy_card = create_random_card();
    }
    
    document.getElementById('carta-maquina').innerHTML = "<img src ='assets/images/card_back.png' style = 'width: inherit; height: inherit; position: absolut;'>";
    document.getElementById('btnSortear').disabled = true;
    choose_stats();
    document.getElementById('resultado').style.opacity = 0;
    show_player_card()
}

function show_player_card(){
    var div_player_card = document.getElementById('carta-jogador');

    var moldura = "<img src ='assets/images/card_design.png' style = 'width: inherit; height: inherit; position: absolut;'>";
    var tagHTML = "<div id = 'opcoes' class='carta-status'>";
    var card_text = ""
    for (var attribute in player_card.attributes){
        card_text += `<p class = card-text>${player_card.attributes[attribute]}`
        if (player_card.attribute == weight){
            card_text += ` kg</p>`;
        }
        else
            card_text += `</p>`;

    }
    var card_name = `<p class = "carta-subtitle" style="clear: both">${player_card.name}</p>`;
    card_sprite = `<img src="${player_card.sprite}" class = pokemon-image height = "190px", width = "auto">` ;
    div_player_card.innerHTML = moldura + card_name +  card_sprite  + tagHTML + card_text + '</div>' ;
}

function show_enemy_card(){
    var div_enemy_card = document.getElementById('carta-maquina');

    var moldura = "<img src ='assets/images/card_design.png' style = 'width: inherit; height: inherit; position: absolut;'>";
    var tagHTML = "<div id = 'opcoes' class='carta-status'>";
    var card_text = ""
    for (var attribute in enemy_card.attributes){
        card_text += `<p class = card-text>${enemy_card.attributes[attribute]}`
        if (enemy_card.attribute == weight){
            card_text += ` kg</p>`;
        }
        else
            card_text += `</p>`;

    }
    var card_name = `<p class = "carta-subtitle" style="clear: both">${enemy_card.name}</p>`;
    card_sprite = `<img src="${enemy_card.sprite}" class = pokemon-image height = "190px", width = "auto">` ;
    div_enemy_card.innerHTML = moldura + card_name +  card_sprite  + tagHTML + card_text + '</div>' ;
}


function choose_stats(){
    var options = document.getElementById("options");
    var text = ""
    for (var attribute in player_card.attributes){
        text += `<button type="button" name="atribute" class="choose-attribute" onClick="battle('` + attribute + `')"> ` + capitalize_first_letter(attribute) + `</button>`

    }
    options.innerHTML = text;
}

function battle(attribute){
    var result = document.getElementById('resultado');
    var player_value = player_card.attributes[attribute];
    var enemy_value = enemy_card.attributes[attribute];
    var options = document.getElementById("options");

    if (player_value > enemy_value){
        result.innerHTML = 'Voce Ganhou!';
        document.getElementById('resultado').style.opacity = 1;
        //options.innerHTML = '';
    }
    else if(player_value < enemy_value){
            result.innerHTML = 'Voce perdeu!';
            document.getElementById('resultado').style.opacity = 1;
            //options.innerHTML = '';
    }
    else if( player_value == enemy_value){
        result.innerHTML = 'Empate!';
        document.getElementById('resultado').style.opacity = 1;
        //options.innerHTML = '';
    }
    
    document.getElementById("opcoes").innerHTML = '';
    document.getElementById('btnSortear').disabled = false;
    show_player_card();
    show_enemy_card();

    document.querySelectorAll('button.choose-attribute').forEach(elem => {
        elem.disabled = true;
    });
    
    
    
    return false;
}

function capitalize_first_letter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

var cards = [];
pokemon_number = 151;
var enemy_card;
var player_card;
