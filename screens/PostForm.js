import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { Input, Button } from '@rneui/base';
import { useState } from 'react'

export const PostForm=()=>{
    const [text, setText] = useState("");
    const [text1, setText1] = useState("");
    return (
        <View style={styles.container}>
        <Input
          value={subject}
          onChangeText={setSubject}
          placeholder="ejemplo Matematicas"
          label="Materia"
          errorMessage={errorSubject}
          disabled={!isNew}
        />
        <Input
          value={grade}
          onChangeText={setGrade}
          placeholder="0-10"
          label="Nota"
          errorMessage={errorGrade}
        />
        <Button
          title="Guardar"
          icon={{
            name: 'save',
            type: 'entypo',
            color: 'white',
          }}
          buttonStyle={styles.saveButton}
          onPress={save}
        />
      </View>
 
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    saveButton: {
      backgroundColor: 'green',
    },
  });