import React, { useRef,useState,useEffect }from "react";
import { Text, SafeAreaView, View,TouchableOpacity,FlatList,Image,
  KeyboardAvoidingView,} from "react-native";
 import { TextInput,Avatar } from 'react-native-paper';
  ////////////////app components////////////////
import CustomButton from "../Button/CustomButton";

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
import LightModestyles from "../../styles/MapView/LightModestyles";
import styles from "./styles";
import Colors from "../../utils/Colors";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from "../../utils/ApiRootUrl";

import { useNavigation  } from '@react-navigation/native';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

const LocationsBottomSheet= (props) => {
const navigation = useNavigation();

    ////////////////////redux/////////////////////
    const { theme } = useSelector(state => state.userReducer);

        //ReviewAdded state and funnction
        const refRBSheetSaveAdded = useRef();  
        useEffect( () => {
          GetWalkingRoutes()
          GetDogWalks()
          GetCarParking()
          GetToilets()
          },[]);
      
          ////////////////Titles States/////////////
      const [WalkingRoutes,setWalkingRoutes] = useState();
      const [DogWalks,setDogWalks] = useState();
      const [CarParking,setCarParking] = useState();
      const [Toilets,setToilets] = useState();
      
          //////////////GetWalkingRoutes Api Calling////////////////////
      const GetWalkingRoutes=async() => {
      
      console.log('here',BASE_URL+'title/getTitles')
      axios({
      method: 'GET',
      url: BASE_URL+'location/getLocationByType/?type=walking-route',
      })
      .then(async function (response) {
      console.log("response here in get useer", JSON.stringify(response.data.result.images))
      setWalkingRoutes(response.data.result)


      })
      .catch(function (error) {
      if(error)
      {     console.log('Email or Password is incorrect')}
      //setModalVisible(true)
      
      console.log("error", error)
      })
      }
                //////////////GetDogWalks Api Calling////////////////////
                const GetDogWalks=async() => {
      
                  console.log('here',BASE_URL+'title/getTitles')
                  axios({
                  method: 'GET',
                  url: BASE_URL+'location/getLocationByType/?type=dog-walk',
                  })
                  .then(async function (response) {
                  console.log("response here in get useer", JSON.stringify(response.data.result))
                  setDogWalks(response.data.result)
                  })
                  .catch(function (error) {
                  if(error)
                  {     console.log('Email or Password is incorrect')}
                  //setModalVisible(true)
                  
                  console.log("error", error)
                  })
                  }
                            //////////////GetCarParking Api Calling////////////////////
      const GetCarParking=async() => {
      
        console.log('here',BASE_URL+'title/getTitles')
        axios({
        method: 'GET',
        url: BASE_URL+'location/getLocationByType/?type=parking',
        })
        .then(async function (response) {
        console.log("response here in get useer", JSON.stringify(response.data.result))
        setCarParking(response.data.result)
        })
        .catch(function (error) {
        if(error)
        {     console.log('Email or Password is incorrect')}
        //setModalVisible(true)
        
        console.log("error", error)
        })
        }
                  //////////////GetToilets Api Calling////////////////////
      const GetToilets=async() => {
      
        console.log('here',BASE_URL+'title/getTitles')
        axios({
        method: 'GET',
        url: BASE_URL+'location/getLocationByType/?type=toilet',
        })
        .then(async function (response) {
        console.log("response here in get useer", JSON.stringify(response.data.result))
        setToilets(response.data.result)
  
        })
        .catch(function (error) {
        if(error)
        {     console.log('Email or Password is incorrect')}
        //setModalVisible(true)
        
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
            borderTopLeftRadius: 18,
            borderTopRightRadius:18,
            height: hp(90),
            backgroundColor: theme ===false? 'white':'black',
            borderTopColor:Colors.Appthemecolorprimary,
            borderTopWidth:15,
        }
        }}

      >

<View style={{
  //backgroundColor:theme === false ? 'white':'rgba(52, 52, 52, 1)',
      height:hp(6),
    width:wp(100),borderTopLeftRadius:wp(2),borderTopRightRadius:wp(2)}}>
     <TouchableOpacity onPress={()=> props.refRBSheet.current.close()}>
      <View style={{flexDirection:'row',marginHorizontal:wp(5)}}>
      <Ionicons name={'chevron-down'} size={25} 
          color= {theme ===false? 'black':'white'}
          onPress={() =>   props.refRBSheet.current.close()}/>
          <View>
          <Text style={styles.sidetext}>What's Nearby</Text>
          <Text style={styles.sidetext}>Lorem ipsum</Text>
          </View>
          </View>
      </TouchableOpacity>
      </View>
<View>
<TouchableOpacity onPress={()=>
   {navigation.navigate('WalkingRouteSearch','WalkingRoute'),
   props.refRBSheet.current.close()
   }}>
      <View style={styles.Topicsview}>
      <Text style={styles.sidetext}>WalkingRoutes</Text>
      <View style={styles.SeeView}>
      <Text style={styles.Seetext} onPress={()=>
   {   
    navigation.navigate('WalkingRouteSearch','WalkingRoute'),
       props.refRBSheet.current.close()
      }
    }>
        View On Map</Text>
      </View>
      </View>
      </TouchableOpacity>
{WalkingRoutes === ''?null:
      <FlatList
                data={WalkingRoutes}
                renderItem={({ item }) =>
                <TouchableOpacity> 
                 <View style={styles.flatlistmainview}>
     
                    <Image
                     source={{uri:item.images.length === 0 ?null:item.images[0].image_url}}
                     //source={require("../../assets/banners/CarParking.png")}
                     //source={{uri:item.images}}
                      style={{height:hp(10),width:wp(20),borderRadius:item.logo === 0 || item.logo ===27 ?wp(0):wp(5)}}
                      imageStyle={{
                        borderRadius: 15, borderWidth: 1,
                        borderColor: 'black', padding: 10
                      }}>
                    </Image>
          
                    <Text style={{ color: 'white',width:wp(20),textAlign:'center',marginTop:hp(1) }}>
                      {item.title}</Text> 
                  </View>
                </TouchableOpacity>
                }
                keyExtractor={(item, index) => index}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />
}
</View>
<View>
<TouchableOpacity onPress={()=>
{   navigation.navigate('WalkingRouteSearch','DogWalks'), 
props.refRBSheet.current.close()}
   }>
      <View style={styles.Topicsview}>
      <Text style={styles.sidetext}>Dog Walks</Text>
      <View style={styles.SeeView}>
      <Text style={styles.Seetext} onPress={()=>
   {     navigation.navigate('WalkingRouteSearch','DogWalks'),
        props.refRBSheet.current.close()}
        }>View On Map</Text>
      </View>
      </View>
      </TouchableOpacity>
      {DogWalks === ''?null:
      <FlatList
                data={DogWalks}
                renderItem={({ item }) =>
                <View style={styles.flatlistmainview}>
                
                    <Image
                           source={{uri:item.images.length === 0 ?null:item.images[0].image_url}}
                                // source={{uri:item.images}}
                  //source={require("../../assets/banners/CarParking.png")}
                      style={{height:hp(10),width:wp(20),borderRadius:item.logo === 0 || item.logo ===27 ?wp(0):wp(5)}}
                      imageStyle={{
                        borderRadius: 15, borderWidth: 1,
                        borderColor: 'black', padding: 10
                      }}>
                    </Image>
                
                    <Text style={{ color: 'white',width:wp(20),textAlign:'center',marginTop:hp(1) }}>
                      {item.title}</Text> 
                  </View>
                }
                keyExtractor={(item, index) => index}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />
}
</View>
<View>
<TouchableOpacity onPress={()=> 
{
  navigation.navigate('WalkingRouteSearch','CarParkings'),
props.refRBSheet.current.close()
}
}>
      <View style={styles.Topicsview}>
      <Text style={styles.sidetext}>Car parking</Text>
      <View style={styles.SeeView}>
      <Text style={styles.Seetext} onPress={()=>
{      navigation.navigate('WalkingRouteSearch','CarParkings'),
    props.refRBSheet.current.close()}
    }>View On Map</Text>
      </View>
      </View>
      </TouchableOpacity>
      {CarParking === ''?null:
      <FlatList
                data={CarParking}
                renderItem={({ item }) =>
                              <View style={styles.flatlistmainview}>
                    
                    <Image
                              source={{uri:item.images.length === 0 ?null:item.images[0].image_url}}
                                // source={{uri:item.images}}
             //source={require("../../assets/mainSeacrh/CarParkings.png")}
                      style={{height:hp(10),width:wp(20),borderRadius:item.logo === 0 || item.logo ===27 ?wp(0):wp(5)}}
                      imageStyle={{
                        borderRadius: 15, borderWidth: 1,
                        borderColor: 'black', padding: 10
                      }}>
                    </Image>
                    
                    <Text style={{ color: 'white',width:wp(20),textAlign:'center',marginTop:hp(0) }}>
                      {item.title}</Text> 
                  </View>
                }
                keyExtractor={(item, index) => index}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />
}
</View>
<View>
<TouchableOpacity onPress={()=> 
{navigation.navigate('WalkingRouteSearch','Toilets'),
props.refRBSheet.current.close()}
}>
      <View style={styles.Topicsview}>
      <Text style={styles.sidetext}>Toilet locations</Text>
      <View style={styles.SeeView}>
      <Text style={styles.Seetext} onPress={()=>
    {  navigation.navigate('WalkingRouteSearch','Toilets'),
    props.refRBSheet.current.close()}
    }>View On Map</Text>
      </View>
      </View>
      </TouchableOpacity>
      {Toilets === ''?null:
      <FlatList
                data={Toilets}
                renderItem={({ item }) =>
                <View style={styles.flatlistmainview}>
             
                    <Image
                             source={{uri: item.images.length === 0 ?null:item.images[0].image_url}}
                                 //source={{uri:item.images}}
                     //source={require("../../assets/mainSeacrh/CarParkings.png")}
                      style={{height:hp(10),width:wp(20),borderRadius:item.logo === 0 || item.logo ===27 ?wp(0):wp(5)}}
                      imageStyle={{
                        borderRadius: 15, borderWidth: 1,
                        borderColor: 'black', padding: 10
                      }}>
                    </Image>
                
                    <Text style={{ color: 'white',width:wp(20),textAlign:'center',marginTop:hp(0) }}>
                      {item.title}</Text> 
                  </View>
                }
                keyExtractor={(item, index) => index}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />
}
</View>
      </RBSheet>

  );
};


export default LocationsBottomSheet;