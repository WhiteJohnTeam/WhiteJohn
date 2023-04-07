import Card from "../classes/Card";
import { StyleSheet,  View, Text } from "react-native";

type CardItemListProps = {
    items: Card[];
}

export default function CardItemList({ items }: CardItemListProps) {
    return  (
        <View style={styles.middle}>
          {items.map((card, index) => (
            <Text key={index}>
              {card.value} {card.suit}
              {index < items.length - 1 ? ", " : ""}
            </Text>
          ))}
        </View>
    )
}

const styles = StyleSheet.create({
    middle: {
        alignItems: "center",
      },

});