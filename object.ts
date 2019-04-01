class Gender {
    private firstName: string;
    private lastName: string;
    private age: number;

    isAge() {
        console.log("Your age is " + this.age);
    }

    constructor(age:number, lastName:string, firstName:string) {
        this.age = age;
        this.lastName = lastName;
        this.firstName = firstName;
    }
}

class Person extends Gender implements JobInfo {
    private job?: string;

    isJob(): string {
        if (this.job != null) {
            console.log("Your Job is " + this.job);
        }
        return this.job;
    }

    constructor(age:number, lastName:string, firstName:string, job?:string){
        super(age, lastName, firstName);
        this.job = job;
    }
}

interface JobInfo {
    isJob(): string;
}

let Bx = new Person(25, "HOUVET", "Benoit - Xavier", "Trainer");
let Maxime = new Person(32, "Cornuau", "Maxime", "Manager");
let thibault = new Person(21, "DURAND", "Thibault");
Bx.isJob();
Maxime.isJob();
thibault.isJob();
