package com.freakyjolly.listviewjsonexample;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.widget.ListView;

import com.freakyjolly.listviewjsonexample.model.MyModel;
import com.freakyjolly.listviewjsonexample.service.ApiService;

import java.util.ArrayList;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends AppCompatActivity {


    ListView listView ;
    String TAG = "MainActivity";
    ArrayList<MyModel> dummyData =new ArrayList<>();
    static CustomListAdapter customListAdapter;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //Make a server call and get data
        getdata();
    }


    public void getdata() {
        try {

            new ApiService().getClientList( new Callback<MyModel>() {
                @Override
                public void onResponse(Call<MyModel> call, Response<MyModel> response) {

                    Log.d(TAG, "onResponse: response..."+response);

                    /*

                    {
                      "results": [
                        {
                          "phone": "+91783XXXX345",
                          "name": "FreakyJolly"
                        },
                        {
                          "phone": "+9178XXXX66",
                          "name": "Olivia"
                        },
                        {
                          "phone": "+9178XXXX66",
                          "name": "Isla"
                        },
                        {
                          "phone": "+9178XXXX66",
                          "name": "Emily"
                        },
                        {
                          "phone": "+9178XXXX66",
                          "name": "Amelia"
                        },
                        {
                          "phone": "+9178XXXX66",
                          "name": "Sophia"
                        }],
                      "statusCode": "1",
                      "count": "2"
                    }

                    */

                    //This will get result part from dummy JSON response
                    dummyData = response.body().getResults();
                    createListView();
                }
                @Override
                public void onFailure(Call<MyModel> call, Throwable t) {

                    Log.d(TAG, "onFailure: response...");
                }
            });

        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }


    public  void createListView(){
        //Send JSON object list to custom BaseAdapter
        customListAdapter = new CustomListAdapter(getApplicationContext(), dummyData);
        listView = (ListView) findViewById(R.id.listShowJSONData);
        listView.setAdapter(customListAdapter);
    }


}
