import { test, expect } from "vitest";
import { enemyHealthCalculator, addClanTagToName } from "./main";

test("when user passes in a gun, its damage is taken from enemy health and updated health is returned", () => {
  // Arrange
  let expected = 80;
  let gun = "Pistol";
  // Act
  let act = enemyHealthCalculator(gun);
  // Assert
  expect(act).toBe(expected);
});

test("when user passes in a gun, its damage is taken from enemy health and updated health is returned", () => {
  // Arrange
  let expected = 0;
  let gun = "RPG";
  // Act
  let act = enemyHealthCalculator(gun);
  // Assert
  expect(act).toBe(expected);
});

test("when user passes in a gun, its damage is taken from enemy health and updated health is returned", () => {
  // Arrange
  let expected = 95;
  let gun = "SMG";
  // Act
  let act = enemyHealthCalculator(gun);
  // Assert
  expect(act).toBe(expected);
});

test("this function returns my name and clan tag combined in the correct format", () => {
  // Arrange
  let userName = "Stryker";
  let clanTag = "SKRT";
  let expected = "Stryker[SKRT]";
  // Act
  let act = addClanTagToName(userName, clanTag);
  // Assert
  expect(act).toBe(expected);
});

test("this function throws and error when clan name contains characters that arent alphanumeric", () => {
  // Arrange
  let userName = "Stryker";
  let clanTag = "SKR!";
  // Assert
  expect(() => addClanTagToName(userName, clanTag)).toThrow(
    "clan_name invalid"
  );
});

test("this function throws and error when clan name contains too many characters", () => {
  // Arrange
  let userName = "Stryker";
  let clanTag = "SKRRT";
  // Assert
  expect(() => addClanTagToName(userName, clanTag)).toThrow(
    "clan_name invalid"
  );
});

test("this function throws and error when player_name is empty", () => {
  // Arrange
  let userName = "";
  let clanTag = "SKRT";
  // Assert
  expect(() => addClanTagToName(userName, clanTag)).toThrow(
    "player_name required"
  );
});