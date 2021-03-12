const rpg = require("./index"), zxcvbn = require("zxcvbn"), fs = require("fs");

it("should be a function", () => expect(rpg).toBeInstanceOf(Function));
it("should return a password", () => expect(typeof rpg()).toBe("string"));
it("should return password with default length of 15", () => expect(rpg()).toHaveLength(15));
it("should return password with desired length", () => {
  for (let i = 1; i < 100; i++) expect(rpg({ length: i })).toHaveLength(i);
});
it("should exclude characters", () => expect(rpg({ length: 100, excludeChars: ["a"] })).not.toMatch("a"));
// TODO: No way to check if string includes includeChars because it is not necessary for them to be included. Any ideas??