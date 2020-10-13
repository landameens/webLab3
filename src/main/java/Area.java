public class Area
{
    private double radius;

    public Area()
    {
        radius = 1D;
    }

    public boolean contains(Point point)
    {
        double x = point.getX();
        double y = point.getY();
        double halfRadius = getRadius() / 2;

        boolean inTriangle =
                (-halfRadius <= x && x <= 0) &&
                        (0 >= y && y >= -radius) &&
                        (y + x * 2) >= -radius;

        boolean inCircleQuadrant =
                (x <= 0 && y >= 0) &&
                        (x * x + y * y <= radius * radius);

        boolean inSquare =
                (0 <= x && x <= halfRadius) &&
                        (-radius <= y && y <= 0);

        return inTriangle || inCircleQuadrant || inSquare;
    }

    public double getRadius()
    {
        return radius;
    }

    public void setRadius(double radius)
    {
        this.radius = radius;
    }

    @Override
    public boolean equals(Object o)
    {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Area area = (Area) o;

        return Double.compare(area.radius, radius) == 0;
    }

    @Override
    public int hashCode()
    {
        long temp = Double.doubleToLongBits(radius);
        return (int) (temp ^ (temp >>> 32));
    }
}
