package movie;

import java.util.Enumeration;
import java.util.Vector;

public class Customer {
    private String _name;// 姓名
    private Vector _rentals = new Vector(); // 租借记录

    public Customer(String name) {
        _name = name;
    }

    public void addRental(Rental obj) {
        _rentals.addElement(obj);
    }

    public String get_name() {
        return _name;
    }

    public String statement() {
        double totalAmount = 0; // --总消费金额
        int frequentRenterPoints = 0; // --常客积点
        Enumeration rentals = _rentals.elements();
        String result = "Rental Record for " + get_name() + "\n";

        while (rentals.hasMoreElements()) {
            double thisAmount = 0;
            Rental each = (Rental) rentals.nextElement(); // --取得一笔租借记录

            switch (each.get_movie().get_priceCode()) { // --取得影片出租价格
            case Movie.REGULAR: // --普通片
                thisAmount += 2;
                if (each.get_daysRented() > 2)
                    thisAmount += (each.get_daysRented() - 2) * 1.5;
                break;
            case Movie.NEW_RELEASE: // --新片
                thisAmount += each.get_daysRented() * 3;
                break;
            case Movie.CHILDRENS: // --儿童片
                thisAmount += 1.5;
                if (each.get_daysRented() > 3)
                    thisAmount += (each.get_daysRented() - 3) * 1.5;
                break;
            }

            // ---累加常客积点
            frequentRenterPoints++;
            if (each.get_movie().get_priceCode() == Movie.NEW_RELEASE && each.get_daysRented() > 1)
                frequentRenterPoints++;
            // ---显示此笔租借数据
            result += "\t" + each.get_movie().get_title() + "\t" + String.valueOf(thisAmount) + "\n";
            totalAmount += thisAmount;
        }
        // ---结尾打印
        result += "Amount owed is " + String.valueOf(totalAmount) + "\n";
        result += "You earned " + String.valueOf(frequentRenterPoints) + " frequent renter points";
        return result;
    }
}