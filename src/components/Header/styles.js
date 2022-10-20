import React from 'react';
import {StyleSheet,
Dimensions
} from 'react-native';
import Colors from '../../utils/Colors';
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

const styles = StyleSheet.create({



  
    //Header
    headerView: {
      flexDirection: 'row',
      backgroundColor: 'white',
      height: Height * 0.07,
      width: Width ,
      paddingHorizontal:wp(3)
    },
    iconview:
    { 
        justifyContent: 'center', 
        marginRight: wp(5)
     },
    labelView: {
      marginHorizontal: wp(5),
      flexDirection: 'column',
      width: Width * 0.7,
  
    },

label:
{ 
    color: Colors.Appthemecolorprimary,
     fontSize: hp(2.2), 
     fontWeight: "400", 
     marginTop: 15 
    }

  });
  
  
  export default styles;
  