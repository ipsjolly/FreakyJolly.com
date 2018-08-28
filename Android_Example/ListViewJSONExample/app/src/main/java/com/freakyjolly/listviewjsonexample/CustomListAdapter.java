package com.freakyjolly.listviewjsonexample;

import android.annotation.TargetApi;
import android.content.Context;
import android.os.Build;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import com.freakyjolly.listviewjsonexample.model.MyModel;
import com.google.gson.internal.LinkedTreeMap;

import java.util.ArrayList;

public class CustomListAdapter extends BaseAdapter {


    Context c;
    ArrayList<MyModel> users;

    public CustomListAdapter(Context c, ArrayList<MyModel> users) {
        this.c = c;
        this.users = users;
    }

    @Override
    public int getCount() {
        return users.size();
    }

    @Override
    public MyModel getItem(int i) {
        return this.users.get(i);
    }

    @Override
    public long getItemId(int i) {
        return i;
    }

    @TargetApi(Build.VERSION_CODES.KITKAT)
    @Override
    public View getView(final int i, View view, ViewGroup viewGroup) {
        if(view==null)
        {
            view= LayoutInflater.from(c).inflate(R.layout.json_data_list,viewGroup,false);
        }

        TextView mUserDetails = (TextView) view.findViewById(R.id.userDetails);
        TextView mUserStatus = (TextView) view.findViewById(R.id.userStatus);


        Object getrow = this.users.get(i);
        LinkedTreeMap<Object,Object> rowmap = (LinkedTreeMap) getrow;
        String name = rowmap.get("name").toString();
        String phone = rowmap.get("phone").toString();

        mUserDetails.setText(name);
        mUserStatus.setText(phone);

        return view;
    }

}
