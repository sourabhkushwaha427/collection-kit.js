import { Rope } from "../src/Rope";

test("should create and concat ropes", () => {
  const r1 = new Rope("Hello ");
  const r2 = new Rope("World");
  r1.concat(r2);
  expect(r1.root).not.toBeNull();
});
