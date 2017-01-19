AFRAME.registerComponent('gamesate', {
  schema: {
    numEnemies: { default: 0 },
    numEnemiesToLose: { default: 100 },
    isGameOver: { default: false },
    isGameWin: { default: false },
    state: { default: 'STATE_PLAYING', oneOf:['STATE_PLAYING, STATE_GAME_OVER'] }
  },

  gameEnd(newState, win) {
    newState.state = "STATE_GAME_WIN";
    newState.isGameWin = true;
  }

  init() {


    const registerHandler = (event, handler) => {
      this.el.addEventListener
    }

    const publishState = (event, newState) => {

    }

  }

})
