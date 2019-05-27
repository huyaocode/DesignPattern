package refactoring;
/**
 * 儿童电影
 */
public class ChildPrice extends Price{

	@Override
	int getPriceCode() {
		return Movie.CHILDRENTS;
	}
	public double getCharge(int daysRented) {
		double result=1.5;
		if(daysRented>3)
			result+=(daysRented-3)*1.5;
		return result;
	}

}
