package com.reactnativenavigationdemo.reactnative.packages;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.reactnativenavigationdemo.reactnative.module.InvokeBackKeyModule;
import com.reactnativenavigationdemo.reactnative.module.InvokeJumpToAppModule;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Created by johnwatsondev on 21/11/2017.
 */
public class MyReactPackage implements ReactPackage {
  @Override
  public List<NativeModule> createNativeModules(ReactApplicationContext reactApplicationContext) {
    return Arrays.<NativeModule>asList(new InvokeJumpToAppModule(reactApplicationContext),
        new InvokeBackKeyModule(reactApplicationContext));
  }

  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactApplicationContext) {
    return Collections.emptyList();
  }
}