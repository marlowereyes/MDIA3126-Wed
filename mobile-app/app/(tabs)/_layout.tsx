import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
       // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,//
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Homer',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cheese"
        options={{
          title: 'Cheese',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'woman-sharp' : 'woman'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sandwich"
        options={{
          title: 'Sandwich',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'woman-sharp' : 'woman'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
