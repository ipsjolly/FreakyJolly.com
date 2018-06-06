package demo.freakysqllite.com.androidsqlite;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    UsersDatabaseAdapter usersDatabaseAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        // create the instance of Databse
        usersDatabaseAdapter=new UsersDatabaseAdapter(getApplicationContext());
    }

    //open activity to Insert new rows in table
    public void insertRowActivity(View view) {
        Intent myIntent = new Intent(MainActivity.this, InsertRowActivity.class);
        MainActivity.this.startActivity(myIntent);
    }

    //Open activity to update rows
    public void updateRowView(View view) {
        Intent myIntent = new Intent(MainActivity.this, updateRowsActivity.class);
        MainActivity.this.startActivity(myIntent);
    }

    //call method to show rows count in Toast
    public void rowCount(View view) {
        UsersDatabaseAdapter.getRowCount();
    }

    //Open activity to delete rows
    public void deleteRowActivity(View view) {
        Intent myIntent = new Intent(MainActivity.this, deleteRowsActivity.class);
        MainActivity.this.startActivity(myIntent);
    }

    //Button method to truncate table rows
    public void truncateTable(View view) {
        UsersDatabaseAdapter.truncateTable();
    }

    //Open URL in browser
    public void goToUrl (View view) {
        String url = "http://www.google.com";
        Uri uriUrl = Uri.parse(url);
        Intent launchBrowser = new Intent(Intent.ACTION_VIEW, uriUrl);
        startActivity(launchBrowser);
    }
}
