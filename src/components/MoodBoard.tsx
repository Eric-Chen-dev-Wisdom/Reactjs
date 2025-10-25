import React from 'react';
import './MoodBoard.css';

interface MoodBoardItemProps {
  color: string;
  image: string;
  description: string;
}

export const MoodBoardItem: React.FC<MoodBoardItemProps> = ({ color, image, description }) => {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} alt={description} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
};

export const MoodBoard: React.FC = () => {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        <MoodBoardItem 
          color="#e6f2ff"
          image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
          description="Mediterranean Dreams"
        />
        <MoodBoardItem 
          color="#f0f8e6"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="Serene Meadows"
        />
        <MoodBoardItem 
          color="#fff0e6"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Coastal Calm"
        />
        <MoodBoardItem 
          color="#e6f0ff"
          image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg"
          description="Ocean Voyage"
        />
        <MoodBoardItem 
          color="#f5e6ff"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="Mystical Pathways"
        />
        <MoodBoardItem 
          color="#fffae6"
          image="https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg"
          description="Urban Harmony"
        />
      </div>
    </div>
  );
};