import {StyleSheet,Dimensions,Platform} from 'react-native';

/////////////////app styles & colors/////////////
import Colors from '../../utils/Colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
const {width: screenWidth} = Dimensions.get('window');
const LightModestyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white'
    },
    mainheadingtext:
    { 
      color:'black',
      fontSize:hp(2)
    },
    subtext:
    {
      color:'black',
      fontSize:hp(1.8)
    },
belowtext:
{ 
  color:'black',
  fontSize:hp(1.8),
      fontWeight:'400'
},
renderviews:
{
  width:wp(14),
  height:hp(6.5),
  backgroundColor:Colors.Appthemecolorprimary,
  borderRadius:10,
  alignItems:"center",
  justifyContent:'center'
  },
lasticon:
{
  width:wp(7),
  height:hp(7)
},
textlasticon:
{
  width:wp(3.5),
  height:hp(5),
  marginRight:wp(2)
},
buttonview:
{
marginBottom:wp(10),
  marginTop: hp(4),
},
  });
export default LightModestyles;
