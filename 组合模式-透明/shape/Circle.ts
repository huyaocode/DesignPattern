import IShape from "./IShape";

class Circle implements IShape {
    public  draw():void {
        console.log(" draw circle ");
    };
}

export default Circle