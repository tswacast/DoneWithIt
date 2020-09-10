import React, { useRef } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

export interface ImageInputListProps {
  imageUris: string[];
  onAddImage: (uri: string) => void;
  onRemoveImage: (index: number) => void;
}

const ImageInputList = ({
  imageUris,
  onAddImage,
  onRemoveImage,
}: ImageInputListProps) => {
  const scrollView = useRef<ScrollView>(null);
  const ListImage = (
    key: string,
    imageUri: string | null,
    onChangeImage: (uri: string | null) => void
  ) => {
    return (
      <View key={key} style={styles.imageContainer}>
        <ImageInput imageUri={imageUri} onChangeImage={onChangeImage} />
      </View>
    );
  };
  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal={true}
        onContentSizeChange={() => scrollView.current?.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((u, i) =>
            ListImage(i.toString(), u, () => onRemoveImage(i))
          )}
          {ListImage(imageUris.length.toString(), null, (uri) =>
            onAddImage(uri as string)
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  imageContainer: {
    marginHorizontal: 5,
    marginBottom: 5,
  },
});
