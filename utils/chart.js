module.exports = {
  get_emojis: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },
  /*
  get_emo: () => {
    const randomNum = [new Number(3), new String("false"), new Boolean(false)];

    return randomNum;
  
  },

  get_map: (tasksWithUser) => {
    const mapeado = tasksWithUser.map((task) => task.get({ plain: true }));
    return mapeado;
    //const myString = JSON.stringify(emojis);
  },
  */
};
