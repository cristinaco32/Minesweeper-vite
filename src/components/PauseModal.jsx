import React from 'react';
import '../style/PauseModal.css';

function PauseModal({ width, height }) {

    const modalStyle = {
        width: `${width * 24}px`,
        height: `${height * 24}px`
    }

    return (
        <tr className='modal-tr'>
            <div className="modal" style={modalStyle}/>
        </tr>
        
    )
}

export default PauseModal;