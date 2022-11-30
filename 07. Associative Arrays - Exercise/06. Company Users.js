function companyUsers(input) {
  let companies = {};

  for (const line of input) {
    let [company, employee] = line.split(" -> ");

    if (!companies[company]) {
      companies[company] = [];
      companies[company].push(employee);
    } else {
      if (!companies[company].includes(employee)) {
        companies[company].push(employee);
      }
    }
  }

  let sorted = Object.entries(companies).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const company of sorted) {
    console.log(company[0]);
    for (let i = 0; i < company[1].length; i++) {
      console.log(`-- ${company[1][i]}`);
    }
  }
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
