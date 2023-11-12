{
// conditional type

type a1 = number;
type b1 = string;

type x = a1 extends null ? true : false;
type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    truck: string
}

//have car | bike | ship | truck ?

type CheckVehicle <T> = T extends keyof Sheikh ? true : false;

type HasBike = CheckVehicle<"truck">


//


}