export function currentKeyboardLanguage(language) {
  switch (language) {
    case "ru":
      return [
        [
          { value: "ё", code: "Backquote", className: "key" },
          { value: "1", code: "digit1", sup: "!", className: "key" },
          { value: "2", code: "digit2", sup: `"`, className: "key" },
          { value: "3", code: "digit3", sup: "№", className: "key" },
          { value: "4", code: "digit4", sup: ";", className: "key" },
          { value: "5", code: "digit5", sup: "%", className: "key" },
          { value: "6", code: "digit6", sup: ":", className: "key" },
          { value: "7", code: "digit7", sup: "?", className: "key" },
          { value: "8", code: "digit8", sup: "*", className: "key" },
          { value: "9", code: "digit9", sup: "(", className: "key" },
          { value: "0", code: "Digit0", sup: ")", className: "key" },
          { value: "-", code: "Minus", sup: "_", className: "key" },
          { value: "=", code: "Equal", sup: "+", className: "key" },
          { value: "Backspace", code: "Backspace", sup: "", className: "key sys back" },
        ],
        [
          { value: "Tab", code: "Tab", sup: "", className: "key sys tab" },
          { value: "й", code: "KeyQ", sup: "", className: "key" },
          { value: "ц", code: "KeyW", sup: "", className: "key" },
          { value: "у", code: "KeyE", sup: "", className: "key" },
          { value: "к", code: "KeyR", sup: "", className: "key" },
          { value: "е", code: "KeyT", sup: "", className: "key" },
          { value: "н", code: "KeyY", sup: "", className: "key" },
          { value: "г", code: "KeyU", sup: "", className: "key" },
          { value: "ш", code: "KeyI", sup: "", className: "key" },
          { value: "щ", code: "KeyO", sup: "", className: "key" },
          { value: "з", code: "KeyP", sup: "", className: "key" },
          { value: "х", code: "BracketLeft", className: "key" },
          { value: "ї", code: "BracketRight", className: "key" },
          { value: "\\", code: "Backslash", sup: "|", className: "key" },
        ],
        [
          { value: "CapsLock", code: "CapsLock", sup: "", className: "key sys caps" },
          { value: "ф", code: "KeyA", sup: "", className: "key" },
          { value: "ы", code: "KeyS", sup: "", className: "key" },
          { value: "в", code: "KeyD", sup: "", className: "key" },
          { value: "а", code: "KeyF", sup: "", className: "key" },
          { value: "п", code: "KeyG", sup: "", className: "key" },
          { value: "р", code: "KeyH", sup: "", className: "key" },
          { value: "о", code: "KeyJ", sup: "", className: "key" },
          { value: "л", code: "KeyK", sup: "", className: "key" },
          { value: "д", code: "KeyL", sup: "", className: "key" },
          { value: "ж", code: "Semicolon", className: "key" },
          { value: "э", code: "Quote", sup: '"', className: "key" },
          { value: "Enter", code: "Enter", sup: "", className: "key sys enter" },
        ],
        [
          { value: "Shift", code: "ShiftLeft", sup: "", className: "key sys shift" },
          { value: "я", code: "KeyZ", sup: "", className: "key" },
          { value: "ч", code: "KeyX", sup: "", className: "key" },
          { value: "с", code: "KeyC", sup: "", className: "key" },
          { value: "м", code: "KeyV", sup: "", className: "key" },
          { value: "и", code: "KeyB", sup: "", className: "key" },
          { value: "т", code: "KeyN", sup: "", className: "key" },
          { value: "ь", code: "KeyM", sup: "", className: "key" },
          { value: "б", code: "Comma", className: "key" },
          { value: "ю", code: "Period", className: "key" },
          { value: ".", code: "Slash", sup: ",", className: "key" },
          { value: "Shift", code: "ShiftRight", className: "key sys shift" },
        ],
        [{ value: " ", code: "Space", sup: "", className: "key sys space" }],
      ];
    case "en":
      return [
        [
          { value: "`", code: "Backquote", sup: "~", className: "key" },
          { value: "1", code: "digit1", sup: "!", className: "key" },
          { value: "2", code: "digit2", sup: "@", className: "key" },
          { value: "3", code: "digit3", sup: "#", className: "key" },
          { value: "4", code: "digit4", sup: "$", className: "key" },
          { value: "5", code: "digit5", sup: "%", className: "key" },
          { value: "6", code: "digit6", sup: "^", className: "key" },
          { value: "7", code: "digit7", sup: "&", className: "key" },
          { value: "8", code: "digit8", sup: "*", className: "key" },
          { value: "9", code: "digit9", sup: "(", className: "key" },
          { value: "0", code: "Digit0", sup: ")", className: "key" },
          { value: "-", code: "Minus", sup: "_", className: "key" },
          { value: "=", code: "Equal", sup: "+", className: "key" },
          { value: "Backspace", code: "Backspace", sup: "", className: "key sys back" },
        ],
        [
          { value: "Tab", code: "Tab", sup: "", className: "key sys tab" },
          { value: "q", code: "KeyQ", sup: "", className: "key" },
          { value: "w", code: "KeyW", sup: "", className: "key" },
          { value: "e", code: "KeyE", sup: "", className: "key" },
          { value: "r", code: "KeyR", sup: "", className: "key" },
          { value: "t", code: "KeyT", sup: "", className: "key" },
          { value: "y", code: "KeyY", sup: "", className: "key" },
          { value: "u", code: "KeyU", sup: "", className: "key" },
          { value: "i", code: "KeyI", sup: "", className: "key" },
          { value: "o", code: "KeyO", sup: "", className: "key" },
          { value: "p", code: "KeyP", sup: "", className: "key" },
          { value: "[", code: "BracketLeft", sup: "{", className: "key" },
          { value: "]", code: "BracketRight", sup: "}", className: "key" },
          { value: "\\", code: "Backslash", sup: "|", className: "key" },
        ],
        [
          { value: "CapsLock", code: "CapsLock", sup: "", className: "key sys caps" },
          { value: "a", code: "KeyA", sup: "", className: "key" },
          { value: "s", code: "KeyS", sup: "", className: "key" },
          { value: "d", code: "KeyD", sup: "", className: "key" },
          { value: "f", code: "KeyF", sup: "", className: "key" },
          { value: "g", code: "KeyG", sup: "", className: "key" },
          { value: "h", code: "KeyH", sup: "", className: "key" },
          { value: "j", code: "KeyJ", sup: "", className: "key" },
          { value: "k", code: "KeyK", sup: "", className: "key" },
          { value: "l", code: "KeyL", sup: "", className: "key" },
          { value: ";", code: "Semicolon", sup: ":", className: "key" },
          { value: "'", code: "Quote", sup: '"', className: "key" },
          { value: "Enter", code: "Enter", sup: "", className: "key sys enter" },
        ],
        [
          { value: "Shift", code: "ShiftLeft", sup: "", className: "key sys shift" },
          { value: "z", code: "KeyZ", sup: "", className: "key" },
          { value: "x", code: "KeyX", sup: "", className: "key" },
          { value: "c", code: "KeyC", sup: "", className: "key" },
          { value: "v", code: "KeyV", sup: "", className: "key" },
          { value: "b", code: "KeyB", sup: "", className: "key" },
          { value: "n", code: "KeyN", sup: "", className: "key" },
          { value: "m", code: "KeyM", sup: "", className: "key" },
          { value: ",", code: "Comma", sup: "<", className: "key" },
          { value: ".", code: "Period", sup: ">", className: "key" },
          { value: "/", code: "Slash", sup: "?", className: "key" },
          { value: "Shift", code: "ShiftRight", sup: "", className: "key sys shift" },
        ],
        [{ value: " ", code: "Space", sup: "", className: "key sys space" }],
      ];
    default:
      return [];
  }
}

export function currentTextLanguage(language) {
  switch (language) {
    case "en":
      return [
        "Barbara had been waiting at the table for twenty minutes. it had been twenty long and excruciating minutes. David had promised that he would be on time today. He never was, but he had promised this one time. She had made him repeat the promise multiple times over the last week until she'd believed his promise. Now she was paying the price.",
        "Sarah watched the whirlpool mesmerized. She couldn't take her eyes off the water swirling around and around. She stuck in small twigs and leaves to watch the whirlpool catch them and then suck them down. It bothered her more than a little bit that this could also be used as a metaphor for her life.",
        "The fog was as thick as pea soup. This was a problem. Gary was driving but couldn't see a thing in front of him. He knew he should stop, but the road was narrow so if he did, it would be right in the center of the road. He was sure that another car would end up rear-ending him, so he continued forward despite the lack of visibility. This was an unwise move.",
        "They had made it to Las Vegas, wide-eyed and with so much hope and energy. They had planned the trip for more than a year and both were so excited they could barely control themselves. They still hadn't realized that Las Vegas promised a place where dreams come true, it was actually the place where dreams came to die.",
        "The leather jacked showed the scars of being his favorite for years. It wore those scars with pride, feeling that they enhanced his presence rather than diminishing it. The scars gave it character and had not overwhelmed to the point that it had become ratty. The jacket was in its prime and it knew it.",
        'What have you noticed today? I noticed that if you outline the eyes, nose, and mouth on your face with your finger, you make an "I" which makes perfect sense, but is something I never noticed before. What have you noticed today?',
        "He couldn't move. His head throbbed and spun. He couldn't decide if it was the flu or the drinking last night. It was probably a combination of both.",
        "Should he write it down? That was the question running through his mind. He couldn't believe what had just happened and he knew nobody else would believe him as well. Even if he documented what had happened by writing it down, he still didn't believe anyone would still believe it. So the question remained. Was it be worth it to actually write it down?",
        "Devon couldn't figure out the color of her eyes. He initially would have guessed that they were green, but the more he looked at them he almost wanted to say they were a golden yellow. Then there were the flashes of red and orange that seemed to be streaked throughout them. It was almost as if her eyes were made of opal with the sun constantly glinting off of them and bringing out more color. They were definitely the most unusual pair of eyes he'd ever seen.",
        "Ten more steps. If he could take ten more steps it would be over, but his legs wouldn't move. He tried to will them to work, but they wouldn't listen to his brain. Ten more steps and it would be over but it didn't appear he would be able to do it.",
        "The amber droplet hung from the branch, reaching fullness and ready to drop. It waited. While many of the other droplets were satisfied to form as big as they could and release, this droplet had other plans. It wanted to be part of history. It wanted to be remembered long after all the other droplets had dissolved into history. So it waited for the perfect specimen to fly by to trap and capture that it hoped would eventually be discovered hundreds of years in the future.",
      ];
    case "ru":
      return [
        "Противоположная точка зрения подразумевает, что акционеры крупнейших компаний формируют глобальную экономическую сеть и при этом - заблокированы в рамках своих собственных рациональных ограничений. Разнообразный и богатый опыт говорит нам, что дальнейшее развитие различных форм деятельности является качественно новой ступенью модели развития. Идейные соображения высшего порядка, а также перспективное планирование обеспечивает актуальность как самодостаточных, так и внешне зависимых концептуальных решений. Кстати, диаграммы связей своевременно верифицированы.",
        "Идейные соображения высшего порядка, а также укрепление и развитие внутренней структуры выявляет срочную потребность поставленных обществом задач. А также представители современных социальных резервов своевременно верифицированы. Равным образом, новая модель организационной деятельности однозначно фиксирует необходимость глубокомысленных рассуждений. Задача организации, в особенности же глубокий уровень погружения однозначно определяет каждого участника как способного принимать собственные решения касаемо укрепления моральных ценностей. Господа, сложившаяся структура организации предоставляет широкие возможности для приоретизации разума над эмоциями.",
        "Современные технологии достигли такого уровня, что существующая теория способствует подготовке и реализации укрепления моральных ценностей. Предварительные выводы неутешительны: выбранный нами инновационный путь не даёт нам иного выбора, кроме определения направлений прогрессивного развития. Противоположная точка зрения подразумевает, что тщательные исследования конкурентов освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, объективно рассмотрены соответствующими инстанциями. Предварительные выводы неутешительны: понимание сути ресурсосберегающих технологий требует анализа укрепления моральных ценностей. Ясность нашей позиции очевидна: новая модель организационной деятельности способствует подготовке и реализации укрепления моральных ценностей. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: существующая теория позволяет оценить значение направлений прогрессивного развития.",
        "Но укрепление и развитие внутренней структуры влечет за собой процесс внедрения и модернизации направлений прогрессивного развития. Не следует, однако, забывать, что семантический разбор внешних противодействий представляет собой интересный эксперимент проверки первоочередных требований. Предварительные выводы неутешительны: высококачественный прототип будущего проекта, в своём классическом представлении, допускает внедрение прогресса профессионального сообщества. Прежде всего, сплочённость команды профессионалов является качественно новой ступенью существующих финансовых и административных условий. Однозначно, интерактивные прототипы будут разоблачены.",
        "Повседневная практика показывает, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании экспериментов, поражающих по своей масштабности и грандиозности. Вот вам яркий пример современных тенденций — постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обусловливает важность экспериментов, поражающих по своей масштабности и грандиозности. Внезапно, некоторые особенности внутренней политики неоднозначны и будут указаны как претенденты на роль ключевых факторов. Прежде всего, высокотехнологичная концепция общественного уклада играет определяющее значение для форм воздействия.",
        "С другой стороны, синтетическое тестирование однозначно фиксирует необходимость распределения внутренних резервов и ресурсов! Но убеждённость некоторых оппонентов позволяет оценить значение дальнейших направлений развития. Прежде всего, начало повседневной работы по формированию позиции позволяет выполнить важные задания по разработке переосмысления внешнеэкономических политик. В частности, высокотехнологичная концепция общественного уклада предполагает независимые способы реализации первоочередных требований. Равным образом, базовый вектор развития является качественно новой ступенью новых принципов формирования материально-технической и кадровой базы.",
        "Не следует, однако, забывать, что курс на социально-ориентированный национальный проект требует от нас анализа форм воздействия. Но постоянное информационно-пропагандистское обеспечение нашей деятельности предполагает независимые способы реализации системы массового участия. В рамках спецификации современных стандартов, предприниматели в сети интернет разоблачены. Являясь всего лишь частью общей картины, тщательные исследования конкурентов разоблачены.",
        "Являясь всего лишь частью общей картины, предприниматели в сети интернет, вне зависимости от их уровня, должны быть призваны к ответу. Следует отметить, что постоянное информационно-пропагандистское обеспечение нашей деятельности предполагает независимые способы реализации новых принципов формирования материально-технической и кадровой базы. В своём стремлении улучшить пользовательский опыт мы упускаем, что многие известные личности лишь добавляют фракционных разногласий и описаны максимально подробно. Таким образом, семантический разбор внешних противодействий играет важную роль в формировании стандартных подходов.",
        "Ясность нашей позиции очевидна: экономическая повестка сегодняшнего дня способствует подготовке и реализации поставленных обществом задач. Как уже неоднократно упомянуто, реплицированные с зарубежных источников, современные исследования призывают нас к новым свершениям, которые, в свою очередь, должны быть преданы социально-демократической анафеме.",
        "И нет сомнений, что интерактивные прототипы будут представлены в исключительно положительном свете. Равным образом, новая модель организационной деятельности однозначно определяет каждого участника как способного принимать собственные решения касаемо форм воздействия. В своём стремлении улучшить пользовательский опыт мы упускаем, что представители современных социальных резервов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Не следует, однако, забывать, что курс на социально-ориентированный национальный проект требует от нас анализа первоочередных требований.",
        "Лишь независимые государства являются только методом политического участия и преданы социально-демократической анафеме. Прежде всего, курс на социально-ориентированный национальный проект говорит о возможностях стандартных подходов. Следует отметить, что понимание сути ресурсосберегающих технологий играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач.",
        "Каждый из нас понимает очевидную вещь: синтетическое тестирование выявляет срочную потребность системы массового участия. Есть над чем задуматься: интерактивные прототипы объективно рассмотрены соответствующими инстанциями.",
        "Имеется спорная точка зрения, гласящая примерно следующее: многие известные личности лишь добавляют фракционных разногласий и описаны максимально подробно. Значимость этих проблем настолько очевидна, что разбавленное изрядной долей эмпатии, рациональное мышление создаёт предпосылки для поставленных обществом задач.",
        "В частности, понимание сути ресурсосберегающих технологий обеспечивает актуальность поэтапного и последовательного развития общества. Разнообразный и богатый опыт говорит нам, что убеждённость некоторых оппонентов предполагает независимые способы реализации системы обучения кадров, соответствующей насущным потребностям. Однозначно, базовые сценарии поведения пользователей в равной степени предоставлены сами себе. Наше дело не так однозначно, как может показаться: высококачественный прототип будущего проекта является качественно новой ступенью дальнейших направлений развития.",
      ];
    default:
      return [];
  }
}

export function languageName(language) {
  switch (language) {
    case "ru":
      return "Russian";
    case "en":
      return "English";
  }
}
