package com.reactnativenavigationdemo;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import com.reactnativenavigationdemo.reactnative.MyReactEntryActivity;

public class ActivityA extends AppCompatActivity {

  @Override protected void onCreate(@Nullable Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_a);
  }

  public void jumpToRnHomeScreen(View v) {
    startActivity(MyReactEntryActivity.callHomeScreenIntent(this));
  }
}