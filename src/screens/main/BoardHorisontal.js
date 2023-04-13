// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import SortableGrid from 'react-native-sortable-grid'
// import React, { useState } from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const initialLists = [
  { id: 1, title: 'To do', cards: [{ id: 1, text: 'Task 1' }, { id: 2, text: 'Task 2' }] },
  { id: 2, title: 'In progress', cards: [{ id: 3, text: 'Task 3' }] },
  { id: 3, title: 'Done', cards: [] },
];

const Card = ({ text }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.cardText}>{text}</Text>
    </TouchableOpacity>
  );
};



// const List = ({ list, lists, setLists }) => {
//   const [draggingCard, setDraggingCard] = useState(null);

//   const onCardDrag = ({ nativeEvent }) => {
//     if (nativeEvent.oldState === 4) {
//       // Card released
//       const { x, y } = nativeEvent.translationX < 0 ? nativeEvent.translationY < 0 ? { x: -100, y: -100 } : { x: -100, y: 100 } : nativeEvent.translationY < 0 ? { x: 100, y: -100 } : { x: 100, y: 100 };
//       const targetListIndex = lists.findIndex((l) => l.id === list.id + x / 100 && l.cards.some((c) => c.id === draggingCard.id));
//       const targetList = lists[targetListIndex];
//       const targetCardIndex = targetList.cards.findIndex((c) => c.id === draggingCard.id);
//       const newLists = [...lists];
//       newLists.find(l => l.id === list.id).cards = list.cards.filter(c => c.id !== draggingCard.id);
//       newLists[targetListIndex].cards.splice(targetCardIndex, 0, draggingCard);
//       setLists(newLists);
//       setDraggingCard(null);
//     }
//   };

//   return (
//     <View style={styles.list}>
//       <Text style={styles.listTitle}>{list.title}</Text>
//       {list.cards.map((card) => (
//         <PanGestureHandler
//           key={card.id}
//           onGestureEvent={({ nativeEvent }) => setDraggingCard({ ...card, x: nativeEvent.translationX, y: nativeEvent.translationY })}
//           // onHandlerStateChange={}
          
//           onHandlerStateChange={({ nativeEvent }) => {
//             if (nativeEvent.oldState === 4) {
//               setDraggingCard(null);
//             }
//           }}
//         >
//           <Animated.View style={[styles.cardContainer, draggingCard?.id === card.id && { opacity: 0 }]}>
//             <Card text={card.text} />
//           </Animated.View>
//         </PanGestureHandler>
//       ))}
//       <View style={styles.cardContainer}>
//         {draggingCard && <Card text={draggingCard.text} />}
//       </View>
//       <View style={styles.cardContainer} />
//       <View style={styles.cardContainer} />
//       <View style={styles.cardContainer} />
//       <View style={styles.cardContainer} />
//       <View style={styles.cardContainer} />
//       <View style={styles.cardContainer} />
//     </View>
//     );
//   };
  
import { FlatList } from 'react-native-gesture-handler';
import List from './List';

const listsData = [
  {
    id: 'list-1',
    title: 'To Do',
    cards: [
      { id: 'card-1', title: 'Task 1' },
      { id: 'card-2', title: 'Task 2' },
      { id: 'card-3', title: 'Task 3' },
    ],
  },
  {
    id: 'list-2',
    title: 'In Progress',
    cards: [{ id: 'card-4', title: 'Task 4' }],
  },
  {
    id: 'list-3',
    title: 'Done',
    cards: [{ id: 'card-5', title: 'Task 5' }],
  },
];

export const KanbanBoard = () => {
  const [lists, setLists] = useState(listsData);
  const [draggingCard, setDraggingCard] = useState(null);

  const updateLists = (sourceListId, destinationListId, sourceIndex, destinationIndex) => {
    const newLists = lists.map(list => {
      if (list.id === sourceListId) {
        const newCards = [...list.cards];
        const [removed] = newCards.splice(sourceIndex, 1);
        return { ...list, cards: newCards };
      }
      if (list.id === destinationListId) {
        const newCards = [...list.cards];
        newCards.splice(destinationIndex, 0, removed);
        return { ...list, cards: newCards };
      }
      return list;
    });
    setLists(newLists);
  };

  const handleGesture = (list, card, event) => {
    const { translationX, translationY, gestureState } = event.nativeEvent;
    if (gestureState === State.ACTIVE) {
      setDraggingCard(card);
    }
    if (gestureState === State.END) {
      setDraggingCard(null);
      const dropZone = dropZones.find(dropZone => isDropZone(dropZone, translationX, translationY));
      if (dropZone) {
        const { listId, index } = dropZone;
        const sourceListId = list.id;
        const destinationListId = listId;
        const sourceIndex = list.cards.findIndex(c => c.id === draggingCard.id);
        const destinationIndex = index;
        updateLists(sourceListId, destinationListId, sourceIndex, destinationIndex);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{}}>Kanban Board</Text>
      <FlatList
        data={lists}
        keyExtractor={list => list.id}
        renderItem={({ item }) => <List list={item} onGesture={handleGesture} />}
        horizontal={true}
      />
    </View>
  );
};


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 20,
      flexDirection:'column',
      backgroundColor: '#E5E5E5',
    },
    list: {
      backgroundColor: '#F2F2F2',
      borderRadius: 10,
      padding: 10,
      width: 200,
      alignItems: 'center',
    },
    listTitle: {
      fontWeight: 'bold',
      marginBottom: 10,
    },
    cardContainer: {
      marginTop: 10,
      marginBottom: 10,
      width: 180,
      height: 60,
    },
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: 5,
      padding: 10,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    },
    cardText: {
      textAlign: 'center',
    },
  });

// return (
//   <View style={{flex:1}}>
//    <SortableGrid 
//     itemWidth={200}
//     itemHeight={100}
//     blockTransitionDuration      = { 400 }
//     activeBlockCenteringDuration = { 200 }
//     itemsPerRow                  = { 3 }

//     // dragActivationTreshold       = { 200 }
//     onDragRelease                = { (itemOrder) => console.log("Drag was released, the blocks are in the following order: ", itemOrder) }
//     onDragStart                  = { ()          => console.log("Some block is being dragged now!") } 
//    >
//     {
//       cards.map( ({title}, index) =>
//         <View key={index} style={{backgroundColor:'red',  borderWidth:1, margin:10}}>
//           <Text style={{color:'white'}}>{title}</Text>
//         </View>
//       )
//     }
//     </SortableGrid>
//   </View>
//   );
// };


  