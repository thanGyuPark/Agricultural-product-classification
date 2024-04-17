import { Image, StyleSheet, Text, View } from "react-native";

const ResultProduct = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        style={styles.informationImage}
        source={require("../assets/images/cabbage.png")}
        resizeMode="contain"
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={styles.informationLabel}>진단결과: </Text>
        <Text style={{ ...styles.informationLabel, ...styles.gradeText }}>
          특
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  informationLabel: {
    color: "#ACB7C3",
    fontSize: 20,
    fontWeight: "400",
  },
  informationImage: {
    width: 135,
    height: 135,
  },
  gradeText: {
    color: "#42AF4D",
    fontWeight: "bold",
  },
});

export default ResultProduct;
