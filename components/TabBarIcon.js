import * as React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import {colors} from "../helpers/colors.js"

export default function TabBarIcon(props) {
  return (
    <FontAwesome5
      name={props.name}
      size={25}
      color={props.focused ? colors.yellow : colors.white}
    />
  );
}
