import type { WidgetTaskHandlerProps } from 'react-native-android-widget';
import { MyCustomWidget } from './MyCustomWidget';

const nameToWidget = {
  // MyCustomWidget will be the **name** with which we will reference our widget.
  MyCustomWidget: MyCustomWidget,
};

export async function widgetTaskHandler(props: WidgetTaskHandlerProps) {
  const widgetInfo = props.widgetInfo;
  const Widget =
    nameToWidget[widgetInfo.widgetName as keyof typeof nameToWidget];

  switch (props.widgetAction) {
    case 'WIDGET_ADDED':
      props.renderWidget(<Widget />);
      console.log('Widget added', props.widgetInfo);
      break;

    case 'WIDGET_UPDATE':
      // Not needed for now
      break;

    case 'WIDGET_RESIZED':
      // Not needed for now
      break;

    case 'WIDGET_DELETED':
      // Not needed for now
      break;

    case 'WIDGET_CLICK':
      if (props.clickAction === 'invoke_js_code') {
        console.log('invoke_js_code action triggered', props.widgetInfo);
      } else if (props.clickAction === 'update_widget') {
        console.log('update_widget action triggered', props.widgetInfo);
        props.renderWidget(<Widget />);
      }
      break;

    default:
      break;
  }
}