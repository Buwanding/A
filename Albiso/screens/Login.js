import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { View } from "react-native";
import React from 'react';
import { Button, Text, TextInput, HelperText } from "react-native-paper";
import Fetch from './Fetch';
import { Formik } from "formik";
import * as Yup from "yup";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'violet', 
  },
};
const Login = ({ navigation }) => {
  const [showPass, setShowPass] = React.useState(true);

  const showToast = (message = "Something wen't wrong") => {
    ToastAndroid.show(message, 3000);
  };
  
  const handleLogin = async (values) => {
    try { 
      const url = "http://192.168.1.5:8000/api/v1/login";
      const result = await Fetch.postData(url, values);

      if (result.message != null) {
        showToast(result?.message);
      } else {
        navigation.navigate("Main");
      }
    } catch (e) {
      console.debug(e.toString());
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
  });

  
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values) => {
        await handleLogin(values);
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        errors,
        touched,
        setTouched,
      }) => {
        return(
            <PaperProvider theme={theme}>
              <View>
              <Button
                      disabled={isSubmitting}
                      onPress={() => navigation.navigate("LandingPage")}
                      icon="arrow-left"
                      mode="elevated"
                      style={{ marginTop: 10, alignContent:'flex-start',alignItems:"flex-start" }}
                  >
                      Back
                  </Button>
              </View>
              <View style={{ flex: 1,justifyContent: "center" }}>
                  <Text 
                      variant="displayMedium" 
                      style={{textAlign:'center' , 
                      marginBottom: 10,
                      fontWeight:'bold'}}>
                      Login</Text>
                  <TextInput
                      mode="outlined"
                      placeholder="Email"
                      label="Email"
                      defaultValue={values.email}
                      value={values.email}
                      keyboardType="email-address"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      error={errors.email && touched.email}
                      onFocus={() => setTouched({ email: true }, false)}
                      style={{ marginTop: 10}}
                  />
                      {errors.email && touched.email && (
                  <HelperText 
                      type="error" visible={errors.email}>
                      {errors.email}
                  </HelperText>
                  )}
                  <TextInput
                      mode="outlined"
                      placeholder="Password"
                      label="Password"
                      secureTextEntry={showPass}
                      
                      right={
                  <TextInput.Icon
                          icon={showPass ? "eye-off" : "eye"}
                          onPress={() => setShowPass(!showPass)}
                        />
                      }
                      style={{ marginTop: 10 }}
                      value={values.password}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      error={errors.password && touched.password}
                      onFocus={() => setTouched({ password: true }, false)}
                    />
                      {errors.password && touched.password && (
                  <HelperText 
                      type="error" visible={errors.password}>
                      {errors.password}
                  </HelperText>
                      )}
                  <Button 
                      loading={isSubmitting}
                      disabled={isSubmitting}
                      onPress={handleSubmit}
                      icon="login" 
                      mode="contained" 
                      style={{ marginTop: 10,borderBlockColor: '#00008b' }}>
                      Login
                  </Button>
                  <Button
                      disabled={isSubmitting}
                      onPress={() => navigation.navigate("Register")}
                      icon="account-plus"
                      mode="contained"
                      style={{ marginTop: 10 }}
                  >
                      Register
                  </Button>
                  <Text
                  disabled={isSubmitting}
                  onPress={() => navigation.navigate("AccountRecovery")}
                  style={{ marginTop: 10 }}
              >
              Forgot Password?
              </Text>
                  
            </View>
            </PaperProvider>
        );
      }}
    </Formik>
  );
}


export default Login

