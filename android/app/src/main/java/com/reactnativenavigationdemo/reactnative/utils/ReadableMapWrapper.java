package com.reactnativenavigationdemo.reactnative.utils;

import android.support.annotation.Nullable;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import java.util.List;

/**
 * Created by chenwei on 2017/8/2.
 */
public class ReadableMapWrapper {

  private ReadableMap map;

  public ReadableMapWrapper(@Nullable ReadableMap map) {
    this.map = map == null ? Arguments.createMap() : map;
  }

  public boolean getBoolean(String name, boolean df) {
    if (map.hasKey(name)) {
      return map.getBoolean(name);
    }
    return df;
  }

  public double getDouble(String name, double df) {
    if (map.hasKey(name)) {
      return map.getDouble(name);
    }
    return df;
  }

  public int getInt(String name, int df) {
    if (map.hasKey(name)) {
      return map.getInt(name);
    }
    return df;
  }

  public String getString(String name, String df) {
    if (map.hasKey(name)) {
      return map.getString(name);
    }
    return df;
  }

  public List<Object> getArray(String name, List<Object> df) {
    if (map.hasKey(name)) {
      return map.getArray(name).toArrayList();
    }
    return df;
  }

  public ReadableMapWrapper getMap(String name) {

    if (map.hasKey(name)) {
      return new ReadableMapWrapper(map.getMap(name));
    }

    return new ReadableMapWrapper(null);
  }
}