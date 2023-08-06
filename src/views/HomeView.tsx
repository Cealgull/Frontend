import HeaderBarWrapper from "@src/components/HeaderBarWrapper";
import { NavBar } from "@src/components/NavBar";
import { TopicCard } from "@src/components/PostCard";
import { getAllTopics } from "@src/services/viewService/getTopics";
import { useQuery } from "@tanstack/react-query/build/lib/useQuery";
import { FlatList, StyleSheet, Text, View } from "react-native";

export const HomeView: React.FC = () => {
  const {
    isLoading,
    isError,
    data: topicList,
  } = useQuery<ForumTopic[]>({
    queryKey: ["allTopics"],
    queryFn: getAllTopics,
  });

  const renderTopic = ({ item }: { item: ForumTopic }) => {
    return <TopicCard {...item} />;
  };

  if (isLoading) {
    return <Text>Is Loading...</Text>;
  }
  if (isError) {
    return <Text>Error!</Text>;
  }
  return (
    <View style={HomeViewStyle.whole}>
      <View style={{ backgroundColor: "rgb(225,225,225)" }}>
        <HeaderBarWrapper alignMethod="c">
          <Text>首页板块</Text>
        </HeaderBarWrapper>
      </View>
      <View style={HomeViewStyle.content}>
        <FlatList data={topicList} renderItem={renderTopic}></FlatList>
      </View>
      <NavBar />
    </View> //
  );
};

const HomeViewStyle = StyleSheet.create({
  content: {
    backgroundColor: "rgb(240,240,240)",
    flex: 8,
  },
  whole: {
    flex: 1,
  },
});
