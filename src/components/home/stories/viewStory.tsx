import React from 'react';
import {StoryContainer} from 'react-native-stories-view';

interface Props {
  isOpen: boolean;
  images: string[];
  onComplete: () => void;
}

const ViewStory: React.FC<Props> = ({isOpen, images, onComplete}) => {
  return (
    <StoryContainer
      visible={isOpen}
      enableProgress
      images={images}
      duration={20}
      onComplete={onComplete}
      containerStyle={{width: '100%', height: '100%'}}
    />
  );
};

export default ViewStory;
