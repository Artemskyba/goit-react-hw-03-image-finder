import { ImageGalleryItem } from 'components/image-gallery-item/image-gallery-item';
import { GalleryList } from './image-gallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <GalleryList>
      {images.map(({ id, previewURL, tags }) => {
        return (
          <ImageGalleryItem key={id} imgUrl={previewURL} description={tags} />
        );
      })}
    </GalleryList>
  );
};
