import { Image, ImageSourcePropType, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '~/constants/images';
import icons from '../../constants/icons';

type settingsItemProp = {
  icon: ImageSourcePropType,
  title: string,
  onPress: () => void
}

// custom comp for each component
const SettingsItem = ({onPress , icon , title }:settingsItemProp) => {
  return (
    <TouchableOpacity
    activeOpacity={0.6}
    onPress={onPress}
    className=' flex  bg-green-500 flex-row items-center justify-between py-3'
    >
        <View className=" flex-row  items-center gap-2">
              <Image source={icon} resizeMode="contain" className="  h-7 w-7 " />
              <Text>{title}</Text>
            </View>

            <View>
              <Image source={icons.rightArrow} resizeMode="contain" className="  h-7 w-7 " />
            </View>
    </TouchableOpacity>
  )
}

const Profile = () => {
  return (
    <SafeAreaView className='flex-1 pl-4 pr-4 p-4 bg-white '>
      <ScrollView
      // (property) showsVerticalScrollIndicator?: boolean | undefined
      // here property shows that it's a prop 
      // 2. It's optional value by ? and accept two value either boolean or undefined
      // 2nd it is written like showsVerticalScrollIndicator?: boolean
      // but in jsx we don't use :(colon we use it in js and 
      // ts telling : cause  js and ts both are freinds )
      //  instead we use = that's why
      showsVerticalScrollIndicator={false}
      >

{/*Container for header */}
<View className=' flex-row justify-between items-center  mt-5 mb-5 
 
'>
<Text className=' text-lg'>Profile</Text>  
<Image 
className=' size-7'
source={icons.bell} />
</View>


        {/* Container for Avatar and text */}
        <View className="  flex-col items-center justify-center 
        gap-3 mb-4  ">
          <Image source={images.avatar} className="  size-32 rounded-full" />
          <Text className=' text-xl  font-rubik-medium'>John Doe</Text>
        </View>



        {/*  for horizontal line */}
        <View className=" mb-5  border-b  border-primary-200" />


{/* for all the container */}
         <View className=' '>
          {/* container for payments and booking */}
          <View  className=' mb-4  '>
          {/* container for booking */}
          <SettingsItem icon={icons.calendar} title="My Booking"  onPress={()=>console.log("Hello")}/>
          <SettingsItem icon={icons.wallet} title="Payments"  onPress={()=>console.log("Hello")}/>
        </View>



{/* Horizontal Line */}
        <View className=" mb-3  border-b  border-primary-200" />


{/* container for profile to invite freinds */}
<View  className=' mb-3'>
<SettingsItem icon={icons.person} title="Profile" onPress={()=>console.log("Hello")}/>
<SettingsItem icon={icons.bell} title="Notification" onPress={()=>console.log("Hello")}/>
<SettingsItem icon={icons.shield} title="Security" onPress={()=>console.log("Hello")}/>

</View>


        </View>

{/* for logout */}

 <TouchableOpacity 
 activeOpacity={0.7}
 onPress={ ()=>console.log("Logout") }
 className=" flex-row items-center gap-2 ">
 <Image source={icons.logout} resizeMode="contain" className="  h-7 w-7 " />
<Text className=' font-semibold text-xl  text-danger'>Logout</Text>
 </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;


