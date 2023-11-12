{
  // generic type
  type GenericArray<T> = Array<T>;
  //   const rollNumbers: number[] = [3, 5, 8];
  //   const rollNumbers: Array<number> = [3, 5, 8];
  const rollNumbers: GenericArray<number> = [3, 5, 8];

  //   const mentors: string[] = ["E", "R", "T"];
  const mentors: GenericArray<string> = ["E", "R", "T"];

  //   const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];
type User = {
  name: string;
  age: number;
}
  const user: GenericArray<User> = [
    {
      name: "Nafees",
      age: 24,
    },
    {
      name: "Imtiaz",
      age: 25,
    },
  ];

  //generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const Manush: GenericTuple<string, string> = ["Mr. X", "Mrs. Y"];

  const UserWithID: GenericTuple<number, { name: string; email: string }> = [1234, { name: "Nafees", email: "nafees@gmail.com" }];
}
