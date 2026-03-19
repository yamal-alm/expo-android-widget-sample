'use no memo';
import { StyleSheet, View } from 'react-native';
import { FlexWidget, TextWidget, WidgetPreview } from 'react-native-android-widget';


export function MyCustomWidget() {
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
      accessibilityLabel="Custom widget"
    >
      <TextWidget
        text={`This is a random text on each update: ${Math.floor(Math.random() * 360)}`}
        style={{
          fontSize: 24,
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
          text="This button will update the widget"
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

export function MyCustomWidgetPreviewScreen() {
  return (
    <View style={styles.container}>
      <WidgetPreview
        renderWidget={() => <MyCustomWidget />}
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