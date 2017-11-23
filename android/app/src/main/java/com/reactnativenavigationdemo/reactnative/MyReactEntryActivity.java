package com.reactnativenavigationdemo.reactnative;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.ReactContext;
import com.reactnativenavigationdemo.reactnative.base.AppCompatReactActivity;
import com.reactnativenavigationdemo.reactnative.config.RNConfig;
import com.reactnativenavigationdemo.reactnative.config.RNScreens;
import javax.annotation.Nullable;

/**
 * RN入口类
 */
public class MyReactEntryActivity extends AppCompatReactActivity
    implements ReactInstanceManager.ReactInstanceEventListener {

  private static final String TAG = MyReactEntryActivity.class.getSimpleName();

  @Nullable @Override protected String getMainComponentName() {
    return RNConfig.RN_REGISTER_COMPONENT_KEY;
  }

  @Override protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    getReactInstanceManager().addReactInstanceEventListener(this);
  }

  private static Intent callIntent(Context context) {
    return new Intent(context, MyReactEntryActivity.class);
  }

  /**
   * 未遵循迪米特原则，这个入口并不知晓要跳转的 RN 界面需要什么业务数据
   *
   * @param bundle 给 RN 页面传递的数据随意包装
   */
  public static Intent callIntent(Context context, Bundle bundle) {
    Intent intent = callIntent(context);
    intent.putExtras(bundle);
    return intent;
  }

  public static Intent callHomeScreenIntent(Context context) {
    Intent intent = callIntent(context);
    intent.putExtra(RNConfig.SCREEN, RNScreens.HOME);
    return intent;
  }

  public static Intent callProfileScreenIntent(Context context, String name, String msg) {
    Intent intent = callIntent(context);
    intent.putExtra(RNConfig.SCREEN, RNScreens.PROFILE);
    intent.putExtra(RNConfig.NAME, TextUtils.isEmpty(name) ? "" : name);
    intent.putExtra(RNConfig.MESSAGE, TextUtils.isEmpty(msg) ? "" : msg);
    return intent;
  }

  @Nullable @Override protected Bundle getLaunchOptions() {
    if (getIntent() != null) {
      Bundle bundle = getIntent().getExtras();
      if (bundle == null) {
        bundle = new Bundle();
      }
      return bundle;
    } else {
      return new Bundle();
    }
  }

  @Override public void onReactContextInitialized(ReactContext context) {
    Log.d(TAG, "onReactContextInitialized...");
  }
}