const riddle = {
  question: 'Висит груша нельзя скушать',
  correctAnswer: 'лампочка',
  hints: ['это светит', 'это сделано из стекла'],
  tries: 3,
  countTries: 1,
  checkAnswer(str) {
    if (str.toLowerCase() === this.correctAnswer && this.tries > 0) {
      alert(
        `Это правильный ответ! Вы угадали ответ с ${this.countTries} попыток!`
      )
      let doYouWantToPlayMore = confirm(
        'Если хотите сыграть ещё раз нажмите "OK"'
      )
      if (doYouWantToPlayMore) {
        alert(
          'Отлично! Но у меня только одна загадка! В будущем добавлю ещё :)'
        )
        window.location.reload()
      } else {
        alert('Ждём вас снова!')
        window.location.reload()
      }
    } else if (str.toLowerCase() !== this.correctAnswer && this.tries > 1) {
      this.tries--
      this.countTries++
      let hint = this.hints[Math.floor(Math.random() * this.hints.length)]
      alert(
        `Это неправильный ответ! У вас осталось ${this.tries} попытки.\nПодсказка: ${hint}`
      )
      let indexDeleteHint = this.hints.indexOf(hint)
      this.hints.splice(indexDeleteHint, 1)
    } else if (str.toLowerCase() !== this.correctAnswer && this.tries <= 1) {
      alert(
        `У вас не осталось попыток. Игра окончена. Правильный ответ: ${this.correctAnswer}`
      )
      let doYouWantToPlayMore = confirm(
        'Если хотите сыграть ещё раз нажмите "OK"'
      )
      if (doYouWantToPlayMore) {
        alert(
          'Отлично! Правда, у меня только одна загадка!\nНо зато сейчас вы точно угадаете ответ :)'
        )
        window.location.reload()
      } else {
        alert('Ждём вас снова!')
        window.location.reload()
      }
    }
  },
}

document.getElementById('riddleText').textContent = riddle.question

function check() {
  let input = document.getElementById('userAnswer')
  let guessedAnswer = input.value
  if (guessedAnswer) {
    riddle.checkAnswer(guessedAnswer)
  }
  input.value = ''
}
