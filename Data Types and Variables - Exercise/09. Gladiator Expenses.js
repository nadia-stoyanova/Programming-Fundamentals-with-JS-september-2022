function gadiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let trashedHelmet = parseInt(lostFights / 2);
  let trashedSword = parseInt(lostFights / 3);
  let trashedShield = parseInt(lostFights / 6);
  let trashedArmor = parseInt(lostFights / 12);
  let expenses =
    trashedHelmet * helmetPrice +
    trashedSword * swordPrice +
    trashedShield * shieldPrice +
    trashedArmor * armorPrice;
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
