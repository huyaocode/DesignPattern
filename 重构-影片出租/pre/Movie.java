package movie;

/**
 * 影片
 */
public class Movie {
    public static final int REGULAR = 0; // 普通片
    public static final int NEW_RELEASE = 1; // 新片
    public static final int CHILDRENS = 2; // 儿童片

    private String _title; // 名称
    private int _priceCode; //类型代号

    public Movie(String title, int priceCode) {
        _title = title;
        _priceCode = priceCode;
    }

    public int get_priceCode() {
        return _priceCode;
    }

    public void set_priceCode(int code) {
        _priceCode = code;
    }

    public String get_title() {
        return _title;
    }
}