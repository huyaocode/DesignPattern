package refactoring;

public class NewReleasePrice extends Price{

	@Override
	int getPriceCode() {
		return Movie.NEW_RELEASE;
	}
	public double getCharge(int daysRented) {
	    return daysRented*3;
	}
	
	public int getfrequentRenterPoints(int daysRented) {
		return (daysRented > 1 )? 2:1;
	}
}
