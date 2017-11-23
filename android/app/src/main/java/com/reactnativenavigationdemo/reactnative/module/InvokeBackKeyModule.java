package com.reactnativenavigationdemo.reactnative.module;

import android.app.Activity;
import com.facebook.common.executors.UiThreadImmediateExecutorService;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by johnwatsondev on 21/11/2017.
 */
public class InvokeBackKeyModule extends ReactContextBaseJavaModule {

  private static final String MODULE_NAME = "InvokeBackKey";

  public InvokeBackKeyModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override public String getName() {
    return MODULE_NAME;
  }

  @ReactMethod public void back() {
    final Activity currentActivity = getCurrentActivity();

    if (currentActivity != null && !currentActivity.isFinishing()) {
      UiThreadImmediateExecutorService.getInstance().execute(new Runnable() {
        @Override public void run() {
          currentActivity.finish();
        }
      });
    }
  }
}