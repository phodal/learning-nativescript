# learning-nativescript

Install
---

### 安装 Node.js

### 安装 NativeScript CLI

```
npm install -g nativescript
```


```
+ tns-ios@3.4.0
added 1 package in 15.179s
  ◠ Verifying CocoaPods. This may take some time, please be patient.t
  ◞ Verifying CocoaPods. This may take some time, please be patient..
```

请耐心等待。。。

### 对应的 Android 和 iOS 环境

Windows 用户，执行：

```
@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://www.nativescript.org/setup/win'))"
```

macOS 用户，可以直接执行：

```
ruby -e "$(curl -fsSL https://www.nativescript.org/setup/mac)"
```

### 验证安装

```
tns doctor
```

### Hello, World

```
tns create HelloWorld --template nativescript-template-ng-tutorial
```

Run

```
tns run android
```

经过漫长的编译和构建之后：

```
Project successfully prepared (Android)
Building project...
Gradle build...
         + applying user-defined configuration from /Users/phodal/learing/learing-native-script/HelloWorld/app/App_Resources/Android/app.gradle
         + adding nativescript runtime package dependency: nativescript-optimized
         + adding aar plugin dependency: /Users/phodal/learing/learing-native-script/HelloWorld/node_modules/tns-core-modules-widgets/platforms/android/widgets-release.aar
<========-----> 66% CONFIGURING [1m 2s]
> Resolve dependencies :app:_debugApk
> IDLE
> IDLE
> IDLE
> IDLE
> IDLE
> IDLE
> IDLE
```

你就可以看到 Hello, World 了。


