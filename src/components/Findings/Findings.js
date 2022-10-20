import React, { useRef,useState,useEffect }from "react";
import { Text, SafeAreaView, View,TouchableOpacity,
  KeyboardAvoidingView,} from "react-native";
 import { TextInput,Avatar } from 'react-native-paper';
  ////////////////app components////////////////
import CustomButton from "../Button/CustomButton";
import CamerBottomSheet from "../CameraBottomSheet/CameraBottomSheet";
import AddedtosaveBottomSheet from "./AddtoSave";

/////////////////app pakages//////////////
import RBSheet from "react-native-raw-bottom-sheet";

//////////////////pickers///////////////
import ImagePicker from 'react-native-image-crop-picker';

////////////app icons///////////////
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons'


////////////////app redux///////////
import { useSelector } from 'react-redux';

////////////app styles///////////////
import styles from "./styles";
import Colors from "../../utils/Colors";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

////////////////api////////////////
import axios from 'axios';
import { BASE_URL } from "../../utils/ApiRootUrl";
import AsyncStorage from '@react-native-async-storage/async-storage';

const FindingsBottomSheet= (props) => {

    ////////////////////redux/////////////////////
    const { theme } = useSelector(state => state.userReducer);

        //ReviewAdded state and funnction
        const refRBSheetSaveAdded = useRef();  
        
///////////////Data states/////////
        const [Findings,  setFindings] = React.useState();
 //////////////////////Api Calling/////////////////
 const AddFindings = async() => {
  var user= await AsyncStorage.getItem('Userid')
  console.log("userid:",user,props.LocationID)
 
    axios({
      method: 'POST',
      url: BASE_URL + 'findings/addFindings',
      data: {
        location_id: props.LocationID,
        userId: user,
        findings: Findings
      },
    })
      .then(function (response) {
        console.log("response", JSON.stringify(response.data))
        refRBSheetSaveAdded.current.open()

      })
      .catch(function (error) {
        console.log("error", error)
      })
  }
  return (
      <RBSheet
         //sstyle={{flex:1}}
         ref={props.refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={500}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.9)',
          },
          draggableIcon: 
          {
             backgroundColor: theme ===false? 'white':'black'
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius:20,
            height: hp(50),
            backgroundColor: theme ===false? 'white':'black'
        }
        }}

      >

         <View style={{flexDirection:'column', marginHorizontal:20,marginVertical:20}}>

<View style={styles.textAreaContainer}>
    <TextInput
          onChangeText={setFindings}
      style={[styles.papertextArea,,{  backgroundColor: theme === false? 'white':'rgba(52, 52, 52, 0.5)'}]}
      mode={'outlined' }
      outlineColor={Colors.Appthemecolorprimary}
      activeOutlineColor={Colors.Appthemecolorprimary}
      placeholder="Add Your Findings"
      placeholderTextColor={ theme === false?"black":'white'}
      numberOfLines={10}
      multiline={true}
    />
  </View>
  <View style={styles.button}>
            <CustomButton
              title={'Add'}
              widthset={'80%'}
              iscolor={'here'}
            //   loading={loading}
            //   disabled={disable}
            onPress={()=>{
              AddFindings()
         
            }}
            /></View> 
      
          </View>

                    <AddedtosaveBottomSheet
              refRBSheet={refRBSheetSaveAdded}
              onClose={() => {refRBSheetSaveAdded.current.close(),props.refRBSheet.current.close()}}
              title={'Add to Saved'}
            />
      </RBSheet>

  );
};


export default FindingsBottomSheet;