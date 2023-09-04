import React from 'react';

function PauseModal({ width, height }) {

    const modalStyle = {
        width: `${width * 24-4}px`,
        height: `${height * 24-4}px`
    }

    if (width < 10) {
        modalStyle.width = `220px`
    }

    return (
        <tfoot className='flex flex-col self-center'>
            <tr className='table-row'>
                <td className="flex flex-row bg-blue-400 justify-center items-center m-0 border-2 border-solid border-t-ms-color-1 border-r-ms-color-2 border-b-ms-color-2 border-l-ms-color-1 p-0 align-middle absolute" style={modalStyle}></td>
            </tr>
        </tfoot>
    )
}

export default PauseModal;