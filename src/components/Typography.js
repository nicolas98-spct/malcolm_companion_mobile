import { Text } from 'react-native';
import { font } from '../utils/theme';

export function AppText({ children, className = '', style, weight = 'body', ...props }) {
  return (
    <Text className={className} style={[{ fontFamily: weight === 'heading' ? font.heading : font.body }, style]} {...props}>
      {children}
    </Text>
  );
}
