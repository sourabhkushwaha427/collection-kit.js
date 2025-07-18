import { VanEmdeBoasTree } from "../src/VanEmdeBoasTree";

test("instantiate VanEmdeBoasTree", () => {
  const veb = new VanEmdeBoasTree(16);
  expect(veb.u).toBe(16);
});
