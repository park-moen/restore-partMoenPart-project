import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Tag = ({ tagName }) => {
  return (
    <View style={styles.tagContainer}>
      <Text style={styles.tagText}>{`#${tagName}`}</Text>
    </View>
  );
};

/**
 *
 * @param {tags} 태그 텍스트 배열
 */
const MakeTags = ({ tags }) => {
  const array = [];
  for (let i = 0; i < tags.length; i++) {
    array.push(<Tag tagName={tags[i]} key={i} />);
  }

  return array;
};

/**
 *
 * @component TagList
 * @param {Tags} 태그 텍스트 배열
 * @param {containerStyle} 태그 컨테이너 스타일
 */
export default function TagList({ tags, containerStyle }) {
  return (
    <View style={{ flexDirection: 'row', ...containerStyle }}>
      <MakeTags tags={tags} />
    </View>
  );
}

const styles = StyleSheet.create({
  tagContainer: {
    backgroundColor: '#0095FF',
    borderRadius: 6,
    padding: 2,
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 5,
  },
  tagText: {
    color: 'white',
    fontWeight: '600',
  },
});
