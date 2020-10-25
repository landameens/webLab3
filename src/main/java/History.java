import jdk.nashorn.internal.objects.annotations.Getter;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import java.io.Serializable;
import java.util.Deque;
import java.util.LinkedList;

@ManagedBean(name = "history", eager = true)
@SessionScoped
public class History implements Serializable {
    private SessionFactory sessionFactory;

    private Point point;

    private Deque<Point> points;

    public History() {
        points = new LinkedList<>();
        point = new Point();
        connection();
    }

    public void addRecord() {
        Session session = sessionFactory.openSession();
        session.beginTransaction();
        point.check();
        points.add(point);
        session.save(point);
        session.getTransaction().commit();
        point = new Point();
    }

    private void connection() {
        Configuration configuration = new Configuration().configure();
        configuration.addAnnotatedClass(Point.class);
        ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder().applySettings(configuration.getProperties()).build();
        sessionFactory = configuration.buildSessionFactory(serviceRegistry);
    }

    public Deque<Point> getPoints() {
        return points;
    }

    public void setPoints(Deque<Point> points) {
        this.points = points;
    }

    public Point getPoint() {
        return point;
    }

    public void setPoint(Point point) {
        this.point = point;
    }
}