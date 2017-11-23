package com.reactnativenavigationdemo.reactnative.utils;

import com.facebook.react.bridge.Promise;

/**
 * Created by johnwatsondev on 20/06/2017.
 */
public final class PromiseHintUtil {
  public static final String E_OCCUR_EXCEPTION = "E_OCCUR_EXCEPTION";

  private static final String E_START_ACTIVITY_FOR_RESULT_CANCELLED =
      "E_START_ACTIVITY_FOR_RESULT_CANCELLED";
  private static final String START_ACTIVITY_FOR_RESULT_CANCELLED = "Activity result was cancelled";

  private static final String E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST";
  private static final String ACTIVITY_DOES_NOT_EXIST = "Activity doesn't exist";

  public static void rejectOfActivityDoesNotExist(Promise promise) {
    if (promise != null) {
      promise.reject(PromiseHintUtil.E_ACTIVITY_DOES_NOT_EXIST, PromiseHintUtil.ACTIVITY_DOES_NOT_EXIST);
    }
  }

  public static void rejectOfStartActivityForResultCancelled(Promise promise) {
    if (promise != null) {
      promise.reject(PromiseHintUtil.E_START_ACTIVITY_FOR_RESULT_CANCELLED,
          PromiseHintUtil.START_ACTIVITY_FOR_RESULT_CANCELLED);
    }
  }

  public static void rejectOfOccurException(Promise promise, Throwable e) {
    if (promise != null) {
      promise.reject(E_OCCUR_EXCEPTION, e);
    }
  }

  public static void reject(Promise promise, String code, String msg) {
    if (promise != null) {
      promise.reject(code, msg);
    }
  }

  public static void resolve(Promise promise, Object object) {
    if (promise != null) {
      promise.resolve(object);
    }
  }
}