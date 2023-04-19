const { kramarMethod } = require("../kramarMethod");

describe("function:kramarMethod", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
  });

  afterEach(() => {
    console.error.mockClear();
  });
  it("should return { X1: 5, X2: -1, X3: -2 }", () => {
    const matrix = [
      [3, 1, -7, 28],
      [4, 5, -2, 19],
      [1, 9, 5, -14],
    ];
    expect(kramarMethod(matrix)).toStrictEqual({ X1: 5, X2: -1, X3: -2 });
  });
  it('should return undefined and console.error "Provide 3 x 4 matrix, other not fits"', () => {
    const matrix = [[3, 1, -7, 28]];

    expect(kramarMethod(matrix)).toBe(undefined);
    expect(console.error).toHaveBeenCalled();
    expect(console.error.mock.calls[0][0]).toContain(
      "Provide 3 x 4 matrix, other not fits"
    );
  });
  it('should return undefined and console.error "Each row should contain 4 elements, 3 for unknown and 1 for result"', () => {
    const matrix = [
      [3, 1, -7, 28],
      [4, 5, -2, 19],
      [1, 9],
    ];

    expect(kramarMethod(matrix)).toBe(undefined);
    expect(console.error).toHaveBeenCalled();
    expect(console.error.mock.calls[0][0]).toContain(
      "Each row should contain 4 elements, 3 for unknown and 1 for result"
    );
  });
  it('should throw error "Provided matrix is not fitting for Kramar method due to determinant equal 0"', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, -30],
    ];

    expect(() => {
      kramarMethod(matrix);
    }).toThrow(
      /^Provided matrix is not fitting for Kramar method due to determinant equal 0$/
    );
  });
});
