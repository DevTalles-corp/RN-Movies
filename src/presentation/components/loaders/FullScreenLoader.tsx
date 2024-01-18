import { ActivityIndicator, View } from 'react-native';

export const FullScreenLoader = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
      <ActivityIndicator size='large' color={ 'indigo' } />
    </View>
  )
}