import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { Link, router } from "expo-router";
import Header from "../components/Header";
import TopBanner from "@/components/TopBanner";
import Carousel from "@/components/Carousel";
import LowerBanner from "@/components/LowerBanner";
import Footer from "@/components/Footer";
import { useState } from "react";
import FullScreenModal from "@/components/FullScreenModal";
import OnboardingModal from "@/components/OnBoardingModal";
import LoginModal from "@/components/LoginModal";

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [balance, setBalance] = useState(0);
  const [totalWinnings, setTotalWinnings] = useState(0);
  const menuItems = [
    { label: "Home", route: "/" },
    { label: "Game Center", route: "/game-center" },
    { label: "Online Casino", route: "/online-casino" },
    { label: "Sportsbook", route: "/sportbook" },
    { label: "My Wallet", route: "/wallet" },
  ];

  const leftSection = {
    title: "Ready To Play?",
    subtitle:
      "Elevate Your Gaming Experience. Join the Winning Streak. Play Now!",
    backgroundImage: "../assets/images/purple-background.png",
    buttonText: "Play Now",
    hasButton: true,
    onPress: () => console.log("Left section pressed"),
  };
  const centerSection = {
    title: "",
    subtitle: "",
    backgroundImage: "../assets/images/sportsbook-icon.png",
    buttonText: "",
    hasButton: false,
    onPress: () => console.log("centerSection section pressed"),
  };

  const accountSection = isLoggedIn
    ? {
        title: "Your Wallet",
        subtitle: "",
        balance: balance,
        totalWinnings: totalWinnings,
        backgroundImage: "../assets/images/login-wallet.png",
        buttonText: "Open Account",
        hasButton: false,
        onPress: () => handleAccountSectionPress(),
      }
    : {
        title: "",
        subtitle: "",
        backgroundImage: "../assets/images/create-account.png",
        buttonText: "Open Account",
        hasButton: false,
        onPress: () => handleAccountSectionPress(),
      };

  const handleAccountSectionPress = () => {
    if (!isLoggedIn) {
      setIsRegisterModalVisible(true);
    } else {
      router.push("/wallet");
      // handle logged in user press
    }
  };

  const handleAccountCreation = () => {
    setIsRegisterModalVisible(false);
    setIsLoggedIn(true);
  };

  const handleLogin = () => {
    console.log("Login pressed in index");
    setIsLoginModalVisible(false);
    setIsRegisterModalVisible(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleGamePress = ({ id, title }) => {
    router.navigate({
      pathname: "/game/",
      params: { id: id, title: title },
    });
  };
  const carouselData = [
    {
      id: 1,
      image: "../assets/images/scratch-cards.png",
      title: "Scratch Cards",
    },
    {
      id: 2,
      image: "../assets/images/roulette.png",
      title: "Roulette",
    },
    {
      id: 3,
      image: "../assets/images/megaways-slots.png",
      title: "Mega Slots",
   
    },
    {
      id: 4,
      image: "../assets/images/keno.png",
      title: "Keno",
    },
    {
      id: 5,
      image: "../assets/images/baccarat.png",
      title: "Baccarat",
    },
    {
      id: 6,
      image: "../assets/images/progressive-jackpot-slots.png",
      title: "Jackpot",
    },
    {
      id: 7,
      image: "../assets/images/video-slots.png",
      title: "Video Slots",
    },
    {
      id: 8,
      image: "../assets/images/classic-slots.png",
      title: "Classic Slots",
    },
  ];

  const footerMenuItems = [
    { label: "Home", route: "/home" },
    { label: "Game Center", route: "/game-center" },
    { label: "Online Casino", route: "/online-casino" },
    { label: "Sportsbook", route: "/sportbook" },
    { label: "My Wallet", route: "/wallet" },
  ];

  return (
    <>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <ScrollView>
          <Header
            logoSource={require("../assets/images/logo-casino-gaming.png")}
            menuItems={menuItems}
          />
          <View
            style={{
              alignItems: "center",
            }}
          >
            <TopBanner
              leftSection={leftSection}
              centerSection={centerSection}
              accountSection={accountSection}
              isLoggedIn={isLoggedIn}
            />
            <Carousel data={carouselData} handleGamePress={handleGamePress} />

            <Link href="/about">About</Link>
            <Text>Edit app/index.tsx to edit this screen.</Text>
          </View>
          {isRegisterModalVisible && (
            <OnboardingModal
              visible={isRegisterModalVisible}
              onClose={() => setIsRegisterModalVisible(false)}
              onLogin={() => setIsLoginModalVisible(true)}
              onRegister={() => handleAccountCreation()}
            />
          )}

          {isLoginModalVisible && (
            <LoginModal
              visible={isRegisterModalVisible}
              onClose={() => setIsLoginModalVisible(false)}
              handleLogin={handleLogin}
            />
          )}
          <Footer menuItems={footerMenuItems} />
        </ScrollView>
      </ImageBackground>
    </>
  );
}
