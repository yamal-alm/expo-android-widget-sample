'use no memo';
import { StyleSheet, View } from 'react-native';
import { FlexWidget, TextWidget, WidgetPreview } from 'react-native-android-widget';

export function HelloWidget() {
  return (
    <FlexWidget
      style={{
        height: 'match_parent',
        width: 'match_parent',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 16,
      }}
      accessibilityLabel="Hello world widget"
    >
      <TextWidget
        text="Hello"
        style={{
          fontSize: 32,
          fontFamily: 'Inter',
          color: '#000000',
        }}
      />
      <FlexWidget
        clickAction="update_widget"
        accessibilityLabel="Update widget"
        style={{
          marginTop: 12,
          paddingHorizontal: 24,
          paddingVertical: 8,
          backgroundColor: '#007AFF',
          borderRadius: 8,
        }}
      >
        <TextWidget
          text="This button will execute JS code"
          style={{
            fontSize: 16,
            fontFamily: 'Inter',
            color: '#ffffff',
          }}
        />
      </FlexWidget>
    </FlexWidget>
  );
}

export function HelloWidgetPreviewScreen() {
  return (
    <View style={styles.container}>
      <WidgetPreview
        renderWidget={() => <HelloWidget />}
        width={320}
        height={200}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});