/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//實價登錄
import React, { Component } from "react";
import { StyleSheet, ScrollView, Platform, Image, Linking, TouchableOpacity, Text, View } from "react-native";

import Btns from "../../utils/Btn";
import screen from "../../Style/screen";

export default class PricingLogin extends Component {
  _NavigationBtnWeb(page, PageName, PageUrl) {
    const { navigate } = this.props.navigation;
    if (Platform.OS === "android") {
      navigate(page, {
        PageName: PageName,
        PageUrl: PageUrl
      });
    } else {
      Linking.openURL(PageUrl);
    }
  }

  _NavigationBtn(page) {
    const { navigate } = this.props.navigation;
    navigate(page);
  }

  _Button = (text, onPress) => (
    <TouchableOpacity
      style={{
        width: 210,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(64,124,118)",
        borderRadius: 5,
        marginBottom: 23,
        marginTop: 10
      }}
      onPress={onPress}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
          color: "#fff"
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/pricinglogin.png")}>
        <ScrollView>
          <View
            style={{
              flex: 1,
              marginTop: 20,
              alignItems: "center",
              width: screen.width,
              height: screen.height
            }}
          >
            <Btns
              text={"案件類型"}
              onPress={() => Linking.openURL("http://www.xh-land.gov.tw/?Guid=a2100cfd-66b3-f11f-37a7-275306ea4c84")}
              textSize={{ fontSize: 24 }}
              styless={{ backgroundColor: "rgb(64,124,118)", marginTop: 20 }}
            />
            <Btns
              text={"申報方式"}
              onPress={() => Linking.openURL("http://www.xh-land.gov.tw/?Guid=a2100cfd-66b3-f11f-37a7-275306ea4c84&MyN=2")}
              textSize={{ fontSize: 24 }}
              styless={{ backgroundColor: "rgb(64,124,118)", marginTop: 20 }}
            />
            <Btns
              text={"書表下載"}
              onPress={this._NavigationBtn.bind(this, "DeclarationBook")}
              textSize={{ fontSize: 24 }}
              styless={{ backgroundColor: "rgb(64,124,118)", marginTop: 20 }}
            />
            <Btns
              text={"實價登錄申報網"}
              onPress={this._NavigationBtnWeb.bind(this, "WebPage", "實價登錄申報網", "https://clir.land.moi.gov.tw/cap/")}
              textSize={{ fontSize: 24 }}
              styless={{ backgroundColor: "rgb(64,124,118)", marginTop: 20 }}
            />
            <Btns
              text={"不動產交易實價查詢網"}
              onPress={this._NavigationBtnWeb.bind(this, "WebPage", "不動產交易實價查詢網", "http://lvr.land.moi.gov.tw/homePage.action")}
              textSize={{ fontSize: 24 }}
              styless={{ backgroundColor: "rgb(64,124,118)", marginTop: 20 }}
            />
          </View>
        </ScrollView>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screen.width,
    height: screen.height,
    justifyContent: "center"
  }
});
