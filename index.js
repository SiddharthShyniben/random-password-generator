const uniquify = strinput => {
  const str = strinput;
  let uniql = "";
  for (var x = 0; x < str.length; x++) {
    if (uniql.indexOf(str.charAt(x)) == -1) uniql += str[x];
  }
  return uniql;
}

const generateChars = () => {
  let chars = " ";
  for (let i = 33; i < 126; i++) chars += String.fromCharCode(i);
  return chars;
};

const createPassword = options => {

  options.length = options.length ? options.length : 10;
  options.includeChars = options.includeChars ? options.includeChars : [];
  options.excludeChars = options.excludeChars ? options.excludeChars : [];

  if (Math.sign(options.length) !== 1) throw new TypeError("Expected options.length to be a positive integer");
  if (options.includeChars instanceof Array) {
    options.includeChars.forEach(c => {
      if (typeof c === 'string' || c instanceof String) {
        if (c.length > 1) throw new Error("Expected string in options.includeChars to be a single character but got " + c);
      }
      else throw new TypeError("Expected options.includeChars to be an array of strings but got " + typeof c);
    });
  } else throw new TypeError("Expected options.includeChars to be an array");
  if (options.includeChars instanceof Array) {
    options.includeChars.forEach(c => {
      if (typeof c === 'string' || c instanceof String) {
        if (c.length > 1) throw new Error("Expected string in options.excludeChars to be a single character but got " + c);
      }
      else throw new TypeError("Expected options.excludeChars to be an array of strings but got " + typeof c);
    });
  } else throw new TypeError("Expected options.excludeChars to be an array");

  let password = "", chars = generateChars();

  options.includeChars.forEach(c => chars += c);
  options.excludeChars.forEach(c => chars.replace(c, ""));

  chars = uniquify(chars);

  for (let i = 0; i < options.length; i++) password += chars.charAt(Math.random() * chars.length);
  return password;
};

exports = createPassword;
