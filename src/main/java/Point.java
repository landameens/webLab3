import java.io.Serializable;

public class Point implements Serializable
{
    private Double x = 0D;
    private Double y = 0D;

    public Double getX()
    {
        return x;
    }

    public void setX(Double x)
    {
        this.x = x;
    }

    public Double getY()
    {
        return y;
    }

    public void setY(Double y)
    {
        this.y = y;
    }

    @Override
    public String toString()
    {
        return String.format("(%.2f, %.2f)", getX(), getY());
    }

    @Override
    public boolean equals(Object o)
    {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Point point = (Point) o;

        if (x != null ? !x.equals(point.x) : point.x != null) return false;
        return y != null ? y.equals(point.y) : point.y == null;
    }

    @Override
    public int hashCode()
    {
        int result = x != null ? x.hashCode() : 0;
        result = 31 * result + (y != null ? y.hashCode() : 0);
        return result;
    }
}
