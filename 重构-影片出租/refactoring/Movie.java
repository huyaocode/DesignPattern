package refactoring;

public class Movie {
	public static final int CHILDRENTS = 2;
	public static final int REGULAR = 0;
	public static final int NEW_RELEASE = 1;

	private String title;

	private Price price;

	public Movie(String title, int priceCode) {
		this.title = title;
		setPriceCode(priceCode);
	}

	public String getTitle() {
		return title;
	}

	public int getPriceCode() {
		return price.getPriceCode();
	}

	public void setPriceCode(int arg) {
		switch (arg) {
		case REGULAR:
			price = new RegularPrice();
			break;
		case CHILDRENTS:
			price = new ChildPrice();
			break;
		case NEW_RELEASE:
			price = new NewReleasePrice();
			break;

		default:
			throw new IllegalArgumentException("Incorrect Price Code");
		}
	}

	public double getCharge(int daysRented) {
		return price.getCharge(daysRented);
	}

	public int getfrequentRenterPoints(int daysRented) {
		return price.getfrequentRenterPoints(daysRented);
	}
}
