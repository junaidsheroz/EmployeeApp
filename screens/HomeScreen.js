import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView style={tw`bg-white pt-5`}>
      <Text style={tw`text-blue-600`}>
        <View style={tw`flex-row pb-3 items-center mx-4 space-x-2`}>
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
          />

          <View style={tw`flex-1`}>
            <Text style={tw`font-bold text-gray-400 text-xs`}>
              Deliver Now!
            </Text>
            <Text style={tw`text-xl font-bold`}>
              Current Location
              <ChevronDownIcon color="green" size={20} />
            </Text>
          </View>
          <UserIcon size={35} color="green" />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
