function minerTask(input) {
  let cards = {};

  for (let i = 0; i < input.length; i += 2) {
    let card = input[i];
    let quantity = Number(input[i + 1]);

    if (!cards.hasOwnProperty(card)) {
      cards[card] = quantity;
    } else {
      cards[card] += quantity;
    }
  }

  for (const card in cards) {
    console.log(`${card} -> ${cards[card]}`);
  }
}

minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
