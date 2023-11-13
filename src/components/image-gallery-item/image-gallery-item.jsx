import { GalleryImage, GalleryItem } from './image-gallery-item.styled';

export const ImageGalleryItem = ({ imgUrl, description }) => {
  return (
    <GalleryItem>
      <GalleryImage src={imgUrl} alt={description} />
    </GalleryItem>
  );
};
