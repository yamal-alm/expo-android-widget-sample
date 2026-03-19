# Expo Android Widget Sample

A sample [Expo](https://expo.dev) / React Native app demonstrating how to build **Android home screen widgets** using [`react-native-android-widget`](https://github.com/sAleksovski/react-native-android-widget).

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
│   ├── MyCustomWidget.tsx         # Widget UI component + preview screen
│   └── widget-task-handler.tsx # Widget lifecycle event handler
├── scripts/                    # Utility scripts
├── assets/                     # Icons, images, widget preview images
├── index.ts                    # Entry point — registers widget task handler
├── app.json                    # Expo configuration (widget plugin included)
└── eas.json                    # EAS Build configuration
```

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
3. Find your widget and drag it onto the home screen.

## Widget Event Handling

All widget lifecycle events are handled in `widgets/widget-task-handler.tsx`. The handler receives a `widgetAction` and dispatches accordingly.

### Click actions

Click actions are string identifiers set via `clickAction` on any `FlexWidget` element. The handler currently recognises two:

- **`invoke_js_code`** — intended to run arbitrary JS logic from a widget tap.

To add a new click action, set `clickAction="your_action"` on a `FlexWidget` in `MyCustomWidget.tsx` and add a matching branch inside the `WIDGET_CLICK` case in `widget-task-handler.tsx`.

## Available Scripts

| Command                 | Description       |
|-------------------------|-------------------|
| `npm run android`       | Run on Android    |
| `npm run ios`           | Run on iOS        |
| `npm run web`           | Run on web        |
| `npm run lint`          | Run ESLint        |

## EAS Build Profiles

Defined in `eas.json`:

| Profile       | Distribution | Build type                   |
|---------------|--------------|------------------------------|
| `development` | Internal     | APK                          |
| `preview`     | Internal     | APK                          |
| `production`  | Store        | APK (auto-increment version) |

## Key Dependencies

| Package                       | Purpose                    |
|-------------------------------|----------------------------|
| `expo` ~54                    | Expo SDK                   |
| `react-native` 0.81           | React Native runtime       |
| `react-native-android-widget` | Android widget support     |
| `expo-router`                 | File-based navigation      |
| `expo-dev-client`             | Custom development builds  |

## Learn More

- [react-native-android-widget docs](https://github.com/sAleksovski/react-native-android-widget)
- [Expo documentation](https://docs.expo.dev/)
- [EAS Build](https://docs.expo.dev/build/introduction/)
