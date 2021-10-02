import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { doc, getDoc } from "firebase/firestore";
import db from "../config";

export default class ReadComplaint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      student: "",
      query: "",
    };
  }

  submitQuery = async () => {
     const docRef = db.collection("complaints")// .doc("EdHlBIcjoK2TYdafEL9K");

     docRef.get()
     .then((querySnapshot) => {
         querySnapshot.forEach((doc) => {
             // doc.data() is never undefined for query doc snapshots
             console.log(doc.id, " => ", doc.data());
         });
     })
     .catch((error) => {
         console.log("Error getting documents: ", error);
     });``


  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.submitQuery}>
          <Text>Read</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
