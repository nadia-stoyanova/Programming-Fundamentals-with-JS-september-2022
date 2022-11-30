function extractEmails(text) {
  const pattern = /[a-z0-9]*[.-_]?[a-z0-9]*\@[a-z]*[-]?[a-z]+\.[a-z]+[.]?[a-z]+/g;

  let matches = text.match(pattern);

  for (const match of matches) {
    console.log(match);
  }
}
extractEmails(
  "Just send email to s.miller@mit.edu and j.hopking@yo-rk.ac.uk for more information."
);
