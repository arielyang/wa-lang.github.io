import{_ as s,c as a,o as n,a as l}from"./app.4bd23fa7.js";const p="/st0015-01.png",o="/st0015-02.jpg",e="/st0015-03.jpg",t="/st0015-04.jpg",r="/st0015-05.jpg",c="/st0015-06.jpg",m=JSON.parse('{"title":"\u51F9\u8BED\u8A00\u70B9\u4EAE Arduino Nano 33","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. Arduino-wasm \u662F\u4EC0\u4E48","slug":"_1-arduino-wasm-\u662F\u4EC0\u4E48","link":"#_1-arduino-wasm-\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"2. Arduino Nano 33 \u5F00\u53D1\u677F\u4ECB\u7ECD","slug":"_2-arduino-nano-33-\u5F00\u53D1\u677F\u4ECB\u7ECD","link":"#_2-arduino-nano-33-\u5F00\u53D1\u677F\u4ECB\u7ECD","children":[]},{"level":2,"title":"3. \u7F16\u5199 Arduino \u7684\u95EA\u706F\u4F8B\u5B50","slug":"_3-\u7F16\u5199-arduino-\u7684\u95EA\u706F\u4F8B\u5B50","link":"#_3-\u7F16\u5199-arduino-\u7684\u95EA\u706F\u4F8B\u5B50","children":[]},{"level":2,"title":"4. syscall/arduino \u5305\u4ECB\u7ECD","slug":"_4-syscall-arduino-\u5305\u4ECB\u7ECD","link":"#_4-syscall-arduino-\u5305\u4ECB\u7ECD","children":[]},{"level":2,"title":"5. \u7F16\u8BD1\u5230 Arduino-wasm \u5E73\u53F0","slug":"_5-\u7F16\u8BD1\u5230-arduino-wasm-\u5E73\u53F0","link":"#_5-\u7F16\u8BD1\u5230-arduino-wasm-\u5E73\u53F0","children":[]},{"level":2,"title":"6. Arduino \u5E73\u53F0\u80F6\u6C34\u4EE3\u7801\u521D\u63A2","slug":"_6-arduino-\u5E73\u53F0\u80F6\u6C34\u4EE3\u7801\u521D\u63A2","link":"#_6-arduino-\u5E73\u53F0\u80F6\u6C34\u4EE3\u7801\u521D\u63A2","children":[]},{"level":2,"title":"7. Arduino \u6784\u5EFA & \u6267\u884C","slug":"_7-arduino-\u6784\u5EFA-\u6267\u884C","link":"#_7-arduino-\u6784\u5EFA-\u6267\u884C","children":[]},{"level":2,"title":"8. \u672C\u5730\u6A21\u62DF\u6267\u884C","slug":"_8-\u672C\u5730\u6A21\u62DF\u6267\u884C","link":"#_8-\u672C\u5730\u6A21\u62DF\u6267\u884C","children":[]},{"level":2,"title":"9. \u603B\u7ED3\u5C55\u671B","slug":"_9-\u603B\u7ED3\u5C55\u671B","link":"#_9-\u603B\u7ED3\u5C55\u671B","children":[]}],"relativePath":"smalltalk/st0015.md"}'),E={name:"smalltalk/st0015.md"},i=l('<h1 id="\u51F9\u8BED\u8A00\u70B9\u4EAE-arduino-nano-33" tabindex="-1">\u51F9\u8BED\u8A00\u70B9\u4EAE Arduino Nano 33 <a class="header-anchor" href="#\u51F9\u8BED\u8A00\u70B9\u4EAE-arduino-nano-33" aria-hidden="true">#</a></h1><ul><li>\u65F6\u95F4\uFF1A2022-12-02</li><li>\u64B0\u7A3F\uFF1A\u51F9\u8BED\u8A00\u5F00\u53D1\u7EC4</li><li>\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u539F\u6587\u94FE\u63A5\uFF1A<a href="https://wa-lang.org/smalltalk/st0015.html" target="_blank" rel="noreferrer">https://wa-lang.org/smalltalk/st0015.html</a></li></ul><p>\u51F9\u8BED\u8A00\u662F\u56FD\u5185 Gopher \u53D1\u8D77\u7684\u7EAF\u793E\u533A\u6784\u5EFA\u7684\u5F00\u6E90\u56FD\u4EA7\u7F16\u7A0B\u8BED\u8A00\u9879\u76EE\uFF08\u6CA1\u6709\u516C\u53F8\u80CC\u666F\u3001\u6CA1\u6709\u4EFB\u4F55\u8D5E\u52A9\uFF09\u3002\u540C\u65F6\u51F9\u8BED\u8A00\u4E5F\u662F\u56FD\u5185\u7B2C\u4E00\u4E2A\u5B9E\u73B0\u7EAF\u6D4F\u89C8\u5668\u5185\u7F16\u8BD1\u3001\u6267\u884C\u5168\u94FE\u8DEF\u7684\u81EA\u7814\u9759\u6001\u7C7B\u578B\u7684\u7F16\u8BD1\u578B\u901A\u7528\u7F16\u7A0B\u8BED\u8A00\u3002\u51F9\u8BED\u8A00\u4E0D\u4EC5\u4EC5\u53EF\u4EE5\u8FD0\u884C\u5728\u6D4F\u89C8\u5668\u548C\u5404\u5927\u4E3B\u6D41\u64CD\u4F5C\u7CFB\u7EDF\u4E0A\uFF0C\u6700\u8FD1\u51F9\u8BED\u8A00\u589E\u52A0\u4E86\u5BF9 Arduino-wasm \u5E73\u53F0\u7684\u652F\u6301\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4E86\u7528\u51F9\u8BED\u8A00\u5F00\u53D1 Arduino \u5E94\u7528\u7684\u76EE\u6807\u3002</p><p>\u4F8B\u5B50\u4EE3\u7801\uFF1A<a href="https://gitee.com/wa-lang/wa/tree/master/_examples/arduino" target="_blank" rel="noreferrer">https://gitee.com/wa-lang/wa/tree/master/_examples/arduino</a></p><h2 id="_1-arduino-wasm-\u662F\u4EC0\u4E48" tabindex="-1">1. Arduino-wasm \u662F\u4EC0\u4E48 <a class="header-anchor" href="#_1-arduino-wasm-\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>Wasm3 \u662F\u4E00\u4E2A\u9AD8\u6027\u80FD\u7684 WebAssembly \u89E3\u91CA\u5668\uFF0C\u800C Arduino-wasm \u5219\u662F Wasm3 \u9488\u5BF9 Arduino \u7684\u5B9A\u5236\u7248\u672C\u3002Wasm3 \u6700\u5C0F\u7684\u786C\u4EF6\u4F9D\u8D56\u662F ~64Kb Flash \u548C ~10Kb RAM\u3002</p><p>Github \u4ED3\u5E93\uFF1A<a href="https://github.com/wasm3/wasm3-arduino" target="_blank" rel="noreferrer">https://github.com/wasm3/wasm3-arduino</a></p><p>\u4E0B\u9762\u662F Wasm3 \u8FD0\u884C\u5728 iOS \u7684\u622A\u56FE\uFF1A</p><p><img src="'+p+'" alt=""></p><p>Arduino-wasm \u5219\u662F\u8FD0\u884C\u5728 Arduino Nano 33 \u7B49\u5F00\u53D1\u677F\u4E0A\u7684 Wasm3\u3002</p><h2 id="_2-arduino-nano-33-\u5F00\u53D1\u677F\u4ECB\u7ECD" tabindex="-1">2. Arduino Nano 33 \u5F00\u53D1\u677F\u4ECB\u7ECD <a class="header-anchor" href="#_2-arduino-nano-33-\u5F00\u53D1\u677F\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>Arduino Nano 33\uFF0C\u662F Arduino Nano \u7684\u9AD8\u914D\u7248\u672C\uFF0C\u662F\u4E00\u6B3E\u57FA\u4E8E nRF52840 SoC ARM 32 \u4F4D\u5904\u7406\u5668\u7684\u5FAE\u578B\u5F00\u53D1\u677F\u3002\u5176\u4E2D Arduino Nano BLE Sense \u5176\u4E3B\u63A7\u82AF\u7247\u96C6\u6210\u4E86\u84DD\u7259\u4F4E\u529F\u8017\uFF08BLE\uFF09\u3002NANO 33 BLE \u4E0D\u4EC5\u4FDD\u7559\u4E86\u4E0E\u7ECF\u5178\u6B3E NANO \u540C\u6837\u7684\u5C3A\u5BF8\u4E0E\u7BA1\u811A\uFF0C\u4E14\u5728\u6B64\u57FA\u7840\u4E0A\u914D\u6709\u591A\u79CD\u9AD8\u6027\u80FD\u4F20\u611F\u5668\u7B49\uFF0C\u5F53\u7136\u6700\u91CD\u8981\u7684\u662F\u6EE1\u8DB3\u4E86 Arduino-wasm \u7684\u6700\u4F4E\u786C\u4EF6\u8981\u6C42\u3002</p><p><img src="'+o+`" alt=""></p><p>\u76EE\u524D\uFF082022\u5E74\u5E95\uFF09\uFF0C\u6DD8\u5B9D\u7684\u4EF7\u683C\u5927\u7EA6\u5728200\u5143\u4EE5\u4E0A\u3002</p><h2 id="_3-\u7F16\u5199-arduino-\u7684\u95EA\u706F\u4F8B\u5B50" tabindex="-1">3. \u7F16\u5199 Arduino \u7684\u95EA\u706F\u4F8B\u5B50 <a class="header-anchor" href="#_3-\u7F16\u5199-arduino-\u7684\u95EA\u706F\u4F8B\u5B50" aria-hidden="true">#</a></h2><p>\u4EE3\u7801\u903B\u8F91\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u662F\u6362\u6210\u4E86\u51F9\u8BED\u8A00\u6765\u5199\uFF1A</p><div class="language-wa"><button title="Copy Code" class="copy"></button><span class="lang">wa</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#616E88;"># \u7248\u6743 @2022 \u51F9\u8BED\u8A00 \u4F5C\u8005\u3002\u4FDD\u7559\u6240\u6709\u6743\u5229\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">&quot;syscall/arduino&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> LED </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> arduino.GetPinLED()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">fn</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">init</span><span style="color:#D8DEE9FF;">() {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	arduino.PinMode(LED, </span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	arduino.Print(</span><span style="color:#A3BE8C;">&quot;\u51F9\u8BED\u8A00(Wa)/Arduino is running ...</span><span style="color:#EBCB8B;">\\n</span><span style="color:#A3BE8C;">&quot;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">fn</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">main</span><span style="color:#D8DEE9FF;">() {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		arduino.DigitalWrite(LED, arduino.HIGH)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		arduino.Delay(</span><span style="color:#B48EAD;">100</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		arduino.DigitalWrite(LED, arduino.LOW)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		arduino.Delay(</span><span style="color:#B48EAD;">900</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6211\u4EEC\u76F4\u63A5\u4F7F\u7528\u4E86 <code>syscall/arduino</code> \u5305\u6765\u4F7F\u7528 Arduino \u7684\u529F\u80FD\u3002</p><h2 id="_4-syscall-arduino-\u5305\u4ECB\u7ECD" tabindex="-1">4. <code>syscall/arduino</code> \u5305\u4ECB\u7ECD <a class="header-anchor" href="#_4-syscall-arduino-\u5305\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u8BA9\u6211\u4EEC\u770B\u770B <a href="https://gitee.com/wa-lang/wa/blob/master/internal/waroot/_waroot/src/syscall/arduino" target="_blank" rel="noreferrer"><code>syscall/arduino</code> \u5305\u7684\u4EE3\u7801</a>\uFF1A</p><div class="language-wa"><button title="Copy Code" class="copy"></button><span class="lang">wa</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#616E88;"># \u7248\u6743 @2022 \u51F9\u8BED\u8A00 \u4F5C\u8005\u3002\u4FDD\u7559\u6240\u6709\u6743\u5229\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> (</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	LOW  :</span><span style="color:#81A1C1;">i32</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	HIGH :</span><span style="color:#81A1C1;">i32</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">	INPUT        :</span><span style="color:#81A1C1;">i32</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	OUTPUT       :</span><span style="color:#81A1C1;">i32</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	INPUT_PULLUP :</span><span style="color:#81A1C1;">i32</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span></span>
<span class="line"><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">#wa:import arduino millis</span></span>
<span class="line"><span style="color:#81A1C1;">fn</span><span style="color:#D8DEE9FF;"> Millis() </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">i32</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">#wa:import arduino delay</span></span>
<span class="line"><span style="color:#81A1C1;">fn</span><span style="color:#D8DEE9FF;"> Delay(ms: </span><span style="color:#81A1C1;">i32</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">#wa:import arduino pinMode</span></span>
<span class="line"><span style="color:#81A1C1;">fn</span><span style="color:#D8DEE9FF;"> PinMode(pin, mode: </span><span style="color:#81A1C1;">i32</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">#wa:import arduino digitalWrite</span></span>
<span class="line"><span style="color:#81A1C1;">fn</span><span style="color:#D8DEE9FF;"> DigitalWrite(pin, value: </span><span style="color:#81A1C1;">i32</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">#wa:import arduino getPinLED</span></span>
<span class="line"><span style="color:#81A1C1;">fn</span><span style="color:#D8DEE9FF;"> GetPinLED() </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">i32</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">#wa:import arduino print</span></span>
<span class="line"><span style="color:#81A1C1;">fn</span><span style="color:#D8DEE9FF;"> PrintRawString(ptr: </span><span style="color:#81A1C1;">i32</span><span style="color:#D8DEE9FF;">, len: </span><span style="color:#81A1C1;">i32</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">fn</span><span style="color:#D8DEE9FF;"> Print(s: </span><span style="color:#81A1C1;">string</span><span style="color:#D8DEE9FF;">) {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#88C0D0;">print</span><span style="color:#D8DEE9FF;">(s)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">fn</span><span style="color:#D8DEE9FF;"> Println(s: </span><span style="color:#81A1C1;">string</span><span style="color:#D8DEE9FF;">) {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#88C0D0;">println</span><span style="color:#D8DEE9FF;">(s)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4E3B\u8981\u662F\u5C06\u5E38\u7528\u7684\u51FD\u6570\u901A\u8FC7 WASM \u65B9\u5F0F\u5BFC\u5165\u5230\u4E86\u4EE3\u7801\u7A7A\u95F4\uFF0C\u5927\u90E8\u5206\u51FD\u6570\u5E76\u4E0D\u5728\u51F9\u8BED\u8A00\u4E2D\u5B9E\u73B0\u3002</p><h2 id="_5-\u7F16\u8BD1\u5230-arduino-wasm-\u5E73\u53F0" tabindex="-1">5. \u7F16\u8BD1\u5230 Arduino-wasm \u5E73\u53F0 <a class="header-anchor" href="#_5-\u7F16\u8BD1\u5230-arduino-wasm-\u5E73\u53F0" aria-hidden="true">#</a></h2><p>\u5728\u7F16\u8BD1\u65F6\u9700\u8981\u901A\u8FC7 <code>-target=arduino</code> \u53C2\u6570\u6307\u5B9A\u76EE\u6807\u7C7B\u578B\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">$ wa build -target=arduino app.wa</span></span>
<span class="line"><span style="color:#d8dee9ff;">$ wat2wasm a.out.wat -o app.wasm</span></span>
<span class="line"><span style="color:#d8dee9ff;">$ xxd -i app.wasm &gt; app.wasm.h</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>\u7B2C\u4E00\u4E2A\u547D\u4EE4\u662F\u7F16\u8BD1\u4E3A\u6587\u672C\u683C\u5F0F\u7684 WASM \u6587\u4EF6 <code>a.out.wat</code>\uFF0C\u7136\u540E\u901A\u8FC7 <code>wat2wasm</code> \u547D\u4EE4\u7F16\u8BD1\u5F97\u5230\u4E8C\u8FDB\u5236\u683C\u5F0F\u7684 WASM \u6587\u4EF6\uFF0C\u6700\u540E\u901A\u8FC7 <code>xxd</code> \u5C06\u4E8C\u8FDB\u5236\u7684 WASM \u6587\u4EF6\u8F6C\u6362\u4E3A C \u8BED\u8A00\u7684\u5934\u6587\u4EF6\u3002</p><p><code>app.wasm.h</code> \u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">unsigned</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">char</span><span style="color:#D8DEE9FF;"> app_wasm</span><span style="color:#81A1C1;">[]</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">00</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">61</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">73</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">6d</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">01</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">00</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">00</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">00</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">01</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">2a</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">08</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">60</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">01</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">7f</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">00</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">60</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">02</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">7f</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">7f</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">00</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">60</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">00</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">01</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">7f</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  ...</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">6e</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">67</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">2e</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">6f</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">72</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">67</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">0x</span><span style="color:#B48EAD;">0a</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">unsigned</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> app_wasm_len </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1543</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre></div><p>\u7136\u540E Arduino \u5DE5\u7A0B\u5C31\u53EF\u4EE5\u901A\u8FC7 <code>#include &quot;app.wasm.h&quot;</code> \u65B9\u5F0F\u5F15\u7528\u8FD9\u4E2A WASM \u7A0B\u5E8F\uFF0C\u6700\u7EC8\u548C Wasm3 \u4E00\u8D77\u7F16\u8BD1\u3002</p><h2 id="_6-arduino-\u5E73\u53F0\u80F6\u6C34\u4EE3\u7801\u521D\u63A2" tabindex="-1">6. Arduino \u5E73\u53F0\u80F6\u6C34\u4EE3\u7801\u521D\u63A2 <a class="header-anchor" href="#_6-arduino-\u5E73\u53F0\u80F6\u6C34\u4EE3\u7801\u521D\u63A2" aria-hidden="true">#</a></h2><p>\u6700\u7EC8\u8FD8\u9700\u8981\u4E00\u4E2A <code>arduino.ino</code> \u4EE3\u7801\uFF08\u5176\u5B9E\u5C31\u662F\u9488\u5BF9 Arduino \u7B80\u5316\u7684 C++ \u7A0B\u5E8F\uFF09\u3002\u4EE3\u7801\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#5E81AC;font-style:italic;">#</span><span style="color:#81A1C1;">include</span><span style="color:#8FBCBB;"> </span><span style="color:#ECEFF4;">&lt;</span><span style="color:#8FBCBB;">wasm3.h</span><span style="color:#ECEFF4;">&gt;</span></span>
<span class="line"><span style="color:#5E81AC;font-style:italic;">#</span><span style="color:#81A1C1;">include</span><span style="color:#8FBCBB;"> </span><span style="color:#ECEFF4;">&lt;</span><span style="color:#8FBCBB;">m3_env.h</span><span style="color:#ECEFF4;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// \u5B9A\u4E49 WASM \u548C \u672C\u5730\u6808\u5927\u5C0F</span></span>
<span class="line"><span style="color:#5E81AC;font-style:italic;">#</span><span style="color:#81A1C1;">define</span><span style="color:#5E81AC;"> </span><span style="color:#88C0D0;">WASM_STACK_SLOTS</span><span style="color:#5E81AC;">  </span><span style="color:#B48EAD;">1024</span></span>
<span class="line"><span style="color:#5E81AC;font-style:italic;">#</span><span style="color:#81A1C1;">define</span><span style="color:#5E81AC;"> </span><span style="color:#88C0D0;">NATIVE_STACK_SIZE</span><span style="color:#5E81AC;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#B48EAD;">32</span><span style="color:#81A1C1;">*</span><span style="color:#B48EAD;">1024</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// WASM \u6700\u5927\u5185\u5B58\u9650\u5236, \u4E00\u822C\u4E0D\u5F97\u8D85\u8FC7 64KB \u5927\u5C0F</span></span>
<span class="line"><span style="color:#5E81AC;font-style:italic;">#</span><span style="color:#81A1C1;">define</span><span style="color:#5E81AC;"> </span><span style="color:#88C0D0;">WASM_MEMORY_LIMIT</span><span style="color:#5E81AC;"> </span><span style="color:#B48EAD;">8096</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// \u5BFC\u5165 \u51F9\u8BED\u8A00 \u751F\u6210\u7684 WASM \u6587\u4EF6\u5BF9\u5E94\u7684\u4E8C\u8FDB\u5236\u5934\u6587\u4EF6</span></span>
<span class="line"><span style="color:#5E81AC;font-style:italic;">#</span><span style="color:#81A1C1;">include</span><span style="color:#8FBCBB;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">app.wasm.h</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u5F00\u5934\u4FDD\u62A4 Wasm3 \u548C WASM \u7A0B\u5E8F\u5BF9\u5E94\u7684\u5934\u6587\u4EF6\uFF0C\u540C\u65F6\u5B9A\u4E49\u4EE5\u4E0B\u6808\u7684\u5927\u5C0F\u3002</p><p>\u7136\u540E\u770B\u770B\u4EE3\u7801\u4E3B\u4F53\u7ED3\u6784\uFF1A</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#616E88;">// \u6267\u884C WASM \u7684\u51FD\u6570</span></span>
<span class="line"><span style="color:#81A1C1;">void</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">wasm_task</span><span style="color:#ECEFF4;">(</span><span style="color:#81A1C1;">void*</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9FF;"> ... </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// setup \u4F5C\u4E3A main \u51FD\u6570\u7528\u6237</span></span>
<span class="line"><span style="color:#81A1C1;">void</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">setup</span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#616E88;">	// \u4E32\u53E3\u521D\u59CB\u5316</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#D8DEE9;">Serial</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">begin</span><span style="color:#ECEFF4;">(</span><span style="color:#B48EAD;">115200</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#88C0D0;">delay</span><span style="color:#ECEFF4;">(</span><span style="color:#B48EAD;">100</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">	// \u7B49\u5F85\u4E32\u53E3\u521D\u59CB\u5316\u5B8C\u6210, \u5FC5\u987B\u662F USB \u4E32\u53E3</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">while</span><span style="color:#ECEFF4;">(</span><span style="color:#81A1C1;">!</span><span style="color:#D8DEE9FF;">Serial</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">	// \u963B\u585E\u6267\u884C wasm \u7A0B\u5E8F, \u4E0D\u4F1A\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#88C0D0;">wasm_task</span><span style="color:#ECEFF4;">(</span><span style="color:#81A1C1;">NULL</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// \u8BE5\u51FD\u6570\u4E0D\u4F1A\u88AB\u6267\u884C</span></span>
<span class="line"><span style="color:#616E88;">// \u5B9A\u4E49\u8BE5\u51FD\u6570\u53EA\u662F\u4E3A\u4E86\u786E\u4FDD Arduino \u7F16\u8BD1\u901A\u8FC7</span></span>
<span class="line"><span style="color:#81A1C1;">void</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">loop</span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#88C0D0;">delay</span><span style="color:#ECEFF4;">(</span><span style="color:#B48EAD;">100</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><p>Arduino \u7684\u5E38\u89C4\u4EE3\u7801\u53EA\u6709 setup \u548C loop \u4E24\u4E2A\u51FD\u6570\u3002\u4E0D\u8FC7\u8FD9\u91CC\u53EA\u7528\u5230\u4E86 setup \u51FD\u6570\u3002\u5728 setup \u51FD\u6570\u4E2D\u9996\u5148\u521D\u59CB\u5316\u4E32\u53E3\uFF08\u65B9\u4FBF\u6253\u5370\u8C03\u8BD5\u4FE1\u606F\uFF09\uFF0C\u6700\u540E\u8C03\u7528 <code>wasm_task</code> \u6267\u884C\u51F9\u8BED\u8A00\u5199\u7684\u4EAE\u706F\u4EE3\u7801\uFF0C\u5176\u4E2D\u4F1A\u52A0\u8F7D WASM \u6A21\u5757\u5E76\u6267\u884C\u3002<code>wasm_task</code> \u770B\u8D77\u6765\u662F\u4E00\u4E2A\u6BD4\u8F83\u590D\u6742\u7684\u7A0B\u5E8F\uFF0C\u4E0D\u8FC7\u6838\u5FC3\u903B\u8F91\u548C\u666E\u901A\u7684 WASM \u6267\u884C\u6D41\u7A0B\u7C7B\u4F3C\uFF0C\u7EC6\u8282\u53EF\u4EE5\u4E0B\u6B21\u6587\u7AE0\u518D\u5C55\u5F00\u3002</p><p>\u603B\u4F53\u6765\u8BF4\uFF0C\u4EE5\u4E0A\u8FD9\u4E9B\u80F6\u6C34\u4EE3\u7801\u662F\u76F8\u5BF9\u56FA\u5B9A\u7684\u3002\u540E\u9762\u4F1A\u81EA\u52A8\u751F\u6210\u5168\u90E8\u8FD9\u4E9B\u4EE3\u7801\uFF0C\u540C\u65F6\u53BB\u6389\u5BF9\u5916\u90E8\u5176\u4ED6\u5DE5\u5177\u7684\u4F9D\u8D56\u3002\u76EE\u6807\u662F\u751F\u6210\u7684 Arduino \u5DE5\u7A0B\u6587\u4EF6\u53EF\u4EE5\u76F4\u63A5\u6253\u5F00\u6784\u5EFA\u3002</p><h2 id="_7-arduino-\u6784\u5EFA-\u6267\u884C" tabindex="-1">7. Arduino \u6784\u5EFA &amp; \u6267\u884C <a class="header-anchor" href="#_7-arduino-\u6784\u5EFA-\u6267\u884C" aria-hidden="true">#</a></h2><p>\u5982\u679C\u662F\u7B2C\u4E00\u6B21\u4F7F\u7528 Arduino Nano 33 \u5F00\u53D1\u677F\uFF0C\u6253\u5F00 IDE \u540E\u4F1A\u63D0\u793A\u5B89\u88C5\u5FC5\u8981\u7684\u5DE5\u5177\u3002\u7136\u540E\u9700\u8981\u5728\u5E93\u7BA1\u7406\u83DC\u5355\u624B\u52A8\u5B89\u88C5 Wasm3 \u5305\uFF1A</p><p><img src="`+e+'" alt=""></p><p>\u7136\u540E\u7F16\u8BD1\u540E\u4E0A\u4F20\u7684\u6548\u679C\uFF1A</p><p><img src="'+t+'" alt=""></p><p>\u6267\u884C\u7684\u6548\u679C\uFF0C\u9664\u4E86\u53EF\u4EE5\u770B\u5230 LED \u95EA\u70C1\uFF0C\u4E32\u53E3\u8FD8\u53EF\u4EE5\u770B\u5230\u8F93\u51FA\u4FE1\u606F\uFF1A</p><p><img src="'+r+'" alt=""></p><p>\u4E00\u5207\u6B63\u5E38\uFF01</p><h2 id="_8-\u672C\u5730\u6A21\u62DF\u6267\u884C" tabindex="-1">8. \u672C\u5730\u6A21\u62DF\u6267\u884C <a class="header-anchor" href="#_8-\u672C\u5730\u6A21\u62DF\u6267\u884C" aria-hidden="true">#</a></h2><p>\u4E3A\u4E86\u65B9\u4FBF\u6D4B\u8BD5\u7B80\u5355\u7A0B\u5E8F\uFF0C\u51F9\u8BED\u8A00\u547D\u4EE4\u884C\u63D0\u4F9B\u4E86\u6A21\u62DF\u6267\u884C Arduino \u7684\u65B9\u5F0F\uFF1A</p><p><img src="'+c+'" alt=""></p><p>\u76EE\u524D\u6A21\u62DF\u8FD8\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u662F\u7B80\u5355\u6253\u5370\u8C03\u7528 API \u7684\u540D\u5B57\u548C\u53C2\u6570\u3002</p><h2 id="_9-\u603B\u7ED3\u5C55\u671B" tabindex="-1">9. \u603B\u7ED3\u5C55\u671B <a class="header-anchor" href="#_9-\u603B\u7ED3\u5C55\u671B" aria-hidden="true">#</a></h2><p>\u76EE\u524D\u6D41\u884C Arduino \u5355\u7247\u673A\u7684\u914D\u7F6E\u8FD8\u662F\u6BD4\u8F83\u4F4E\u7684\uFF0C\u53EF\u80FD\u96BE\u4EE5\u8FD0\u884C WASM \u7A0B\u5E8F\u3002\u4E0D\u8FC7\u53EF\u4EE5\u4E50\u89C2\u4F30\u8BA1 Arduino Nano 33 \u5C06\u4F1A\u5F88\u5FEB\u666E\u53CA\u3002\u800C\u4E14\uFF0CWasm3 \u4E0D\u4EC5\u4EC5\u53EF\u4EE5\u652F\u6301 Arduino\uFF0C\u8FD8\u53EF\u4EE5\u652F\u6301\u6811\u8393\u6D3E Pico\uFF08\u6DD8\u5B9D\u4EF7\u683C30\u5143\uFF09\u3002\u56E0\u6B64\uFF0C\u4ECE\u957F\u8FDC\u770B WASM \u662F\u4E00\u4E2A\u517C\u5177\u7075\u6D3B\u6027\u548C\u6027\u4EF7\u6BD4\u7684\u53EF\u9009\u65B9\u6848\u3002\u5982\u679C\u786E\u5B9E\u9700\u8981\u5728\u975E\u5E38\u53D7\u9650\u7684\u73AF\u5883\u79E9\u5E8F\uFF0C\u4E5F\u53EF\u4EE5\u5C1D\u8BD5 LLVM \u5230 AVR \u5355\u7247\u673A\u7684\u8DEF\u7EBF\u3002</p>',51),y=[i];function F(D,d,A,C,u,h){return n(),a("div",null,y)}const g=s(E,[["render",F]]);export{m as __pageData,g as default};
