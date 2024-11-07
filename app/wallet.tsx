// online-gaming/app/GameCenter.tsx

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  TextInput,
  FlatList,
} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ScrollView } from "react-native-gesture-handler";
import {
  headerMenuItems,
  footerMenuItems,
  walletMenuItems,
} from "../constants/menus";

const Wallet = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [depositAmount, setDepositAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [withdrawalPaymentMethod, setWithdrawalPaymentMethod] = useState("");
  const [totalUserBalance, setTotalUserBalance] = useState(0);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleDepositAmountChange = () => {
    // setDepositAmount(text);
    const outcome = parseInt(depositAmount) + totalUserBalance;
    setTotalUserBalance(outcome);

    setDepositAmount("");
    setPaymentMethod("");
    console.log(outcome)
    // console.log(depositAmount)

  };

  const handleAddChip = (amount) => {
    setDepositAmount(amount);
  };

  const handleDeposit = () => {
    console.log("Deposit amount:", depositAmount);
    setDepositAmount("");
    setPaymentMethod("");
  };

  const handleWithdrawalAmountChange = (text) => {
    setWithdrawalAmount(text);
  };

  const handlePaymentMethodChange = (payment) => {
    setPaymentMethod(payment);
  };

  const handleWithdrawalPaymentMethod = (method) => {
    setWithdrawalPaymentMethod(method);
  };

  const handleWithdrawal = () => {
    console.log("Withdrawal amount:", withdrawalAmount);

    setWithdrawalAmount("");
  }
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <Header
          logoSource={require("../assets/images/logo-casino-gaming.png")}
          menuItems={headerMenuItems}
        />
        <View style={styles.walletContainer}>
          <View style={styles.leftSection}>
            <FlatList
              data={walletMenuItems}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleItemClick(item)}>
                  <Text style={styles.listItem}>{item.title}</Text>
                </TouchableOpacity>
              )}
              ListHeaderComponent={() => (
                <View style={styles.leftHeaderContainer}>
                  <Text style={styles.header}>My Account</Text>
                </View>
              )}
            />
          </View>
          <View style={styles.rightSection}>
            {selectedItem ? (
              <View>
                {selectedItem.title === "Manage Funds" && (
                  <View>
                    <Text style={styles.sectionTitle}>
                      {selectedItem.title}
                    </Text>
                    <View style={{ flexDirection: "row", flex: 1 }}>
                      <View
                        style={{
                          flex: 1,
                          backgroundColor: "gray",
                          padding: 20,
                          marginRight: 10,
                        }}
                      >
                        <Text style={styles.detailedContent}>Deposit</Text>
                        <View style={{ marginBottom: 10 }}>
                          <Text style={styles.inputHeader}>
                            Enter amount you want to deposit
                          </Text>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              marginBottom: 10,
                            }}
                          >
                            <TouchableOpacity
                              style={{
                                marginRight: 10,
                                padding: 10,
                                backgroundColor: "lightgray",
                              }}
                              onPress={() => handleAddChip("10")}
                            >
                              <Text style={{ fontSize: 16 }}>+$10</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={{
                                marginRight: 10,
                                padding: 10,
                                backgroundColor: "lightgray",
                              }}
                              onPress={() => handleAddChip("25")}
                            >
                              <Text style={{ fontSize: 16 }}>+$25</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={{
                                marginRight: 10,
                                padding: 10,
                                backgroundColor: "lightgray",
                              }}
                              onPress={() => handleAddChip("50")}
                            >
                              <Text style={{ fontSize: 16 }}>+$50</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={{
                                padding: 10,
                                backgroundColor: "lightgray",
                              }}
                              onPress={() => handleAddChip("100")}
                            >
                              <Text style={{ fontSize: 16 }}>+$100</Text>
                            </TouchableOpacity>
                          </View>
                          <TextInput
                            style={{
                              height: 40,
                              borderColor: "gray",
                              borderWidth: 1,
                              padding: 5,
                              backgroundColor: "white",
                            }}
                            placeholder="Enter amount"
                            value={depositAmount}
                            onChangeText={setDepositAmount}
                          />
                        </View>
                        <View style={{ marginBottom: 10 }}>
                          <Text style={styles.inputHeader}>
                            Choose your payment method
                          </Text>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <TouchableOpacity
                              style={{
                                marginRight: 10,
                                padding: 10,
                                backgroundColor:
                                  paymentMethod === "Credit Card"
                                    ? "white"
                                    : "lightgray",
                              }}
                              onPress={() =>
                                handlePaymentMethodChange("Credit Card")
                              }
                            >
                              <Text style={{ fontSize: 16 }}>Credit Card</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={{
                                padding: 10,
                                backgroundColor:
                                  paymentMethod === "Bank Transfer"
                                    ? "white"
                                    : "lightgray",
                              }}
                              onPress={() =>
                                handlePaymentMethodChange("Bank Transfer")
                              }
                            >
                              <Text style={{ fontSize: 16 }}>
                                Bank Transfer
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <TouchableOpacity
                          style={{
                            backgroundColor: paymentMethod ? "blue" : "gray",
                            padding: 10,
                            alignItems: "center",
                            borderRadius: 5,
                            borderColor: "black",
                            borderWidth: 1,
                          }}
                          onPress={handleDepositAmountChange}
                          disabled={!depositAmount && !paymentMethod}
                        >
                          <Text style={{ color: "white", fontSize: 16 }}>
                            Pay
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          backgroundColor: "gray",
                          padding: 20,
                        }}
                      >
                        <Text style={styles.detailedContent}>Withdraw</Text>
                        <View style={{ marginBottom: 20 }}>
                          <Text style={styles.inputHeader}>Payment Method</Text>
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <TouchableOpacity
                              style={{
                                padding: 2,
                                backgroundColor: withdrawalPaymentMethod === "Visa" ? "black" : "white",
                              }}
                              onPress={() =>
                                handleWithdrawalPaymentMethod("Visa")
                              }
                            >
                              <Image
                                source={require("../assets/images/visa-logo.jpg")}
                                style={{ width: 50, height: 40 }}
                              />
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={{
                                padding: 2,
                                backgroundColor: withdrawalPaymentMethod === "apple-pay" ? "black" : "white",
                              }}
                              onPress={() =>
                                handleWithdrawalPaymentMethod("apple-pay")
                              }
                            >
                              <Image
                                source={require("../assets/images/apple-pay-logo.jpg")}
                                style={{ width: 50, height: 40 }}
                              />
                            </TouchableOpacity>
                            <TouchableOpacity
                               style={{
                                padding: 2,
                                backgroundColor: withdrawalPaymentMethod === "google-wallet" ? "black" : "white",
                              }}
                              onPress={() =>
                                handleWithdrawalPaymentMethod("google-wallet")
                              }
                            >
                              <Image
                                source={require("../assets/images/google-wallet-logo.png")}
                                style={{ width: 50, height: 40 }}
                              />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                  padding: 2,
                                  backgroundColor: withdrawalPaymentMethod === "mastercard" ? "black" : "white",
                                }}
                              onPress={() =>
                                handleWithdrawalPaymentMethod("mastercard")
                              }
                            >
                              <Image
                                source={require("../assets/images/mastercard-logo.jpg")}
                                style={{ width: 50, height: 40 }}
                              />
                            </TouchableOpacity>
                            <TouchableOpacity
                             style={{
                              padding: 2,
                              backgroundColor: withdrawalPaymentMethod === "bitcoin" ? "black" : "white",
                            }}
                              onPress={() =>
                                handleWithdrawalPaymentMethod("bitcoin")
                              }
                            >
                              <Image
                                source={require("../assets/images/Bitcoin-Logo.png")}
                                style={{ width: 50, height: 40 }}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                        <TextInput
                          style={{
                            height: 40,
                            borderColor: "gray",
                            borderWidth: 1,
                            padding: 5,
                            backgroundColor: "white",
                          }}
                          placeholder="Enter amount to withdraw"
                          value={withdrawalAmount}
                          onChangeText={setWithdrawalAmount}
                        />
                        <View style={{ marginBottom: 20 }}>
                          <Text style={styles.inputHeader}>
                            Total Amount in Account:
                          </Text>
                          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                            ${totalUserBalance}
                          </Text>
                        </View>
                        <TouchableOpacity
                          style={{
                            backgroundColor: "green",
                            padding: 10,
                            alignItems: "center",
                          }}
                          onPress={() => handleWithdrawal(withdrawalAmount)}
                        >
                          <Text style={{ color: "white", fontSize: 16 }}>
                            Withdraw
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
                {selectedItem.title === "My Transactions" && (
                  <View>
                    <Text style={styles.sectionTitle}>
                      {selectedItem.title}
                    </Text>
                    <Text style={styles.detailedContent}>
                      This is the detailed content for {selectedItem.title}
                    </Text>
                  </View>
                )}

                {selectedItem.title === "My rewards" && (
                  <View>
                    <Text style={styles.sectionTitle}>
                      {selectedItem.title}
                    </Text>
                    <Text style={styles.detailedContent}>
                      This is the detailed content for {selectedItem.title}
                    </Text>
                  </View>
                )}

                {selectedItem.title === "Manage Profile" && (
                  <View>
                    <Text style={styles.sectionTitle}>
                      {selectedItem.title}
                    </Text>
                    <Text style={styles.detailedContent}>
                      This is the detailed content for {selectedItem.title}
                    </Text>
                  </View>
                )}
                {selectedItem.title === "Logout" && (
                  <Text style={styles.sectionTitle}>
                    Are you sure you want to logout?
                  </Text>
                )}

               
              </View>
            ) : (
              <Text style={styles.sectionTitle}>
                Please select an item from the left section.
              </Text>
            )}
          </View>
        </View>
        {/* <Footer menuItems={footerMenuItems} /> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  detailedContent: {
    fontSize: 16,
    color: "white",
  },
  inputHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  leftSection: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: "gray",
    padding: 10,
  },
  rightSection: {
    flex: 2,
    padding: 10,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    color: "white",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },

  walletContainer: {
    backgroundColor: "black",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    height: 400,
    marginTop: 50,
    flexDirection: "row",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  leftHeaderContainer: {
    backgroundColor: "black",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});

export default Wallet;
