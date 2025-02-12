import React from 'react';
import { Text, View } from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Hello world</Text>
    </View>
  );
}

export default App;
