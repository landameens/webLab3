import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "records")
@ManagedBean(name = "point", eager = true)
@ViewScoped
public class Point implements Serializable {
    @Id
    @SequenceGenerator(name = "seqGen", sequenceName = "gen_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seqGen") private int id;
    @Transient
    private static final long serialVersionUID = 3L;
    private Double x;
    private Double y;
    private Double radius;
    private boolean result;

    public Point() {}

    public Point(Double x, Double y, Double radius, boolean result) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.result = result;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void check() {
        boolean inTriangle =
                (x >= -(radius / 2) && x <= 0) &&
                        (y <= 0 && y >= -(radius / 2)) &&
                        y >= (-(radius / 2) - x);

        boolean inCircleQuadrant =
                (x <= 0 && y >= 0) &&
                        (x * x + y * y <= radius * radius);

        boolean inSquare =
                (x >= 0 && x <= radius) &&
                        (y >= 0 && y <= radius);

        result = inTriangle || inCircleQuadrant || inSquare;
    }

    public Double getX() {
        return x;
    }

    public void setX(Double x) {
        this.x = x;
    }

    public Double getY() {
        return y;
    }

    public void setY(Double y) {
        this.y = y;
    }

    public Double getRadius() {
        return radius;
    }

    public void setRadius(Double radius) {
        this.radius = radius;
    }

    public boolean isResult() {
        return result;
    }

    public void setResult(boolean result) {
        this.result = result;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Point point = (Point) o;

        if (id != point.id) return false;
        if (result != point.result) return false;
        if (!x.equals(point.x)) return false;
        if (!y.equals(point.y)) return false;
        return radius.equals(point.radius);
    }

    @Override
    public int hashCode() {
        int result1 = id;
        result1 = 31 * result1 + x.hashCode();
        result1 = 31 * result1 + y.hashCode();
        result1 = 31 * result1 + radius.hashCode();
        result1 = 31 * result1 + (result ? 1 : 0);
        return result1;
    }

    @Override
    public String toString() {
        return "Point{" +
                "id=" + id +
                ", x=" + x +
                ", y=" + y +
                ", radius=" + radius +
                ", result=" + result +
                '}';
    }
}


