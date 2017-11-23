package com.reactnativenavigationdemo.reactnative.module;

import android.app.Activity;
import android.util.Log;
import com.facebook.common.executors.UiThreadImmediateExecutorService;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.reactnativenavigationdemo.ActivityD;
import com.reactnativenavigationdemo.reactnative.utils.PromiseHintUtil;

/**
 * Created by johnwatsondev on 21/11/2017.
 */
public class InvokeJumpToAppModule extends ReactContextBaseJavaModule {

  private static final String MODULE_NAME = "InvokeJumpToApp";

  public InvokeJumpToAppModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override public String getName() {
    return MODULE_NAME;
  }

  @ReactMethod public void navigateToActivityD(Promise promise) {
    final Activity currentActivity = getCurrentActivity();

    if (currentActivity == null) {
      PromiseHintUtil.rejectOfActivityDoesNotExist(promise);
      return;
    }

    Log.d(MODULE_NAME,
        "navigateToActivityD thread name = " + Thread.currentThread().getName() + ", id = " + Thread
            .currentThread()
            .getId());

    // This method was invoked in a separate thread instead of UIThread.
    // So we need to invoke startActivity method in UIThread.
    UiThreadImmediateExecutorService.getInstance().execute(new Runnable() {
      @Override public void run() {
        currentActivity.startActivity(ActivityD.callIntent(currentActivity));
      }
    });
  }
}