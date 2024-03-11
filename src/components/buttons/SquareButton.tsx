import { Text, Pressable, Alert, StyleSheet } from 'react-native'
import { BORDERRADIUS } from '../../theme/theme';

export type Props = {
  text: string;
  color?: string;
  textColor?: string;
  onPress?: () => void;
};

const SquareButton: React.FC<Props> = ({
  text,
  color = '#FC6111',
  textColor = '#fff',
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#FBB796' : color,
          marginTop: 20
        },
        styles.wrapperCustom,
      ]}>
      {({ pressed }) => (
        <Text style={{
          color: pressed ? "black" : textColor,
          textAlign: 'center',
          fontWeight: '600',
          fontSize: 16
        }}>{text}</Text>
      )}
    </Pressable>
  )
}

export default SquareButton;

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  wrapperCustom: {
    borderRadius: BORDERRADIUS.radius_4,
    padding: 12,
  },
});