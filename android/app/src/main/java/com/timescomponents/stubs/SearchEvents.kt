package com.timescomponents.stubs

import android.util.Log
import com.facebook.react.bridge.BaseJavaModule
import com.facebook.react.bridge.ReactMethod

class SearchEvents : BaseJavaModule() {
    override fun getName() = "SearchEvents"

    @ReactMethod
    fun onArticlePress(url: String) {
        Log.d(name, "onArticlePress $url")
    }
}
