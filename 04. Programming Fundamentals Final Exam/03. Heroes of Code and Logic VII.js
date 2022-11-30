function heroesOfCodeLogic(input) {
  let n = Number(input.shift());
  let heroes = {};

  for (let i = 0; i < n; i++) {
    let line = input.shift().split(" ");
    let hero = line[0];
    let np = line[1];
    let mp = line[2];
    heroes[hero] = { npoint: Number(np), mpoint: Number(mp) };
  }

  while (input[0] !== "End") {
    let line = input.shift().split(" - ");
    let command = line[0];

    if (command === "CastSpell") {
      let hero = line[1];
      let mpNeeded = Number(line[2]);
      let spellName = line[3];

      if (heroes[hero].mpoint >= mpNeeded) {
        heroes[hero].mpoint -= mpNeeded;
        console.log(
          `${hero} has successfully cast ${spellName} and now has ${heroes[hero].mpoint} MP!`
        );
      } else {
        console.log(`${hero} does not have enough MP to cast ${spellName}!`);
      }
    } else if (command === "TakeDamage") {
      let hero = line[1];
      let damage = Number(line[2]);
      let attaker = line[3];

      if (heroes[hero].npoint > damage) {
        heroes[hero].npoint -= damage;
        console.log(
          `${hero} was hit for ${damage} HP by ${attaker} and now has ${heroes[hero].npoint} HP left!`
        );
      } else {
        console.log(`${hero} has been killed by ${attaker}!`);
        delete heroes[hero];
      }
    } else if (command === "Recharge") {
      let hero = line[1];
      let amount = Number(line[2]);

      if (heroes[hero].mpoint + amount > 200) {
        amount = 200 - heroes[hero].mpoint;
        heroes[hero].mpoint = 200;
      } else {
        heroes[hero].mpoint += amount;
      }
      console.log(`${hero} recharged for ${amount} MP!`);
    } else if (command === "Heal") {
      let hero = line[1];
      let amount = Number(line[2]);

      if (heroes[hero].npoint + amount > 100) {
        amount = 100 - heroes[hero].npoint;
        heroes[hero].npoint = 100;
      } else {
        heroes[hero].npoint += amount;
      }
      console.log(`${hero} healed for ${amount} HP!`);
    }
  }

  for (const hero in heroes) {
    console.log(`${hero}`);
    console.log(`  HP: ${heroes[hero].npoint}`);
    console.log(`  MP: ${heroes[hero].mpoint}`);
  }
}
heroesOfCodeLogic([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
