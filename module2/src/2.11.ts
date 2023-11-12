{
    //utility type
    //Pick utility

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type NameAge = Pick<Person, "name" | "age">


    //omit   

    type ContactInfo = Omit<Person, "name" | "age">

//Required

type PersonRequired = Required<Person>
type PersonPartial = Partial<Person>

//Read Only

type PersonReadOnly = Readonly<Person>

const person1 : PersonReadOnly = {
    name: "Mr. Nafees",
    age: 24,
    contactNo: '01715409191'
}

person1.name = "Mr. Nafees"

//Record

// type MyObj = {
//     a: string;
//     b: string;
// }

type MyObj = Record<string, unknown>

const EmptyObj : Record<string,unknown> = {}

const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    g: '50'
}

    //
}