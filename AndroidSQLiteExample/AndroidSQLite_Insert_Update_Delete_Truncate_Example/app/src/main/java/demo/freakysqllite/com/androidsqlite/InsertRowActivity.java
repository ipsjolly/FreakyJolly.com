package demo.freakysqllite.com.androidsqlite;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import static xdroid.toaster.Toaster.toast;

public class InsertRowActivity extends AppCompatActivity {

    private TextView mUserName;
    private TextView mUserPhone;
    private TextView mUserEmail;
    private Button insertRowFrom;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_insert_row);
        //Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        //setSupportActionBar(toolbar);


        insertRowFrom = (Button) findViewById(R.id.insertRowFrom);
        mUserName = (TextView) findViewById(R.id.userNameTxt);
        mUserPhone = (TextView) findViewById(R.id.userPhoneTxt);
        mUserEmail = (TextView) findViewById(R.id.userEmailTxt);


        ActionBar actionBar = getSupportActionBar();
        if (actionBar != null) {
            actionBar.setDisplayHomeAsUpEnabled(true);
            actionBar.setTitle("Inser New Row in SQLite");
        }
    }

    public void insertRow(View view) {

        TextView userNameTxtView = findViewById(R.id.userNameTxt);
        TextView userPhoneTxtView = findViewById(R.id.userPhoneTxt);
        TextView userEmailTxtView = findViewById(R.id.userEmailTxt);

        if(userNameTxtView.getText().toString().trim().equals("")
                || userPhoneTxtView.getText().toString().trim().equals("")
                || userEmailTxtView.getText().toString().trim().equals("")){
            toast("Please Fill All Fields ");
        }else{
            UsersDatabaseAdapter.insertEntry(userNameTxtView.getText().toString().trim(),userPhoneTxtView.getText().toString(),userEmailTxtView.getText().toString());
            Intent myIntent = new Intent(InsertRowActivity.this, MainActivity.class);
            InsertRowActivity.this.startActivity(myIntent);
        }

    }

    public boolean onOptionsItemSelected(MenuItem item){
        switch (item.getItemId()) {
            case android.R.id.home:
                finish();
                return true;
        }
        return super.onOptionsItemSelected(item);
    }

    public boolean onCreateOptionsMenu(Menu menu) {
        return true;
    }

}
