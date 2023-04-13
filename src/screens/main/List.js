import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';


const Card = ({ text }) => {
    return (
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>{text}</Text>
      </TouchableOpacity>
    );
  };

export const List = ({ list, onGesture }) => {
  const { title, cards } = list;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.cardsContainer}>
        {cards.map((card, index) => (
          <PanGestureHandler
            key={card.id}
            onGestureEvent={event => onGesture(list, card, event)}
            onHandlerStateChange={event => onGesture(list, card, event)}
          >
            <Card card={card} index={index} />
          </PanGestureHandler>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cardsContainer: {
    width: '100%',
  },
});

export default List;