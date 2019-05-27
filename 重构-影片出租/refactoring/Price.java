package refactoring;
/**
 * Price
 */
public abstract class Price {
	abstract int getPriceCode();

	abstract double getCharge(int daysRented);
	
	int getfrequentRenterPoints(int daysRented) {
		return 1;
	}
}
