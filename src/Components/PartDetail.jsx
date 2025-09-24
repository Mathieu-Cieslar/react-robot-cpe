import React from 'react';

const PartDetail = ({ part }) => (
    <div className="part-detail" style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', maxWidth: '400px' }}>
        <h2>{part.title}</h2>

        <p>{part.description}</p>
        {part.visual_type === 'video' && part.visual_src ? (
            <object data={part.visual_src} width="320" height="240"></object>
        ) : part.visual_src ? (
            <img src={part.visual_src} alt={`${part.title} part`} />
        ) : null}
        <span className="price-badge" >Price {part.price ?? "??"}</span>
    </div>
);

export default PartDetail;