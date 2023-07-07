import { View, StyleSheet, Text, Dimensions } from "react-native";
import React from "react";
import { CardContent } from "./CardContent";
import { numericCarry } from "@src/utils/numericCarry";
import { Icon } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

interface PostCardProps {
  children?: React.ReactNode;
  title?: string;
  username: string;
  userAvatar: string;
  time: string;
  reply?: number;
  level: number;
}

export default function PostCard({
  children,
  title,
  username,
  userAvatar,
  time,
  reply,
  level,
}: PostCardProps) {
  return (
    <View style={PostCardStyle.whole}>
      <View style={PostCardStyle.topCard}>
        <Text style={PostCardStyle.timestyle}>{time}</Text>
        <Text style={PostCardStyle.replystyle}>
          {"#" + level}
          {reply && "    回复#" + reply}
        </Text>
      </View>
      <CardContent title={title} username={username} userAvatar={userAvatar}>
        {children}
      </CardContent>
      <View style={PostCardStyle.bottomCard}>
        <TouchableOpacity
          onPress={() => {
            console.log("good");
          }}
        >
          <View style={PostCardStyle.iconview}>
            <Icon size={24} color="#8B8989" type="antdesign" name="like2" />
            <Text style={PostCardStyle.icontext}>{numericCarry(20101)}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log("bad");
          }}
        >
          <View style={PostCardStyle.iconview}>
            <Icon size={24} color="#8B8989" type="antdesign" name="dislike2" />
            <Text style={PostCardStyle.icontext}>{numericCarry(2144313)}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log("comment");
          }}
        >
          <View style={PostCardStyle.iconview}>
            <Icon size={24} color="#8B8989" type="antdesign" name="message1" />
            <Text style={PostCardStyle.icontext}>{numericCarry(99)}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const PostCardStyle = StyleSheet.create({
  bottomCard: {
    borderColor: "rgb(230,230,230)",
    borderTopWidth: 1,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    marginLeft: "5%",
    marginRight: "5%",
    paddingTop: 5,
  },
  icontext: {
    color: "#8B8989",
    marginLeft: 2,
  },
  iconview: {
    alignItems: "center",
    flexDirection: "row",
    padding: 3,
  },
  replystyle: {
    color: "rgb(100,100,100)",
  },
  timestyle: {
    color: "#FF7256",
  },
  topCard: {
    borderBottomWidth: 1,
    borderColor: "rgb(230,230,230)",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: 5,
  },
  whole: {
    backgroundColor: "white",
    borderRadius: windowWidth * 0.04,
    marginLeft: windowWidth * 0.015,
    marginTop: windowHeight * 0.01,
    width: windowWidth * 0.97,
  },
});
