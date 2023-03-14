import React from 'react';
import { StyleSheet, View ,Text,Image} from 'react-native';

const Graph = () => {
  
  return (
      <View style={styles.graphContainer}>
      {/* <Text>Bizzere Line Graph</Text> */}
      <Image
        style={styles.tinyLogo}
        source={require('../assets/Graph.jpeg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  graphContainer: {
    width: '100%',
    height: 300,
    alignSelf: 'center',
    borderRadius: 10,
    // padding: 10,
    marginTop: 20,
  },
  tinyLogo: {
    width: '100%',
    height: '100%',
  },
});

export default Graph;
