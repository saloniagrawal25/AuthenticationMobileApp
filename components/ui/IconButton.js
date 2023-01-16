import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function IconButton({icon, color, size, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name={icon} color={color} size={size} />
    </TouchableOpacity>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderRadius: 20,
  },
});
