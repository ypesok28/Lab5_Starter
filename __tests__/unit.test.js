// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('isPhoneNumber: "123-456-7890" is a valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber: "(123) 456-7890" is a valid phone number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('isPhoneNumber: "12-34" is not a valid phone number', () => {
  expect(isPhoneNumber('12-34')).toBe(false);
});
test('isPhoneNumber: "abcd-efgh" is not a valid phone number', () => {
  expect(isPhoneNumber('abcd-efgh')).toBe(false);
});

// isEmail
test('isEmail: "foo@bar.com" is a valid email', () => {
  expect(isEmail('foo@bar.com')).toBe(true);
});
test('isEmail: "jane_doe@example.co" is a valid email', () => {
  expect(isEmail('jane_doe@example.co')).toBe(true);
});
test('isEmail: "no-at-symbol.com" is not a valid email', () => {
  expect(isEmail('no-at-symbol.com')).toBe(false);
});
test('isEmail: "foo@bar.toolong" is not a valid email (TLD too long)', () => {
  expect(isEmail('foo@bar.toolong')).toBe(false);
});

// isStrongPassword
test('isStrongPassword: "abcd" is a strong password (4 chars, starts with letter)', () => {
  expect(isStrongPassword('abcd')).toBe(true);
});
test('isStrongPassword: "Password_123" is a strong password', () => {
  expect(isStrongPassword('Password_123')).toBe(true);
});
test('isStrongPassword: "1abc" is not a strong password (starts with digit)', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});
test('isStrongPassword: "abc" is not a strong password (too short)', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

// isDate
test('isDate: "1/2/2024" is a valid date', () => {
  expect(isDate('1/2/2024')).toBe(true);
});
test('isDate: "12/31/2025" is a valid date', () => {
  expect(isDate('12/31/2025')).toBe(true);
});
test('isDate: "1-2-2024" is not a valid date (dashes, not slashes)', () => {
  expect(isDate('1-2-2024')).toBe(false);
});
test('isDate: "1/2/24" is not a valid date (year too short)', () => {
  expect(isDate('1/2/24')).toBe(false);
});

// isHexColor
test('isHexColor: "#FFA500" is a valid hex color', () => {
  expect(isHexColor('#FFA500')).toBe(true);
});
test('isHexColor: "abc" is a valid hex color (3 chars, no hash)', () => {
  expect(isHexColor('abc')).toBe(true);
});
test('isHexColor: "#GGG" is not a valid hex color (G is not hex)', () => {
  expect(isHexColor('#GGG')).toBe(false);
});
test('isHexColor: "#fffff" is not a valid hex color (5 chars)', () => {
  expect(isHexColor('#fffff')).toBe(false);
});
