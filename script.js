document.getElementById("bg-music").volume=0.1;
const introText = document.getElementById('main-txt').innerHTML;

function swap(){
    const mainText = document.getElementById('main-txt');
    mainText.innerHTML = "Pronto para sua jornada?\nEscolha uma opção!";
}

function options(){
    const optionsList = document.getElementById('menu-options');

    // Torna o  botão "Próximo" invisível
    const nextBtn = document.getElementById('next-button');
    nextBtn.style.display = 'none';

    // Cria o  botão "Começar"
    const startBtn = document.createElement('button');
    startBtn.id = 'startBtn';
    startBtn.innerHTML = 'Começar';
    optionsList.appendChild(startBtn);

    // Cria o botão "Voltar"
    const backBtn = document.createElement('button');
    backBtn.id = 'backBtn';
    backBtn.innerHTML = 'Voltar';
    backBtn.onclick = function(){getBack()};
    optionsList.appendChild(backBtn);
}

function getBack(){
    const optionsList = document.getElementById('menu-options');
    const mainText = document.getElementById('main-txt');

    // Retorna ao menu principal
    const nextBtn = document.getElementById('next-button');
    nextBtn.style.display = 'inline-block';

    // Remove os botões "Começar" e "Voltar"
    const startBtn = document.getElementById('startBtn');
    if (startBtn) startBtn.remove();
    const backBtn = document.getElementById('backBtn');
    if (backBtn) backBtn.remove();

    mainText.innerHTML = introText;
}

function playCry(){
    const pikachuSprite = document.getElementById('pikachu-sprite');
    var pikachuCry = new Audio('/PokéQuiz!/audio/pikachu-cry.mp3');
    pikachuSprite.addEventListener('click', function(){
        pikachuCry.play();
        pikachuCry.volume = 0.15;
    })

    const eeveeSprite = document.getElementById('eevee-sprite');
    var eeveeCry = new Audio('/PokéQuiz!/audio/eevee-cry.mp3');
    eeveeSprite.addEventListener('click', function(){
        eeveeCry.play();
        eeveeCry.volume = 0.15;
    })
}