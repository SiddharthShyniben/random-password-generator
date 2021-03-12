const rpg = require("./index"), zxcvbn = require("./zxcvbn"), dataFilePath = require("path").join(__dirname, "datacollected.json"), fs = require("fs");

for (let i = 0; i < 1000; i++) {
  const password = rpg(), passwordCheck = zxcvbn(password);
  let previous = { data: [] };
  try {
    previous = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
  } catch (e) { }
  previous.data.push(passwordCheck);
  fs.writeFileSync(dataFilePath, previous, "utf8");
}