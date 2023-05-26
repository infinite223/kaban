import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

// import Board, { Repository } from 'react-native-dnd-board';
import useAuth, { db } from './../../../hooks/useAuth';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TableItem } from './Table';
import { Color } from '../../../../GlobalStyles';
import { useSelector } from 'react-redux';
import { selectBoardData, selectSelectedBoard, setBoard, setSelectedBoard } from '../../../slices/boardDataSlice';
import { arrayUnion, collection, doc, getDoc, onSnapshot, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ColorPickerModal } from '../../AddCard/ColorPickerModal';
import { LogBox } from 'react-native';


LogBox.ignoreAllLogs()
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export const KanbanBoard = () => {
  const { startUser }: any = useAuth()
  const navigation:any = useNavigation()
  const {user, setUser}:any = useAuth()
  const dispatch = useDispatch()
  const kanbanboardsData = useSelector(selectBoardData) 
  const selectedBoard = useSelector(selectSelectedBoard)
  const [showColorPicker, setShowColorPicker] = useState(false)

  // const [kanbanBoardData, setKanbanBoardData] = useState<any>(
  //   kanbanboardsData[selectedBoard].boardData
    
  // )
  console.log(kanbanboardsData, 'xd')
  // console.log(kanbanBoardData[0]?.rows, 'xdd')
  useEffect(() => {
    const getDataUser = async () => {
      const userData = await getDoc(doc(db, 'users', user.uid))
      // console.log(userData.data(),' tuuu')
      if(userData.data()){
        setUser(userData.data())
      }
 

      if (user.projects?.length===0) {
        navigation.navigate('CreateBoard')
      }
    }
    getDataUser() 
  },[])

  useEffect(() => {
    if(user.projects?.[0]){
      const boardsRef = collection(db, "boards");

      const q = query(boardsRef, where("usersUid", "array-contains", user.uid));


      const unsub = onSnapshot(q, (res) => {

        if(res.empty){
          updateDoc(doc(db, 'boards', user.projects?.[0]), {
            'users': arrayUnion({
              email: user.email,
              name: user.name,
              profileImage: user.profileImage,
              roleInProject: 'Developer',
              uid: user.uid
            })
          }).then(() => {
            updateDoc(doc(db, 'boards', user.projects?.[0]), {
              'usersUid':arrayUnion(user.uid)
            })
          })
        }

        console.log("Current data: ", res.docs, user.uid);
        //  setKanbanBoardData(res.docs[0].data()?.boardData)
        dispatch(setBoard(res.docs.map((doc) => {
          return doc.data()
        })))
      })
    
    return unsub
    }
  
  },[user, setUser])

  const kanbanBoardData = (kanbanboardsData && kanbanboardsData[selectedBoard]) && kanbanboardsData[selectedBoard].boardData

return (<>
    {selectedBoard===-1?
          <View style={style.containerSelect}>
            <View>
              <Text style={style.headerText}>Wybierz projekt:</Text>
              <FlatList
                style={{maxHeight:180}}
                data={kanbanboardsData}
                numColumns={2}
                renderItem={({item, index}) => 
                <TouchableOpacity 
                  style={[style.selectItem, {backgroundColor: item.backgroundColor}]} 
                  onPress={() => dispatch(setSelectedBoard(index))}
                >
                  <Text style={style.selectItemText}>{item.name}</Text>
                </TouchableOpacity>}
              />
            </View>
          </View>:
      <ScrollView 
        style={{ flex: 1 }}
        horizontal
        scrollEnabled={!showColorPicker}
        contentContainerStyle={{backgroundColor:kanbanboardsData[selectedBoard].backgroundColor}}
        >
        {kanbanBoardData&&<TableItem setShowColorPicker={setShowColorPicker} showColorPicker={showColorPicker}  name="Todo" id={0} tableData={kanbanBoardData[0]}/>}
        {kanbanBoardData&&<TableItem setShowColorPicker={setShowColorPicker} showColorPicker={showColorPicker} name="In progress" id={1} tableData={kanbanBoardData[1]}/>}
        {kanbanBoardData&&<TableItem setShowColorPicker={setShowColorPicker} showColorPicker={showColorPicker} name="Done" id={2} tableData={kanbanBoardData[2]}/>}
      </ScrollView>
      }
    </>
  )
}


const style = StyleSheet.create({
  containerSelect: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  headerText: {
    fontSize:20,
    textAlign:'center',
    fontWeight:'700',
    margin:10
  },
  selectItem: {
    paddingHorizontal:15,
    paddingVertical:7,
    borderColor:Color.lightslategray_100,
    borderWidth:1,
    borderRadius:5,
    margin:5,
    width:170,
    height:170,
    alignItems:'center',
    justifyContent:'center'
  },
  selectItemText: {
    fontSize:16,
    letterSpacing:1
  }
})