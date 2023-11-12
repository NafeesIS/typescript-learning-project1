{
    //interface- generic

    interface Developer<T, X = null> {
        name: string;
        computer:{
            brand:string;
            model: string;
            releaseYear: number;
        };
        smartWatch:T;
        bike?: X
    }

    type ImilabWatch ={
        brand: string;
        model:string;
        display:string;
    }

    const poorDeveloper : Developer<ImilabWatch ,null>={
        name: "Nafees",
        computer:{
            brand:"Asus",
            model: "X-255UR",
            releaseYear:2013
        },
        smartWatch: {
            brand: "Imilab",
            model: "kw66",
            display: "OLED"
        }
    }

    interface AppleWatch{
        brand: string,
            model: string,
            heartTrack: boolean,
            sleepTrack: boolean,
    }

    interface Bike{
        model: string;
        engineCapacity: string;
    }

    const richDeveloper : Developer<AppleWatch , Bike>={
        name: "Diamond",
        computer:{
            brand:"HP",
            model: "X-25UR",
            releaseYear:2018
        },
        smartWatch: {
            brand: "Apple",
            model: "Expensive",
            heartTrack: true,
            sleepTrack: true,
        },
        bike:{
            model: 'Yamaha',
            engineCapacity: '1000cc'
        }
    }



















    //

}