import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NavigatorScreenParams, CompositeScreenProps } from '@react-navigation/native';

export type RootStackParamList = {
    MainTab: NavigatorScreenParams<MainTabParamList>;
    DetailRecipe: undefined;
    OnBoarding: undefined;
    Login: undefined;
    Register: undefined;
  };

export type RootStackScreenProps<T extends keyof RootStackParamList> = 
    NativeStackScreenProps<RootStackParamList, T>;

export type MainTabParamList = {
    Home: undefined;
    Search: undefined;
    Scanner: undefined;
    Recipes: undefined;
    Profile: undefined;    
}

export type MainTabScreenProps<T extends keyof MainTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<MainTabParamList, T>,
        RootStackScreenProps<keyof RootStackParamList>
    >

export type HomeStackParamList = {
  Home: undefined;
}
export type HomeStackScreenProps<T extends keyof HomeStackParamList> =  
  CompositeScreenProps<
    NativeStackScreenProps<HomeStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }

