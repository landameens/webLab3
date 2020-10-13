import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import java.io.Serializable;
import java.util.Objects;

@ManagedBean(name = "Record", eager = true)
@ViewScoped
public class Record implements Serializable {
    private Point point;
    private Boolean result;
    private Area area;

    public Record() {
        this.point = new Point();
        this.area = new Area();
    }

    public Double getRadius() {
        return getArea().getRadius();
    }

    public void setRadius(Double radius) {
        this.getArea().setRadius(radius);
    }

    public Point getPoint() {
        return point;
    }

    public void setPoint(Point point) {
        this.point = point;
    }

    public Area getArea() {
        return area;
    }

    public void setArea(Area area) {
        this.area = area;
    }

    public void process() {
        this.result = area.contains(point);
    }

    public Boolean getResult() {
        return result;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Record record = (Record) o;

        if (!Objects.equals(point, record.point)) {
            return false;
        }
        if (!Objects.equals(result, record.result)) {
            return false;
        }
        return Objects.equals(area, record.area);
    }

    @Override
    public int hashCode() {
        return Objects.hash(point, result, area);
    }
}
