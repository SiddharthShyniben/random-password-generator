const generateChars = () => {
  let chars = " ";
  for (let i = 33; i < 126; i++) chars += String.fromCharCode(i);
  return chars;
};

const createPassword = options => {

  if (typeof options.length !== "number") throw new Error("expected options.length to be a number");
  if (!options.includeChars.isArray()) throw new Error("expected options.includeChars to be an array");
  if (!options.excludeChars.isArray()) throw new Error("expected options.excludeChars to be an array");

  options.length = options.length ? options.length : 10;
  options.includeChars = options.includeChars ? options.includeChars : [];
  options.excludeChars = options.excludeChars ? options.excludeChars : [];

  let password = "", chars = generateChars();

  options.includeChars.forEach(c => chars += c);
  options.excludeChars.forEach(c => chars.replace(c, ""));
  for (let i = 0; i < options.length; i++) password += chars.charAt(Math.random() * chars.length);
  return password;
};

exports = createPassword;

// Tests
console.log(createPassword({ includeChars: ["€"], }));
