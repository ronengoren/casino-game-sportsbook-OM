import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';

interface HeaderProps {
  backgroundColor?: string;
  logoSource: any;
  menuItems: {
    label: string;
    route: string;
  }[];
}

const Header: React.FC<HeaderProps> = ({
  backgroundColor = 'black',
  logoSource,
  menuItems,
}) => {
  const router = useRouter();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 16,
        backgroundColor,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      }}
    >
      <TouchableOpacity onPress={() => router.push('/')}>
        <Image source={logoSource} style={{ width: 100, height: 30 }} />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {menuItems.map((menuItem, index) => (
          <Link href={menuItem.route} key={index} style={{ marginRight: 16 }}>
            <Text style={{ color: '#fff' }}>{menuItem.label}</Text>
          </Link>
        ))}
      </View>
    </View>
  );
};

export default Header;
