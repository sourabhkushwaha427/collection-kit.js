import { AhoCorasick } from "../src/AhoCorasick";

test("instantiate AhoCorasick", () => {
  const ac = new AhoCorasick();
  expect(ac.states).toBe(1);
});
