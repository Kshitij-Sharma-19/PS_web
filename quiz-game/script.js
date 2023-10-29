const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const nextButton = document.getElementById('next-btn');
const exitButton = document.getElementById('exitButton'); // Get the Exit button
const resultContainer = document.querySelector('.result-container');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;
const questions = [
        {
            question: "What is the capital of France?",
            choices: ["London", "Berlin", "Paris", "Madrid"],
            correctAnswer: 2
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Venus", "Mars", "Jupiter", "Saturn"],
            correctAnswer: 1
        },
        // Add more questions here
        {
            question: "India has partially resumed visa services for citizens of which country, following a suspension related to strained relations?",
            choices: ["Palestine", "Ukraine", "Canada", "Afghanistan"],
            correctAnswer: 2
    
        },
        {
            question: "Which country has officially embedded its nuclear weapons status in its constitution?",
            choices: ["China", "Russia", "South Korea", "North Korea"],
            correctAnswer: 3
        },
        {
            question:"Which country has approved visa-free entry for Indian visitors and 6 other countries?",
            choices: ["Sri Lanka", "Indonesia", "Japan", "Thailand"],
            correctAnswer: 0
        },
        {
            question: "The US imposed sanctions on three Chinese firms for allegedly supplying missile components to which country?",
            choices: ["India", "China", "Pakistan", "Bangladesh"],
            correctAnswer: 2
        },
        {
            question: "Where did the 21st edition of the India-France Military Sub Committee (MSC) meeting take place in October 2023?",
            choices: ["New Delhi", "Mumbai", "Paris", "Kolkatta"],
            correctAnswer: 0
        },
        {
            question: "Is Israel a member of NATO (North Atlantic Treaty Organization)?",
            choices: ["Yes", "No"],
            correctAnswer: 1
        },
        {
            question: "Which country did India hold its first-ever 2+2 foreign affairs and defence dialogue within New Delhi?",
            choices: ["Japan", "Australia", "United States", "United Kingdom"],
            correctAnswer: 3
        },
        {
            question: "In the Global Hunger Index for 2023, where has India been ranked among 125 countries, signifying a decline from the previous year?",
            choices: ["95Th", "111Th", "128Th", "123rd"],
            correctAnswer: 1
        },
        {
            question: "Lok Sabha Speaker Om Birla handed over the P20 Presidency to which country at the conclusion of the Ninth P20 Presidency in Delhi?",
            choices: ["Canada", "Japan", "Brazil", "Germany"],
            correctAnswer: 2
        },
        {
            question: "Which Central Asian country did Putin visit for his first foreign trip since the International Criminal Court (ICC) arrest warrant was issued?",
            choices: ["Kazakhstan", "Kyrgyzstan", "Tajikistan", "Uzbekistan"],
            correctAnswer: 1
        },
        {
            question: "India has initiated Operation Ajay to ensure the secure repatriation of its citizens from which country in light of the ongoing circumstances?",
            choices: ["Palestine", "Jordan", "Israel", "Lebanon"],
            correctAnswer: 2
        },
        {
            question: "Which country funded the Padma Bridge Rail Link in Bangladesh?",
            choices: ["India", "Japan", "South Korear", "China"],
            correctAnswer: 3
        },
        {
            question: "Which country will take over as Chair of the Indian Ocean Rim Association (IORA)?",
            choices: ["Mauritius", "Sri Lanka", "Bangladesh", "Maldives"],
            correctAnswer: 1
        },
        {
            question: "Which is the smallest continent in the world? ",
            choices: ["Australia", "Asia", "Europe", "North America"],
            correctAnswer: 0
        },
        {
            question: "Which country is the smallest in the world?",
            choices: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
            correctAnswer: 0
        },
        {
            question: "Which country was declared a \"State of War\" after being hit by 5,000 rockets from Gaza?",
            choices: ["Ukraine", "Syria", "Jordan", "Israel"],
            correctAnswer: 3
        },
        {
            question: "Which country delivered the inaugural uranium shipment to Bangladesh for the Rooppur nuclear power plant?",
            choices: ["China", "India", "Russia", "Bangladesh"],
            correctAnswer: 2
        },
        {
            question: "What is the estimated annual loss in global infrastructure due to climate change and disasters?",
            choices: ["$101 - $110 billion", "$201 - $220 billion", "$301 - $330 billion", "$401 - $440 billion"],
            correctAnswer: 2
        },
        {
            question: "Which country recently launched Southeast Asia's first high-speed railway project named 'Whoosh'?",
            choices: ["Thailand", "Malaysia", "Indonesia", "Philippines"],
            correctAnswer: 2
        },
        {
            question: "Which country's Congress has approved a bill that would abolish income tax?",
            choices: ["Brazil", "Canada", "Chile", "Argentina"],
            correctAnswer: 2
        },
        {
            question: "What was the inflation rate in the Eurozone in September?",
            choices: ["5.2%", "6.1%", "4.3%", "2.0%"],
            correctAnswer: 1
        },
    
        {
            question: "What percentage does Russia plan to boost its defence spending by in 2024?",
            choices: ["70%", "50%", "20%", "30%"],
            correctAnswer: 0
        },
        {
            question: "Which countries make up the Five Eyes Intelligence Alliance, a coalition established in 1946 to share intelligence?",
            choices: ["US, UK, Germany, France, China", "Russia, China, India, Japan, South Korea", 
            "UK, Canada, Australia, New Zealand, India", "US, UK, Canada, Australia, New Zealand"],
            correctAnswer: 3
        },
        {
            question: "In 2023, which country's US Mission processed a record-breaking one million non-immigrant visa applications, accounting for 10% of global applicants?",
            choices: ["China", "India", "Mexico", "Canada"],
            correctAnswer: 1
        },
        {
            question: "Which country unveiled its first domestically-made submarine, named the Haikun, in September 2023?",
            choices: ["China", "Taiwan", "South Korea", "Japan"],
            correctAnswer: 1
        },
        {
            question: "Which US President is currently facing an impeachment inquiry initiated by the Republican-led House of Representatives?",
            choices: ["Donald Trump", "Barack Obama", "Bill Clinton", "Joe Biden"],
            correctAnswer: 3
        }
    
    ];
    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerText = "Next";
        nextButton.style.display = 'block';
        resultContainer.style.display = 'none';
        showQuestion(questions[currentQuestionIndex]);
    }
    
    function showQuestion(question) {
        questionElement.innerText = question.question;
        choicesElement.innerHTML = '';
        question.choices.forEach((choice, index) => {
            const choiceButton = document.createElement('button');
            choiceButton.innerText = choice;
            choiceButton.addEventListener('click', () => checkAnswer(index));
            choicesElement.appendChild(choiceButton);
        });
    }
    
    function checkAnswer(choiceIndex) {
        if (choiceIndex === questions[currentQuestionIndex].correctAnswer) {
            score++;
        }
    
        currentQuestionIndex++;
    
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
        } else {
            showResults();
        }
    }
    
    function showResults() {
        questionElement.innerText = 'Quiz completed!';
        choicesElement.innerHTML = '';
        nextButton.style.display = 'none';
        resultContainer.style.display = 'block';
        scoreElement.innerText = score + '/' + questions.length;
    }
    
    function exitQuiz() {
        questionElement.innerText = 'Quiz exited.';
        choicesElement.innerHTML = '';
        nextButton.style.display = 'none';
        exitButton.style.display = 'none'; // Hide the Exit button
        resultContainer.style.display = 'block';
        scoreElement.innerText = score + '/' + questions.length;
    }
    
    exitButton.addEventListener('click', () => {
        exitQuiz();
    });
    
    nextButton.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            showQuestion(questions[++currentQuestionIndex]);
        } else {
            // Show the exit button instead of starting the quiz again
            exitButton.style.display = 'block';
            nextButton.style.display = 'none';
        }
    });
    
    startQuiz();