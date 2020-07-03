import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Divider, Layout, Text, Button } from '@ui-kitten/components';
import { AccInfoScreenProps } from '../../navigation/home.navigator';
import { Toolbar } from '../../components/toolbar.component';
import { SafeAreaLayout, SafeAreaLayoutElement, SaveAreaInset } from '../../components/safe-area-layout.component';

import { ProfileAvatar } from './extra/profile-avatar.component';
import { ProfileSetting } from './extra/profile-setting.component';
import { Profile } from './extra/data';

const profile: Profile = Profile.jenniferGreen();

export const AccInfoScreen = (props: AccInfoScreenProps): SafeAreaLayoutElement => (
  <SafeAreaLayout
    style={styles.safeArea}
    insets={SaveAreaInset.TOP}>
    <Toolbar
      title='React Navigation Ex 🐱'
      onBackPress={props.navigation.goBack}
    />
    <Divider/>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <ProfileAvatar
        style={styles.photo}
        source={profile.photo}
        /* editButton={renderPhotoButton}*/
      />
      <Text
        style={[styles.description, styles.section]}
        appearance='hint'>
        {profile.description}
      </Text>
      <ProfileSetting
        style={[styles.setting, styles.section]}
        hint='First Name'
        value={profile.firstName}
      />
      <ProfileSetting
        style={styles.setting}
        hint='Last Name'
        value={profile.lastName}
      />
      <ProfileSetting
        style={styles.setting}
        hint='Gender'
        value={profile.gender}
      />
      <ProfileSetting
        style={styles.setting}
        hint='Age'
        value={`${profile.age}`}
      />
      <ProfileSetting
        style={styles.setting}
        hint='Weight'
        value={`${profile.weight} kg`}
      />
      <ProfileSetting
        style={styles.setting}
        hint='Height'
        value={`${profile.height} cm`}
      />
      <ProfileSetting
        style={[styles.setting, styles.section]}
        hint='Email'
        value={profile.email}
      />
      <ProfileSetting
        style={styles.setting}
        hint='Phone Number'
        value={profile.phoneNumber}
      />
      <Button
        style={styles.doneButton}
        /*onPress={onDoneButtonPress}*/
        >
        DONE
      </Button>
    </ScrollView>
  </SafeAreaLayout>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    // backgroundColor: 'background-basic-color-2',
  },
  contentContainer: {
    paddingVertical: 24,
    // backgroundColor: 'background-basic-color-2',
  },
  photo: {
    alignSelf: 'center',
    width: 320,
    height: 320,
    borderRadius: 16,
  },
  photoButton: {
    right: 16,
    top: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  description: {
    padding: 24,
    // backgroundColor: 'background-basic-color-1',
  },
  setting: {
    padding: 16,
  },
  section: {
    marginTop: 24,
  },
  doneButton: {
    marginHorizontal: 24,
    marginTop: 24,
  },
});
