const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test('create a Manager object',  () => {
  const manager =  new Manager('Emma Moore', 862, 'carter.gary@collins.com', 14);
  expect(manager.name).toBe("Emma Moore");
  expect(manager.id).toBe(862);
  expect(manager.email).toBe("carter.gary@collins.com");
  expect(manager.officeNumber).toBe(14);

})

/* test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
 */