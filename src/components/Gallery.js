import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import '../App.css';

import conferenceHallSetupImg from '../assets/Image/Image1.jpg';
import meetingRoomInteriorImg from '../assets/Image/Image2.jpg';
import professionalWorkspaceImg from '../assets/Image/Image3.jpg';
import eventSetupImg from '../assets/Image/Image4.jpg';
import businessMeetingImg from '../assets/Image/Image5.jpg';
import corporateEnvironmentImg from '../assets/Image/Image6.jpg';
import trainingSessionOneImg from '../assets/Image/Image7.jpg';
import modernFacilityImg from '../assets/Image/Image8.jpg';
import premiumVenueOneImg from '../assets/Image/Image9.jpg';
import boardRoomsImg from '../assets/Image/Image10.webp';
import premiumVenueTwoImg from '../assets/Image/Image11.webp';
import trainingSessionTwoImg from '../assets/Image/Image12.webp';
import trainingSessionThreeImg from '../assets/Image/Image13.webp';
import trainingSessionFourImg from '../assets/Image/Image14.webp';
import trainingSessionFiveImg from '../assets/Image/Image15.webp';


const imageList = [
  { src: conferenceHallSetupImg, alt: 'MeetSpace conference hall setup with modern amenities' },
  { src: meetingRoomInteriorImg, alt: 'MeetSpace meeting room interior design' },
  { src: professionalWorkspaceImg, alt: 'MeetSpace professional workspace environment' },
  { src: eventSetupImg, alt: 'MeetSpace event setup in spacious hall' },
  { src: businessMeetingImg, alt: 'MeetSpace business meeting in progress' },
  { src: corporateEnvironmentImg, alt: 'MeetSpace corporate office environment' },
  { src: trainingSessionOneImg, alt: 'MeetSpace training session with participants' },
  { src: modernFacilityImg, alt: 'MeetSpace modern office facility overview' },
  { src: premiumVenueOneImg, alt: 'MeetSpace premium venue for events' },
  { src: boardRoomsImg, alt: 'MeetSpace executive board rooms' },
  { src: premiumVenueTwoImg, alt: 'MeetSpace premium office venue interior' },
  { src: trainingSessionTwoImg, alt: 'MeetSpace group training session' },
  { src: trainingSessionThreeImg, alt: 'MeetSpace workshop training area' },
  { src: trainingSessionFourImg, alt: 'MeetSpace seminar training setup' },
  { src: trainingSessionFiveImg, alt: 'MeetSpace team training session' }
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