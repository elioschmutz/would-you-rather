let users = {
  sarahedo: {
    id: 'sarahedo',
    password: 'secret',
    name: 'Sarah Edo',
    avatarURL: "data:image/jpeg;base64,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",
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionOne',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    password: 'secret',
    name: 'Tyler McGinnis',
    avatarURL: "data:image/jpeg;base64,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",
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  johndoe: {
    id: 'johndoe',
    password: 'secret',
    name: 'John Doe',
    avatarURL: "data:image/jpeg;base64,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",
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionOne'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'become a supervillian'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be telepathic'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be a back-end developer'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'have your best friend find $500'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'write Swift'
    }
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _addUser (username, name, password, avatarURL) {
  return new Promise((res, rej) => {
    if (users[name]) {
      rej('user already exists')
    }

    const user = {
      id: username,
      name,
      password,
      avatarURL,
      answers: [],
      questions: []
    }

    users[username] = user
    setTimeout(() => res(user), 1000)
  })
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _loginUser(username, password) {
  return new Promise((res, rej) => {
    _getUsers().then((users) => {
      const user = users[username] || {}
      if (user.password === password) {
        res(user)
      } else {
        rej(user)
      }
    })
  })
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}
