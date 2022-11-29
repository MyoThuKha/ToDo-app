import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from "react-native";
import { StatusBar } from "react-native";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "../datas/userReducer";

// return "#f2eee9";

const Intro = ({ navigation }: { navigation: any }) => {
  const username: string = useSelector((state: any) => state.user.firstname);
  // const foreground: string = useSelector((state: any) => state.user.foreground);
  // const background: string = useSelector((state: any) => state.user.background);
  const foreground = "black";
  const background = "white";

  const dispatch = useDispatch();

  useEffect(() => {
    if (username !== "") {
      navigation.navigate("home");
    }
  }, []);

  const firstname = useRef("");
  const secondname = useRef("");

  const [error, setError] = useState(false);

  const [icon, setIcon] = useState(1);
  const changeIcon = () => {
    if (icon === 5) setIcon(1);
    else setIcon(icon + 1);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ ...styles.container, backgroundColor: background }}>
        {/* image */}
        <View style={styles.imageBox}>
          <TouchableOpacity onPress={() => changeIcon()}>
            <Image
              source={require(`../assets/get_start.png`)}
              style={{
                width: 300,
                height: 300,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          {error && <Text style={{ fontSize: 18 }}>Please add your name</Text>}
          {!error && (
            <Text style={{ fontSize: 28, fontFamily: "display" }}>
              Let's get started
            </Text>
          )}
        </View>

        {/* form */}
        <View>
          <View style={{ ...styles.form, borderColor: foreground }}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={{ fontSize: 16, color: foreground }}
              placeholder="Abc"
              onChangeText={(value) => {
                firstname.current = value;
              }}
            />
          </View>
          <View style={{ ...styles.form, borderColor: foreground }}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={{ fontSize: 16, color: foreground }}
              placeholder="Abc"
              onChangeText={(value) => {
                secondname.current = value;
              }}
            />
          </View>
        </View>

        {/* next */}
        <TouchableOpacity
          onPress={() => {
            if (firstname.current === "" || secondname.current === "") {
              setError(true);
            } else {
              setError(false);
              dispatch(
                updateName({
                  first: firstname.current,
                  second: secondname.current,
                })
              );
              navigation.navigate("home");
            }
          }}
        >
          <View style={{ backgroundColor: foreground, ...styles.btn }}>
            <Text style={{ color: background }}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    justifyContent: "space-between",
  },
  imageBox: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "#a3a3a1",
    fontSize: 18,
    marginVertical: 8,
  },
  form: {
    marginHorizontal: 24,
    paddingVertical: 8,
    borderBottomWidth: 1,
  },

  btn: {
    marginHorizontal: 24,
    alignItems: "center",
    paddingVertical: 18,
    borderRadius: 18,
    marginBottom: 30,
  },
});

export default Intro;
