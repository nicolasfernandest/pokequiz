document.getElementById("bg-music").volume=0.1;
const introText = document.getElementById('main-txt').innerHTML;

function swap(){
    const mainText = document.getElementById('main-txt');
    mainText.innerHTML = "Pronto para sua jornada?<br> Escolha uma opção!";
}

function options(){
    const optionsList = document.getElementById('menu-options');

    // Torna o botão "Próximo" invisível
    const nextBtn = document.getElementById('next-button');
    nextBtn.style.display = 'none';

    // Cria o botão "Começar"
    const startBtn = document.createElement('button');
    startBtn.id = 'startBtn';
    startBtn.innerHTML = 'Começar';
    startBtn.addEventListener("click", generateQuiz);
    optionsList.appendChild(startBtn);

    // Cria o botão "Opções"
    const options = document.createElement('button');
    options.id = 'optionsBtn';
    options.innerHTML = 'Opções';
    optionsList.appendChild(options);
    
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

    // Remove os botões "Começar", "Opções" e "Voltar"
    const startBtn = document.getElementById('startBtn');
    if (startBtn) startBtn.remove();
    const options = document.getElementById('optionsBtn');
    if (options) optionsBtn.remove();
    const backBtn = document.getElementById('backBtn');
    if (backBtn) backBtn.remove();

    mainText.innerHTML = introText;
}

function generateQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    const mainText = document.getElementById("main-txt");
    const menuOptions = document.getElementById("menu-options");

    // Adicionar fade-out nos elementos antigos
    mainText.classList.add("fade-out");
    menuOptions.classList.add("fade-out");

    setTimeout(() => {
        mainText.innerHTML = "";
        menuOptions.innerHTML = "";
        mainText.classList.remove("fade-out");

        // Criando a pergunta
        const question = document.createElement("h3");
        question.style.textAlign = 'center';
        question.innerText = "Qual desses Pokémon é do tipo Fogo?";
        question.classList.add("fade-in");
        quizContainer.appendChild(question);

        
        const quizBackground = document.createElement("div");
        quizBackground.id = "quiz-background";
        quizBackground.classList.add("fade-in");
        quizContainer.appendChild(quizBackground);

        // Criando as opções
        const options = ["Pikachu", "Charmander", "Squirtle", "Bulbasaur"];
        const correctAnswer = "Charmander";

        options.forEach(option => {
            const btn = document.createElement("button");
            btn.innerText = option;
            btn.classList.add("quiz-option", "fade-in");

            btn.addEventListener("click", function() {
                console.log(`Botão ${option} foi clicado!`);
                checkAnswer(option, correctAnswer);
            });

            quizContainer.appendChild(btn);
        });
    }, 500);
}


function checkAnswer(selectedOption, correctAnswer) {
    const resultContainer = document.getElementById("resposta-quiz");
    var correct = new Audio('audio/correct.mp3');
    resultContainer.style.textAlign = 'center';
    correct.volume = 0.15;
    
    if (!resultContainer) return;

    if (selectedOption === correctAnswer) {
        resultContainer.innerHTML = "<p style='color: green;'>✔ Resposta correta!</p>";
        correct.play();

    } else {
        resultContainer.innerHTML = "<p style='color: red;'>❌ Resposta errada!</p>";
    }
}

function playCry(){
    const pikachuSprite = document.getElementById('pikachu-sprite');
    var pikachuCry = new Audio('audio/pikachu-cry.mp3');
    pikachuSprite.addEventListener('click', function(){
        pikachuCry.play();
        pikachuCry.volume = 0.15;
    })

    const eeveeSprite = document.getElementById('eevee-sprite');
    var eeveeCry = new Audio('audio/eevee-cry.mp3');
    eeveeSprite.addEventListener('click', function(){
        eeveeCry.play();
        eeveeCry.volume = 0.15;
    })
}
