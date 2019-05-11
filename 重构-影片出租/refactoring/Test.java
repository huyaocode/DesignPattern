package refactoring;

public class Test {
	public static void main(String[] args) {
		Customer customer = new Customer("胡耀");

		Movie movie = new Movie("喜洋洋与灰太狼",Movie.CHILDRENTS);
		Rental rental = new Rental(movie, 4);
		customer.addRental(rental);

		movie = new Movie("复仇者联盟4",Movie.NEW_RELEASE);
		rental = new Rental(movie, 3);
		customer.addRental(rental);

		movie = new Movie("肖申克的救赎",Movie.REGULAR);
		rental = new Rental(movie, 5);
		customer.addRental(rental);
		
		System.out.println(customer.statement());
	}
}
