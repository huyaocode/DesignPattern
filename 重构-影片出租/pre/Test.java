package movie;

public class Test {

    /**
     * @param args
     */
    public static void main(String[] args) {
        Customer customer = new Customer("ZhangSan");

        customer.addRental(new Rental(new Movie("aaa", Movie.REGULAR), 1));
        customer.addRental(new Rental(new Movie("bbb", Movie.NEW_RELEASE), 5));
        customer.addRental(new Rental(new Movie("ccc", Movie.CHILDRENS), 1));

        System.out.println(customer.statement());
    }
}