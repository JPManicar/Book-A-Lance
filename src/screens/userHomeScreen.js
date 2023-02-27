import { StyleSheet, Text,Image, TouchableOpacity, SafeAreaView , ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const MAX_COLUMNS = 3;

const image = {uri: 'https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.15752-9/334030700_1388950791895334_6806776241274506609_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGVKp64dkDTdXFTybfRuPpIhfh1depObIWF-HV16k5shdr28C8N0hTWkrO6AxhbcZunZuxlGMSjhKgbnCo8VRMF&_nc_ohc=EZq85CqVWPcAX8iBEPJ&_nc_ht=scontent.fmnl4-6.fna&oh=03_AdSZsGc3Dvd1nPa_RWIPkgKKZZgN_d0gKjd2M5_Tj-zGFw&oe=6423B10F'};

const userHomeScreen = ({navigation}) => {
  return (

    
      <SafeAreaView style = {styles.container}>
        <ImageBackground source={image} style={styles.container}>
        <SafeAreaView style = {styles.navBar}>
          <Image 
            source= {{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAwCAYAAAC8NUKEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG1SURBVHgB7ZmxTsMwFEVfKmAABgT9gEwsCIkJgVhYERMrH8BefoSdgbETgomdBYmRgYmpHwAIqcCAKsy1miFqa79i5zVu+450ZdVxGt8mfTeJiRRFUWaBjBtgjGmg2YdOoA2aPG/QDfSYZdkvhQIjGXQMdU29dIt5eH/8jDHTRPMAbVL9vEAHODuvrgEN//60AuWUBjm06hvAmbFnbonSgJ0HZ2aqWCA5bOV5ht5Lffay3YKWadKgAOQmnKuigJS/rwldm3By33wlL7P2YOUpPl+SEJJmeo7+HxJipgqAmkkVzZmCUTlS5sPTf+/YJpdDTM4M5UgFx+NyKPftH3OZtX13sCHE5lCMmR7JEJxDWs0KpB4NFimQGDNnEgUAzSkFElOaj6A7TODbsb2FP/TTYCfG76C5cOyzDm1TIDFmbBbseravefoPSQAtAKmiZlJF0owrh4JzhEPSzFAOxeYIh+SrplE5FJUjHJJmuByqnLkqAIYEXw39EzsP4xvAmfmEOpQGHejLN8BrBjeKdtXqnPqm6sQev0X9VTQn4y4D7lF/GbDSW/4xsY/StxS7DKgoijI1/AFJBah0DaYxOQAAAABJRU5ErkJggg=='
            }}
            style={{width: 50, height: 50, marginHorizontal: 12}}/>

          <Text style={styles.navText}>Book A Lance</Text>
          <Image source={{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAsCAYAAAAacYo8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD6SURBVHgB7ZcxC4FRFIbPh4mVRRlkM1H4Cywmoz/gX/gh/oLNYjbKYDGRDKLIYLFxvSd9petLEjnqferpds/3Dafb7bxdEUIIIYS8TnC/cc7pvgNbMC42OMMB7AVBcAqLfuNZLHOYFFscYQmNr8JCzPvBwTG8iB20pwXc3Rejrkoe5vxvP0QPcYbTPgghhHyNqHFYhXWxlZxDOMFIdGExKjmnMCO22MstOTdhISZ/StRVqcCGGL8qhBDyWR4eCxiJaSxFsTPjdQSu4fJZcqawjGBZbL2AtKf2s+TUqC+InaYV7bHmFxPeXh+kXdgUW8nZh1shhBBCyJtcAWEVP1n5oyRbAAAAAElFTkSuQmCC'
          }}
          style={styles.hamburgerMenu}/>
        </SafeAreaView>
        
        
        <SafeAreaView style = {styles.callAmbulance}>
          <TouchableOpacity
            style={styles.callAmbulancebutton}
            onPress = {() => navigation.navigate('CallAmbulanceScreen')}>
            <Image source={{
            uri: 'data:image/png;base64,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',
             }}
            style={{width: 160, height: 150, margin:30}}
            />
            <Text style={styles.buttonText}>Call Ambulance</Text>
          </TouchableOpacity>
        </SafeAreaView>
        
        <SafeAreaView style={styles.actionButtons}>
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('FindHospitalScreen')}>
            <Text style={styles.buttonText}>Find Hospital</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('trackAmbulanceScreen')}>
            <Text style={styles.buttonText}>Track Ambulance</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('emergencyContactsScreen')}>
            <Text style={styles.buttonText}>Emergency Contacts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('healthTipsScreen')}>
            <Text style={styles.buttonText}>Health Tips</Text>
          </TouchableOpacity>

        </SafeAreaView>
        </ImageBackground>
      </SafeAreaView>
    
      
            
  );
  
};
export default userHomeScreen;





const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',

    
  },

  bgImage:{
    flex:1,
    resizeMode: 'cover',
  },

  navBar:{
    flex: 0.13,
    flexDirection: 'row',
    flexWrap: 'wrap',

    alignItems: 'center',
    alignContent: 'right',
    
    backgroundColor: '#FD5E5E',
    width: '100%',
    height: '8%',

    marginBottom: 10
  
  },
  navText: {
    color: '#ffffff',
    textAlign: 'left',

    fontSize: 34,
    fontFamily: 'Port Lligat Sans',
  },

  hamburgerMenu:{
    position: 'absolute',
    right: 16,
    width: 45, 
    height: 45, 
    
  },

  callAmbulance: {
    flex: 0.4,
    height: '40%'
  },
  callAmbulancebutton:{
    borderRadius: '50%',
    backgroundColor:'#FD5E5E',

    padding:10,
    marginBottom: 10,
    alignItems: 'center',
    alignContent: 'center'

  },

  actionButtons:{
    flex: 0.47,
    flexDirection: 'row',
    flexWrap: 'wrap',

    height:'50%',

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    
  },
  Image: {
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute'
  },

  button: {
    width: `${140 / MAX_COLUMNS}%`,
    height: 123,
    aspectRatio: 1,
    
    margin: 3,
    padding: 2,
    borderRadius: 10,

    backgroundColor: '#fc5e5e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    padding: 5,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Poppins'
  },
});


