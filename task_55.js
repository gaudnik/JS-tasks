class MyObject{
    static secondName = "dddd"
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name + " " + MyObject.secondName
    }
}
let objectA = new MyObject("ala")
let objectB = new MyObject("ela")
console.log(objectA.getName())
console.log(objectB.getName())
