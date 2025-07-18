import { CountMinSketch } from "../src/CountMinSketch";

test("instantiate CountMinSketch", () => {
  const cms = new CountMinSketch(100, 5);
  expect(cms.width).toBe(100);
  expect(cms.depth).toBe(5);
});
