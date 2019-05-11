package refactoring;

import java.util.Enumeration;
import java.util.Vector;

/**
 * 消费者
 */
public class Customer {
	private String name;
	private Vector<Rental> rentals = new Vector<>();

	public Customer(String name) {
		this.name = name;
	}

	public void addRental(Rental arg) {
		rentals.addElement(arg);
	}

	public String getName() {
		return name;
	}

	public String statement() {
		Enumeration<Rental> allRental = rentals.elements();
		String result = "Rental Record for " + getName() + "\n";
		while (allRental.hasMoreElements()) {
			Rental each = allRental.nextElement();
			result += "\t" + each.getMovie().getTitle() + "\t" + String.valueOf(each.getCharge()) + "\n";
		}
		result += "Amount owed is " + getTotalCharge() + "\n";
		result += "You earned " + getTotalFrequentRenterPoints() + " frequent renter points";

		return result;
	}
	// 计算所有费用
	private double getTotalCharge() {
		double result = 0;
		Enumeration<Rental> allRental = rentals.elements();
		while (allRental.hasMoreElements()) {
			Rental each = allRental.nextElement();
			result += each.getCharge();
		}
		return result;
	}
	// 计算常客点数
	private double getTotalFrequentRenterPoints() {
		int result = 0;
		Enumeration<Rental> allRental = rentals.elements();
		while (allRental.hasMoreElements()) {
			Rental each = allRental.nextElement();
			result += each.getfrequentRenterPoints();
		}
		return result;
	}
}
