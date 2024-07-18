/**
 * To Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

// Define your parameter list type
type RootStackParamList = {
  Root: undefined;
  TabOne: undefined;
  TabTwo: undefined;
  NotFound: undefined;
};

// Define your linking options
const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: 'one',
          TabTwo: 'two',
        },
      },
      NotFound: '*',
    },
  },
};

export default linking;
