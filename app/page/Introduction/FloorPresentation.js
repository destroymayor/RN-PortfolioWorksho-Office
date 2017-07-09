/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//樓層介紹
import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import screen from "../../Style/screen";

export default class FloorPresentation extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>一樓平面圖：一樓為登記課辦公室，前方為服務台及民眾休息區，右側為倉庫及哺乳室，左側有樓梯、廁所及廚房。</Text>
          <Image
            resizeMode={Image.resizeMode.contain}
            style={{
              width: screen.width,
              height: screen.height / 2,
              marginBottom: 20
            }}
            source={require("../../image/floorpresen1.png")}
          />
          <Text>二樓平面圖：二樓為地價課辦公室及總務、人事、出納、主計辦公室，右側為主任室、會議室及廁所，左側有樓梯。</Text>
          <Image
            resizeMode={Image.resizeMode.contain}
            style={{
              width: screen.width,
              height: screen.height / 2,
              marginBottom: 20
            }}
            source={require("../../image/floorpresen2.png")}
          />
          <Text>三樓平面圖：三樓為測量課辦公室及總會議室，右側為倉庫及電腦室，左側有樓梯及廁所。</Text>
          <Image
            resizeMode={Image.resizeMode.contain}
            style={{
              width: screen.width,
              height: screen.height / 2,
              marginBottom: 20
            }}
            source={require("../../image/floorpresen3.png")}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF"
  }
});
