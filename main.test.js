import { test, expect } from "vitest";
import { enemyHealthByGun, addClanTagToName } from "./main";

test("when user passes in a gun, its damage is taken from enemy health and updated health is returned", () => {
  // Arrange
  let expected = 80;
  let gun = "Pistol";
  // Act
  let act = enemyHealthByGun(gun);
  // Assert
  expect(act).toBe(expected);
});

test("when user passes in a gun, its damage is taken from enemy health and updated health is returned", () => {
  // Arrange
  let expected = 0;
  let gun = "RPG";
  // Act
  let act = enemyHealthByGun(gun);
  // Assert
  expect(act).toBe(expected);
});

test("when user passes in a gun, its damage is taken from enemy health and updated health is returned", () => {
  // Arrange
  let expected = 95;
  let gun = "SMG";
  // Act
  let act = enemyHealthByGun(gun);
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
