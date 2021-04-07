package com.timescomponents.stubs

import android.util.Log

import com.facebook.react.bridge.BaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap

class SearchEvents : BaseJavaModule() {
  override fun getName() = "SearchEvents";

  @ReactMethod
  fun onArticlePress(url: String) {
    Log.d(url, "received event with $url")
  }
}
