import { pipe } from "../src/pipe";

describe("pipe", () => {
  it("calls each provided function on the data in the order presented", () => {
    const data: number = 1;

    const addOne = (data: number) => data + 1;

    const multiplyByThree = (data: number) => data * 3;

    const transformedData = pipe(addOne, multiplyByThree)(data);

    expect(transformedData).toEqual(6);
  });
});
