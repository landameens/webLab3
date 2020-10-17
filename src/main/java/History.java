import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import java.util.Deque;
import java.util.LinkedList;

@ManagedBean(name = "History", eager = true)
@SessionScoped
public class History {

    private Deque<Record> records;

    public History() {
        records = new LinkedList<Record>();
    }

    public Deque<Record> getRecords() {
        return records;
    }

    public void addRecord(Record record) {
    }
}