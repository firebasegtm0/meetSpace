import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import '../App.css';

import image1 from '../assets/Image/Image1.jpg';
import image2 from '../assets/Image/Image2.jpg';
import image3 from '../assets/Image/Image3.jpg';
import image4 from '../assets/Image/Image4.jpg';
import image5 from '../assets/Image/Image5.jpg';
import image6 from '../assets/Image/Image6.jpg';
import image7 from '../assets/Image/Image7.jpg';
import image8 from '../assets/Image/Image8.jpg';
import image9 from '../assets/Image/Image9.jpg';

const imageList = [
  { src: image1, alt: 'Conference Hall Setup' },
  { src: image2, alt: 'Meeting Room Interior' },
  { src: image3, alt: 'Professional Workspace' },
  { src: image4, alt: 'Event Setup' },
  { src: image5, alt: 'Business Meeting' },
  { src: image6, alt: 'Corporate Environment' },
  { src: image7, alt: 'Training Session' },
  { src: image8, alt: 'Modern Facility' },
  { src: image9, alt: 'Premium Venue' }
];

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  
  const imagesPerPage = 3;
  const totalPages = Math.ceil(imageList.length / imagesPerPage);

  const getCurrentPageImages = () => {
    const startIndex = currentPage * imagesPerPage;
    return imageList.slice(startIndex, startIndex + imagesPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const openModal = (globalIndex) => {
    setCurrentImageIndex(globalIndex);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageList.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeModal();
  };

  return (
    <section className="section gallery">
      <h2>Gallery</h2>
      <p className="gallery-subtitle">Explore our premium meeting spaces and facilities</p>
      
      <div className="gallery-container">
        <button 
          className="gallery-nav-btn gallery-nav-left" 
          onClick={prevPage}
          disabled={totalPages <= 1}
          aria-label="Previous images"
        >
          <FaChevronLeft />
        </button>

        <div className="gallery-grid">
          {getCurrentPageImages().map((image, idx) => {
            const globalIndex = currentPage * imagesPerPage + idx;
            return (
              <div
                className="gallery-card"
                key={globalIndex}
                onClick={() => openModal(globalIndex)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' ? openModal(globalIndex) : null)}
              >
                <div className="gallery-image-container">
                  <LazyLoadImage
                    alt={image.alt}
                    src={image.src}
                    effect="opacity"
                    width="100%"
                    height="250"
                    className="gallery-image"
                    placeholderSrc="data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100' height='100' fill='%23f1f5f9'/%3e%3c/svg%3e"
                  />
                  <div className="gallery-overlay">
                    <span className="gallery-view-text">View Image</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button 
          className="gallery-nav-btn gallery-nav-right" 
          onClick={nextPage}
          disabled={totalPages <= 1}
          aria-label="Next images"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="gallery-pagination">
        <span className="gallery-page-info">
          Page {currentPage + 1} of {totalPages}
        </span>
      </div>

      {modalOpen && (
        <div 
          className="gallery-modal-overlay" 
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="gallery-modal-close" 
              onClick={closeModal} 
              aria-label="Close gallery"
            >
              <FaTimes />
            </button>
            
            <button 
              className="gallery-modal-nav gallery-modal-prev" 
              onClick={prevImage}
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>
            
            <div className="gallery-modal-image-container">
              <img 
                src={imageList[currentImageIndex].src} 
                alt={imageList[currentImageIndex].alt}
                className="gallery-modal-image" 
              />
              <div className="gallery-modal-caption">
                <h3>{imageList[currentImageIndex].alt}</h3>
                <p>{currentImageIndex + 1} of {imageList.length}</p>
              </div>
            </div>
            
            <button 
              className="gallery-modal-nav gallery-modal-next" 
              onClick={nextImage}
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
