# Expo Android Widget Sample

A sample [Expo](https://expo.dev) / React Native app demonstrating how to build **Android home screen widgets** using [`react-native-android-widget`](https://github.com/sAleksovski/react-native-android-widget). It includes a working "Hello" widget that can be pinned to the Android home screen, along with a tab-based app UI for previewing it.

## Features

- 🟢 Android home screen widget built with React Native components
- 👁️ In-app widget preview screen
- 🔔 Widget lifecycle handling (add, update, resize, delete, click)
- ⚡ React Native New Architecture enabled

## Project Structure

```
expo-android-widget-sample/
├── app/
│   ├── _layout.tsx             # Root layout (bare Stack navigator)
│   └── index.tsx               # Single screen — renders the widget preview
├── widgets/
│   ├── HelloWidget.tsx         # Widget UI component + preview screen
│   └── widget-task-handler.tsx # Widget lifecycle event handler
├── scripts/                    # Utility scripts
├── assets/                     # Icons, images, widget preview images
├── index.ts                    # Entry point — registers widget task handler
├── app.json                    # Expo configuration (widget plugin included)
└── eas.json                    # EAS Build configuration
```

## The Hello Widget

The `HelloWidget` is configured in `app.json` and registered in `index.ts`. It renders a centered "Hello" label with an **Update** button. Tapping the button fires an `update_widget` click action handled in `widget-task-handler.tsx`.

**Widget metadata:**

| Property         | Value                  |
|------------------|------------------------|
| Name             | `Hello`                |
| Label            | My Hello Widget        |
| Min size         | 320 × 120 dp           |
| Target grid      | 5 × 2 cells            |
| Update interval  | 30 minutes             |
| Android package  | `com.test.widget`      |

## Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Android Studio](https://developer.android.com/studio) (for emulator / device builds)
- An [EAS account](https://expo.dev/eas) if using cloud builds

> **Note:** Widgets only work on Android. The app runs on iOS and Web as well, but the widget functionality is Android-only.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Create a development build

Widgets require a [development build](https://docs.expo.dev/develop/development-builds/introduction/) — they do **not** work in Expo Go.

**Local build (requires Android Studio):**

```bash
npx expo run:android
```

**Cloud build via EAS:**

```bash
eas build --profile development --platform android
```

### 3. Start the development server

```bash
npx expo start
```

Then press `a` to open on an Android emulator or connected device.

## Adding a Widget to the Home Screen

1. Long-press an empty area of your Android home screen.
2. Tap **Widgets**.
3. Find **My Hello Widget** and drag it onto the home screen.

## Available Scripts

| Command                     | Description                                  |
|-----------------------------|----------------------------------------------|
| `npm run android`           | Run on Android                               |
| `npm run ios`               | Run on iOS                                   |
| `npm run web`               | Run on web                                   |
| `npm run lint`              | Run ESLint                                   |
| `npm run reset-project`     | Reset to a blank app (moves starter to `app-example/`) |

## EAS Build Profiles

Defined in `eas.json`:

| Profile       | Distribution | Build type |
|---------------|--------------|------------|
| `development` | Internal     | APK        |
| `preview`     | Internal     | APK        |
| `production`  | Store        | APK (auto-increment version) |

## Key Dependencies

| Package                        | Purpose                         |
|--------------------------------|---------------------------------|
| `expo` ~54                     | Expo SDK                        |
| `react-native` 0.81            | React Native runtime            |
| `react-native-android-widget`  | Android widget support          |
| `expo-router`                  | File-based navigation           |
| `expo-dev-client`              | Custom development builds       |
| `react-native-reanimated`      | Animations                      |

## Learn More

- [react-native-android-widget docs](https://github.com/sAleksovski/react-native-android-widget)
- [Expo documentation](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [EAS Build](https://docs.expo.dev/build/introduction/)

