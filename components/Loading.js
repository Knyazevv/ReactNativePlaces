import { Text, View, ActivityIndicator } from 'react-native';

function Loading  () {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <View style={{ marginTop: 15 }}>
        <ActivityIndicator size="large" />
        <Text>Is loading...</Text>
      </View>
    </View>
  );
};

export default Loading;