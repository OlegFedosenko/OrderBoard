import React from 'react';
import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

type Props = {
  title: string;
};

const Title: FC<Props> = ({ title }) => <Text style={styles.title}>{title}</Text>;

const styles = StyleSheet.create({
  title: {
    fontSize: fonts.largeText,
    color: colors.black,
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default Title;
