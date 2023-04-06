import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PrivacyPolicy() {
  const navigation = useNavigation()
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Privacy Policy</Text>
      <Text style={styles.description}>
        At our app, we take your privacy and security very seriously. We want you to feel confident and comfortable using our app, knowing that your personal information is protected and secure. This privacy policy explains how we collect, use, and protect your information when you use our app.
      </Text>
      <Text style={styles.subtitle}>Information We Collect</Text>
      <Text style={styles.description}>
        We collect certain information when you use our app, including your name, email address, and other personal details that you provide to us. We also collect information about your device and usage of the app, such as your IP address, location, and app usage statistics. We may use this information to improve our app and provide a better user experience.
      </Text>
      <Text style={styles.subtitle}>How We Use Your Information</Text>
      <Text style={styles.description}>
        We use your information to provide and improve our app, to communicate with you about your account and the app's features, and to provide personalized recommendations and support related to your diabetes self-care management. We may also use your information for research and analytics purposes, to understand how users interact with our app and to improve our services.
      </Text>
      <Text style={styles.subtitle}>Sharing Your Information</Text>
      <Text style={styles.description}>
        We will not share your personal information with any third parties without your consent, except as required by law or to protect our legal rights. We may share non-personal information, such as app usage statistics, with third parties for research and analytics purposes.
      </Text>
      <Text style={styles.subtitle}>Security and Storage of Your Information</Text>
      <Text style={styles.description}>
        We use industry-standard security measures to protect your personal information, including encryption and secure storage practices. However, no method of transmission or storage of data is completely secure, and we cannot guarantee the security of your information. By using our app, you acknowledge and accept these risks.
      </Text>
      <Text style={styles.subtitle}>Changes to this Privacy Policy</Text>
      <Text style={styles.description}>
        We may update this privacy policy from time to time to reflect changes in our practices or the law. We will notify you of any material changes to the policy and obtain your consent to any material changes as required by law.
      </Text>
      <Text style={styles.subtitle}>Contact Us</Text>
      <Text style={styles.description}>
        If you have any questions or concerns about our privacy policy or 
        how we handle your information, please contact us at team.xcodedev@gmail.com.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
  },
});
