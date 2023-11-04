{
  //Learning Function
  //Normal Function
  //Arrow Function

  function add(num1: number, num2: number = 10): number {
    return num1 + num2;
  }

  add(2, 9);

  const addArrow = (num1: number, num2: number): number => num1 + num2;
  addArrow(4, 5);

  //object --> function --> method

  const poorUser = {
    name: "Nafees",
    balance: 7000,
    addBalance(balance: number): string {
      return `My New Balance is :${this.balance + balance}`;
    },
  };

  const arr: number[] = [1, 4, 10];

  const newArray: number[] = arr.map((element: number): number => element * element);
}
