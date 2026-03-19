// this file is a copy-paste from original "expo-router/entry" 
// file which was the original one referenced from package.json.
// We need to invoke register registerWidgetTaskHandler as soon as possible.
// More info in:
//  https://saleksovski.github.io/react-native-android-widget/docs/tutorial/register-task-handler#register-widget-task-handler-expo

// `@expo/metro-runtime` MUST be the first import to ensure Fast Refresh works
// on web.
import '@expo/metro-runtime';

import { App } from 'expo-router/build/qualified-entry';
import { renderRootComponent } from 'expo-router/build/renderRootComponent';
import { registerWidgetTaskHandler } from 'react-native-android-widget';
import { widgetTaskHandler } from './widgets/widget-task-handler';

// This file should only import and register the root. No components or exports
// should be added here.
renderRootComponent(App);

registerWidgetTaskHandler(widgetTaskHandler);