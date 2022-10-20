import {StyleSheet,Dimensions,Platform} from 'react-native';

/////////////////app styles & colors/////////////
import Colors from '../../utils/Colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
const {width: screenWidth} = Dimensions.get('window');
const DarkModestyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'black'
    },
    mainheadingtext:
    { 
      color:'white',
      fontSize:hp(2.5)
    },
    subtext:
    {
      color:'white',
      fontSize:hp(1.8),
      textAlign:'justify'
    },
    belowtext:
    { 
      color:'white',
      fontSize:hp(1.8),
      fontWeight:'400'
    },
  });
export default DarkModestyles;
