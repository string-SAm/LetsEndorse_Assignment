import React,{useState} from 'react';
import {
  Button,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const RenderComponent=(props)=>{
  const {item}=props;
  const handleDelete=()=>{
    console.log('helo')

  }
  return(
    <View style={styles.item}>
        <Text >
        {item.item.text}
        {item.item.value}
        </Text>
        <Icon name="remove" size={15} onPress={()=>handleDelete(item.item.id)}/>
        </View>
  )
}



const List = () => {
  var initialElements = [
    {id: 1,text : 'Staff Salary', value:'12000'},
    {id: 2,text : 'Purchase of Tools', value:'12000'},
    {id: 3,text : 'Purchase of Makeup',value:'12000'},
    {id: 4,text : 'Rent',value:'12000'},

  ]

  const [exampleState, setExampleState] = useState(initialElements)

  const addElement = () => {
    var newArray = [...initialElements , {text : 'Others',value:'12000'}];
    setExampleState(newArray);
  }

  const handleDelete=(id)=>{
    console.log(id)
    const newList = exampleState.filter((item) => item.id !== id);
    setExampleState(newList)

  }

  return (
    <View style={styles.container}>
    <Button
      title="Log A New Expense"
      onPress={addElement} />
    <FlatList
        keyExtractor = {item => item.id}  
        data={exampleState}
        renderItem = {item => (
          <View style={styles.item}>
        <Text >
        {item.item.text}
        {item.item.value}
        </Text>
        <Icon name="remove" size={15} onPress={()=>handleDelete(item.item.id)}/>
        </View>
        )} 
    />
    
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    //backgroundColor:'pink'
  },
  item: {
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 12,
  },
  title: {
    fontSize: 24,
  },
});

export default List;