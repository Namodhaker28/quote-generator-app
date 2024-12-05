import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: 'https://your-profile-image-link.com'}} style={styles.profileImage} />
      <Text style={styles.name}>Namo Dhaker</Text>
      <Text style={styles.location}>Jaipur, Rajasthan</Text>
      <Text style={styles.contact}>namodhaker76@gmail.com | +91 9667665652</Text>

      <View style={styles.links}>
        <TouchableOpacity onPress={() => Linking.openURL('https://your-portfolio-link.com')}>
          <Text style={styles.link}>Portfolio</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/your-linkedin-profile')}>
          <Text style={styles.link}>LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/your-github-profile')}>
          <Text style={styles.link}>GitHub</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Summary</Text>
      <Text style={styles.text}>
        Experienced Software Engineer with 3+ years of experience in developing and maintaining high-quality web
        applications, leading to a 30% improvement in performance.
      </Text>

      <Text style={styles.sectionTitle}>Education</Text>
      <Text style={styles.text}>Bachelor in Technology, Indian Institute of Information Technology, Chennai - 03/2023</Text>
      <Text style={styles.text}>Intermediate, Jawahar Navodaya Vidyalaya, Bhilwara, Rajasthan - 03/2018</Text>

      <Text style={styles.sectionTitle}>Skills</Text>
      <Text style={styles.text}>Languages: Javascript, Typescript, Python, C++</Text>
      <Text style={styles.text}>Backend/DevOps: NodeJS, ExpressJS, MongoDB, DevOps, Docker, Git, CI/CD, Web3/Blockchain, Socket.io</Text>
      <Text style={styles.text}>Frontend: NextJs, ReactJS, Redux, CSS/SCSS, Tailwind CSS, SEO, Axios, Material UI, React Query</Text>
      <Text style={styles.text}>Soft Skills: Effective Communication, Team Collaboration, Time Management, Adaptability, Work Ethic</Text>

      <Text style={styles.sectionTitle}>Experience</Text>
      <Text style={styles.text}>
        <Text style={styles.jobTitle}>Full Stack Developer, ResourcePlan, Jaipur, Rajasthan - 02/2024 - Present</Text>
        {'\n'}• Created a video editor powered by AI for straightforward click-and-command editing.
        {'\n'}• Enhanced workflow efficiency by integrating APIs from OpenAI, Deepgram, and ElevenLabs, cutting manual labor by 50%.
        {'\n'}• Leveraged Next.js alongside Material UI and Tailwind CSS for frontend development, boosting UI/UX by 40%.
        {'\n'}• Used Express.js and MongoDB for backend tasks, achieving a 30% enhancement in data management efficiency.
        {'\n'}• Incorporated Remotion.dev to establish a React-based video editing platform, elevating video processing speed by 25%.
        {'\n'}• Handled complex state with Redux and fine-tuned API integration using React Query, leading to a 20% increase in performance.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.jobTitle}>Front-end Developer, ZeltaLabs, Jaipur, Rajasthan - 10/2022 - 02/2024</Text>
        {'\n'}• Designed an admin panel for the company using Next.js, enriched with a robust blog section, a feature-packed trading platform, and an efficient user management segment.
        {'\n'}• Facilitated content management, trading operations, and user administration, resulting in a 30% improvement in operational efficiency.
        {'\n'}• Rapidly deploys through Docker, GitLab CI/CD, and virtual machine orchestration, achieving a 25% reduction in deployment times and improving scalability management.
        {'\n'}• Led the development of untrade.io, using Next.js to architect a high-performance web application with server-side rendering and SEO optimization, increasing web traffic by 40% and customer interactions by 35%.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.jobTitle}>Front-end Web Developer Intern, Kameleon Technology, Chennai, Tamilnadu - 05/2022 - 02/2022</Text>
        {'\n'}• Created and maintained the company website using ReactJS and CSS, resulting in a 2x increase in company popularity.
        {'\n'}• Prepared an Admin panel and payment form for expo registration, streamlining the registration process and improving user experience by 50%.
        {'\n'}• Coordinated with a team of 4 members to effectively manage and implement the Admin panel, enhancing team productivity by 20%.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fdfdfd',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    color: '#34495e',
    marginBottom: 5,
  },
  location: {
    fontSize: 18,
    textAlign: 'center',
    color: '#7f8c8d',
    marginBottom: 5,
  },
  contact: {
    fontSize: 16,
    textAlign: 'center',
    color: '#95a5a6',
    marginBottom: 20,
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  link: {
    color: '#2980b9',
    textDecorationLine: 'underline',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2c3e50',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    color: '#34495e',
    marginVertical: 5,
    lineHeight: 24,
  },
  jobTitle: {
    fontWeight: '600',
    color: '#16a085',
  },
});

export default ProfileScreen;