import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

interface IMessage {
  id: number;
  title: string;
  description: string;
  image: any;
}
const initialMessages: IMessage[] = [
  {
    id: 1,
    title: "Tom Wacaster",
    description: "I'm interested in this item. Is it still available?",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Tom Wacaster",
    description: "Are you fexible on the price?",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "Tom Wacaster",
    description:
      "Does this item still have all of the original packaging include documentation and optional attachments?",
    image: require("../assets/mosh.jpg"),
  },
];
const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message: IMessage) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  const handleRefresh = () => {
    setRefreshing(true);
    setMessages(initialMessages);
    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            onPress={() => console.log(`Pressed ${item.id}`)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
