
import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';


const Data = () => {
  const data=[{label:'Revenue This Month',value:12000},{label:'Expense This Month',value:1200},{label:'Profit This Month',value:2000}]

  return (
    
      <View style={styles.container}>

      {
        data.map((item)=>{
          return(
            <Card style={styles.card}>
          <Text style={styles.paragraph}>
            {item.label}
          </Text>
         

          <Text style={styles.paragraph}>
          <Icon name="rupee" size={12}  />
            {item.value}
          </Text>
        
        </Card>
          )
        })
      }
      </View>
    
  );
};

export default Data;

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'row',
    justifyContent: 'center',
    padding: 10,
    //margin:15,
  },
  card:{
    display:'flex',
    flex:1,
    margin:5
  },
  paragraph: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5
  },
});


