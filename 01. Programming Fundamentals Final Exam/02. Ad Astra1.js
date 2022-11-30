function adAstra(input) {
  let sumCalories = 0;
  let foods = [];
  let pattern =
    /([#\|])(?<food>[A-Za-z ]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<kalories>[0-9]+)\1/g;
  let exec = pattern.exec(input[0]);

  while (exec) {
    sumCalories += Number(exec.groups.kalories);
    let food = exec.groups.food; foods.push(food)
    let date = exec.groups.date; foods.push(date)
    let kalories = exec.groups.kalories; foods.push(kalories)
    exec = pattern.exec(input[0]);
  }
  console.log(
    `You have food to last you for: ${Math.floor(sumCalories / 2000)} days!`
  );
  for (let i = 0; i < foods.length; i+=3){
  console.log(`Item: ${foods[i]}, Best before: ${foods[i+1]}, Nutrition: ${foods[i+2]}`);
}
}
adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|"
]);
