import House from "../House";

 abstract class Build {
	
	public abstract  getHourse():House;

	public abstract  creatWall(): void;
	public abstract  creatDoor(): void;
	public abstract  creatWindow(): void;

}

export default Build