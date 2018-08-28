package com.freakyjolly.listviewjsonexample.service;

import com.freakyjolly.listviewjsonexample.model.MyModel;

import org.json.JSONArray;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.GET;
import retrofit2.http.POST;

public interface ApiClient {
    @GET("/demo/dummyjson/name_phone.json")
    Call<MyModel> getJSONData();
}