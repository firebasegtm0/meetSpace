import React, { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const storageRef = ref(storage, 'gallery/');
        const res = await listAll(storageRef);
        const urls = await Promise.all(
          res.items.map(itemRef => getDownloadURL(itemRef))
        );
        setGalleryImages(urls);
      } catch (error) {
        console.error("Error fetching images: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <div>Loading gallery...</div>;

  return (
    <section className="section gallery">
      <h2>Gallery</h2>
      <div className="gallery-images">
        {galleryImages.map((url, index) => (
          <div className="gallery-item" key={index}>
            <img src={url} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;