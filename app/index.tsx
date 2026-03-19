import { StyleSheet, Text, View } from 'react-native';
import { HelloWidgetPreviewScreen } from '@/widgets/HelloWidget';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>Hello Widget</Text>
        <Text style={styles.subtitle}>
          This is a preview of how the widget will look on your home screen.
        </Text>
        <Text style={styles.stepsTitle}>How to add it to your home screen:</Text>
        <Text style={styles.step}>1. Long-press an empty area of your home screen.</Text>
        <Text style={styles.step}>2. Tap <Text style={styles.bold}>Widgets</Text>.</Text>
        <Text style={styles.step}>3. Find <Text style={styles.bold}>My Hello Widget</Text> and drag it onto your home screen.</Text>
      </View>
      <HelloWidgetPreviewScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  info: {
    paddingHorizontal: 24,
    paddingTop: 64,
    paddingBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#555',
    marginBottom: 20,
    lineHeight: 22,
  },
  stepsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  step: {
    fontSize: 15,
    color: '#444',
    marginBottom: 6,
    lineHeight: 22,
  },
  bold: {
    fontWeight: '600',
    color: '#111',
  },
});
