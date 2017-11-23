package com.reactnativenavigationdemo;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import com.reactnativenavigationdemo.reactnative.MyReactEntryActivity;

public class ActivityD extends AppCompatActivity {

  public static Intent callIntent(Context context) {
    Intent intent = new Intent(context, ActivityD.class);
    if (!(context instanceof Activity)) {
      intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    }
    return intent;
  }

  @Override protected void onCreate(@Nullable Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_d);
  }

  public void jumpToRnProfileScreen(View v) {
    startActivity(MyReactEntryActivity.callProfileScreenIntent(this, "I'm from native",
        "This is a message from native code"));
  }
}