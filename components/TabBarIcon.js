import * as React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TabBarIcon(props) {
  return (
    <FontAwesome5
      name={props.name}
      size={30}
      color={props.focused ? "#fff68b": "#feffff"}
    />
  );
}
