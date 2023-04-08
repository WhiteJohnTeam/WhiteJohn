import Card from "../classes/Card";
import { StyleSheet,  View, Image, FlatList } from "react-native";

type CardItemListProps = {
    items: Card[];
}

export default function CardItemList({ items }: CardItemListProps) {
  return  (
      <FlatList
        horizontal={true}        
        data={items}
        renderItem={({ item }) => renderCard({ item })}
        keyExtractor={item => item.image}
      />
  )
}

const styles = StyleSheet.create({
    middle: {
        alignItems: "center",
      },

    card_image: {
      width: 70,
      height: 100,
    },

});

const renderCard = ({ item }) => {
  if (!item || !item.image) {
    return null;
  }
  const newImageUrl = item.image.replace(".svg", ".png");
  return  <View>
            <Image source={{uri: newImageUrl}} style={styles.card_image}/>
          </View> 
};