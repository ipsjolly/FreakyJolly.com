package demo.freakysqllite.com.androidsqlite;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;

import static demo.freakysqllite.com.androidsqlite.UsersDatabaseAdapter.TABLE_NAME;

public class DataBaseHelper extends SQLiteOpenHelper {
    public DataBaseHelper(Context context, String name, SQLiteDatabase.CursorFactory factory, int version) {
        super(context, name, factory, version);
    }

    @Override
    public void onCreate(SQLiteDatabase _db) {
        try {
            _db.execSQL(UsersDatabaseAdapter.DATABASE_CREATE);
        }catch(Exception er){
            Log.e("Error","exceptioin");
        }
    }

    @Override
    public void onUpgrade(SQLiteDatabase _db, int _oldVersion, int _newVersion)
    {
        _db.execSQL("DROP TABLE IF EXISTS " + TABLE_NAME);
        _db.execSQL("DROP TABLE IF EXISTS " + "SEMESTER1");
        // Create a new one.
        onCreate(_db);
    }
}