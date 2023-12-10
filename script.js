let emojis = [
    "👩‍❤️‍💋‍👨",
    "🐶",
    "👑",
    "❄️",
    "🏊🏻‍♀️",
    "🏆",
    "😂",
    "✈️",
    "⚒",
    "📸",
    "🛌",
    "🛁",
    "🎁",
    "🛍",
    "☕️",
    "🐈",
    "💍",
    "👨‍👩‍👧‍👦",
    "🤔",
    "🤌🏻",
    "💩",
    "💸",
    "🍀",
    "😈",
    "🤡",
    "💃",
    "👽",
    "🌭"
  ];
  
  let astrologyTitles = [
    "Ретроградный Меркурий предупреждает, что сегодня ты столкнёшься с:",
    "Сатурн в Скорпионе намекает на следующие события в твоём дне:",
    "Венера переходит в знак Льва, и это принесёт тебе:",
    "Соединение Марса и Юпитера предвещает:",
    "Солнце в Козероге подсвечивает твой успех в этих сферах:",
    "Марс в Весах даст тебе энергии в виде:",
    "Плутон соединился с Венерой, в скором времени ожидай следующего:",
    "Уран в Тельце шепчет тебе о грядущих переменах:",
    "Нептун в Рыбах пророчит тебе:",
    "Луна в Водолее предсказывает твою удачу в следующем:"
  ];
  
  // Функция, которая возвращает случайный элемент из полученного массива
  function getRandomElementFromArray(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
  // Элементы, с которыми будем взаимодействовать
  let emojiContainer = document.getElementById("emojiContainer");
  let titleContainer = document.getElementById("title");
  
  // Функция, которая взаимодействует с ДОМ — добавляет эмоджи на страницу
  function displayEmoji(emoji) {
    let emojiSpan = document.createElement("span");
    emojiSpan.classList.add("emoji");
    emojiSpan.innerText = emoji;
    emojiContainer.appendChild(emojiSpan);
  }
  
  // Функция, которая взаимодействует с ДОМ — для отображения заголовка
  function displayTitle(title) {
    titleContainer.innerText = title;
  }
  
  
  let randomEmoji=getRandomElementFromArray(emojis)
  let randomTitle=getRandomElementFromArray(astrologyTitles)
  displayEmoji(randomEmoji)
  displayTitle(randomTitle)