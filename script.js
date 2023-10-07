
document.addEventListener("DOMContentLoaded", function() {
    var chatLog = document.getElementById("chat-log");
    var userInput = document.getElementById("user-input");

    // Функция для добавления сообщения в чат-лог
    function addMessageToLog(message, isUser) {
        var messageElement = document.createElement("div");
        messageElement.classList.add("message");
        if (isUser) {
            messageElement.classList.add("user-message");
        } else {
            messageElement.classList.add("bot-message");
        }
        messageElement.textContent = message;
        chatLog.appendChild(messageElement);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    // Функция для обработки пользовательского ввода
    function handleUserInput() {
        var userInputText = userInput.value;
        addMessageToLog(userInputText, true);

        // Обработка пользовательского ввода
        if (userInputText === "привет") {
            addMessageToLog("Привет! Я чат-бот. Чем могу помочь?", false);
        } else if (userInputText === "как дела?") {
            addMessageToLog("У меня всё отлично! А у тебя?", false);
        } else if (userInputText === "хорошо") {
            addMessageToLog("Это замечательно!", false);
        } else if (userInputText === "пока") {
            addMessageToLog("До свидания! Надеюсь, ещё увидимся.", false);
        } else {
            addMessageToLog("С тобой так интересно. Можешь еще что-нибудь написать?", false);
        }

        userInput.value = "";
    }

    // Обработчик события нажатия клавиши Enter
    userInput.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            handleUserInput();
        }
    });
});