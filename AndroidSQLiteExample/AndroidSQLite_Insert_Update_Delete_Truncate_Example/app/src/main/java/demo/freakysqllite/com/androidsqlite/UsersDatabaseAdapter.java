package demo.freakysqllite.com.androidsqlite;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.SQLException;
import android.database.sqlite.SQLiteDatabase;
import android.util.Log;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

import static xdroid.toaster.Toaster.toast;


public class UsersDatabaseAdapter {
    static ArrayList<UserModel> users=new ArrayList<>();
    static final String DATABASE_NAME = "UsersDatabase.db";
    static final String TABLE_NAME = "USERS";
    static final int DATABASE_VERSION = 1;
    // SQL Statement to create a new database.
    static final String DATABASE_CREATE = "create table "+TABLE_NAME+"( ID integer primary key autoincrement,user_name  text,user_phone  text,user_email text); ";
    private static final String TAG = "UsersDatabaseAdapter:";

    // Variable to hold the database instance
    public static SQLiteDatabase db;
    // Context of the application using the database.
    private final Context context;
    // Database open/upgrade helper
    private static DataBaseHelper dbHelper;
    public  UsersDatabaseAdapter(Context _context)
    {
        context = _context;
        dbHelper = new DataBaseHelper(context, DATABASE_NAME, null, DATABASE_VERSION);
    }

    // Method to open the Database
    public  UsersDatabaseAdapter open() throws SQLException
    {
        db = dbHelper.getWritableDatabase();
        return this;
    }

    // Method to close the Database
    public void close()
    {
        db.close();
    }

    // method returns an Instance of the Database
    public  SQLiteDatabase getDatabaseInstance()
    {
        return db;
    }

    // method to insert a record in Table
    public static String insertEntry(String user_name, String user_phone, String user_email)
    {

        try {


            ContentValues newValues = new ContentValues();
            // Assign values for each column.
            newValues.put("user_name", user_name);
            newValues.put("user_phone", user_phone);
            newValues.put("user_email", user_email);

            // Insert the row into your table
            db = dbHelper.getWritableDatabase();
            long result=db.insert(TABLE_NAME, null, newValues);
            Log.i("Row Insert Result ", String.valueOf(result));
            toast("User Info Saved! Total Row Count is "+getRowCount());
            db.close();

        }catch(Exception ex) {
        }
        return "ok";
    }

    // method to get all Rows Saved in Table
    public static ArrayList<UserModel> getRows() throws JSONException {

        users.clear();
        UserModel user;
        db=dbHelper.getReadableDatabase();
        Cursor projCursor = db.query(TABLE_NAME, null, null,null, null, null, null,null);
        while (projCursor.moveToNext()) {

            user=new UserModel();
            user.setID(projCursor.getString(projCursor.getColumnIndex("ID")));
            user.setUsername(projCursor.getString(projCursor.getColumnIndex("user_name")));
            user.setUserphone(projCursor.getString(projCursor.getColumnIndex("user_phone")));
            user.setUseremail(projCursor.getString(projCursor.getColumnIndex("user_email")));
            users.add(user);
        }
        projCursor.close();
        return users;
    }

    // method to delete a Record in Tbale using Primary Key Here it is ID
    public static int deleteEntry(String ID)
    {
        String where="ID=?";
        int numberOFEntriesDeleted= db.delete(TABLE_NAME, where, new String[]{ID}) ;
        toast("Number fo Entry Deleted Successfully : "+numberOFEntriesDeleted);
        return numberOFEntriesDeleted;
    }

    // method to get Count of Toatal Rows in Table
    public static int getRowCount()
    {
        db=dbHelper.getReadableDatabase();
        Cursor cursor=db.query(TABLE_NAME, null, null, null, null, null, null);
        toast("Row Count is "+cursor.getCount());
        db.close();
        return cursor.getCount();
    }

    // method to Truncate/ Remove All Rows in Table
    public static void truncateTable()
    {
        db=dbHelper.getReadableDatabase();
        db.delete(TABLE_NAME, "1", null);
        db.close();
        toast("Table Data Truncated!");
    }

    // method to Update an Existing Row in Table
    public static void  updateEntry(String ID,String Username, String Userphone, String Useremail)
    {
        ContentValues updatedValues = new ContentValues();
        updatedValues.put("user_name", Username);
        updatedValues.put("user_phone", Userphone);
        updatedValues.put("user_email", Useremail);
        String where="ID = ?";
        db=dbHelper.getReadableDatabase();
        db.update(TABLE_NAME,updatedValues, where, new String[]{ID});
        db.close();
        toast("Row Updated!");
    }

}