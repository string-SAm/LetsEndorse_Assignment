import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


const Menu = () => {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => console.log('Pressed')}>
        <Icon name="rocket" size={30} onPress={()=>console.log('Campaign')} />
        <Text style={styles.textStyle}>Earning</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => console.log('Pressed')}>
        <Icon name="user" size={30} onPress={()=>console.log('Campaign')}  />
        <Text style={styles.textStyle}>Clients</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => console.log('Pressed')}>
        <Icon name="inbox" size={30} onPress={()=>console.log('Campaign')} />
        <Text style={styles.textStyle}>Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => console.log('Pressed')}>
        <Icon name="calendar" size={30} onPress={()=>console.log('Campaign')} />
        <Text style={styles.textStyle}>Compaign</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => console.log('Pressed')}>
        <Icon name="cog" size={30} onPress={()=>console.log('Campaign')}  />
        <Text style={styles.textStyle}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    backgroundColor:"pink"
  },
  textStyle: {
    textTransform: "uppercase",
    fontSize:12
  },
  buttonStyle:{
margin:10,
alignItems:'center'
  },
  iconStytle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default Menu;