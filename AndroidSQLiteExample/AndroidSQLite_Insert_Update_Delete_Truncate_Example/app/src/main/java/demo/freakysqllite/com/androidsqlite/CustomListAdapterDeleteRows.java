package demo.freakysqllite.com.androidsqlite;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.Button;
import android.widget.TextView;

import java.util.ArrayList;

public class CustomListAdapterDeleteRows extends BaseAdapter {

    Context c;
    ArrayList<UserModel> users;

    public CustomListAdapterDeleteRows(Context c, ArrayList<UserModel> users) {
        this.c = c;
        this.users = users;
    }

    @Override
    public int getCount() {
        return users.size();
    }

    @Override
    public Object getItem(int i) {
        return users.get(i);
    }

    @Override
    public long getItemId(int i) {
        return i;
    }

    @Override
    public View getView(final int i, View view, ViewGroup viewGroup) {
        if(view==null)
        {
            view=LayoutInflater.from(c).inflate(R.layout.listviewdelete_row,viewGroup,false);
        }

        TextView mtextView1 = (TextView) view.findViewById(R.id.textView1);
        TextView mtextView2 = (TextView) view.findViewById(R.id.textView2);
        TextView mtextView3 = (TextView) view.findViewById(R.id.textView3);
        Button deleteBtn = (Button) view.findViewById(R.id.button1);

        final UserModel user= (UserModel) this.getItem(i);
        mtextView1.setText(user.getUsername());
        mtextView2.setText(user.getUserphone());
        mtextView3.setText(user.getUseremail());

        deleteBtn.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                UsersDatabaseAdapter.deleteEntry(user.getID());
                users.remove(i);
                notifyDataSetChanged();
            }
        });

        return view;
    }
}