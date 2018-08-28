package com.freakyjolly.listviewjsonexample.service;

import com.freakyjolly.listviewjsonexample.model.MyModel;

import retrofit2.Call;
import retrofit2.Callback;

public class ApiService {

    public void getClientList(Callback<MyModel> callback) {

        ApiClient service = ApiClientBuilder.getMGClient();

        Call<MyModel> result =  service.getJSONData();

        result.enqueue(callback);

    }


}
