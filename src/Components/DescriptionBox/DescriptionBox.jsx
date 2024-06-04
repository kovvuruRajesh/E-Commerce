import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {

    return(
        <div className='descriptionbox'>
            <div className='descriptionbox-navigator'>
                <div className='descriptionbox-nav-box'>Description</div>
                <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
            </div>
            <div className='descriptionbox-description'>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eligendi alias! Eos 
                    voluptas ipsum hic repellat consequatur sit laboriosam quaerat distinctio animi facilis, sequi voluptatibus soluta 
                    repellendus totam magnam aperiam.
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus aliquam deleniti iusto dicta et, 
                    adipisci modi, quibusdam tempore voluptas officia similique eligendi recusandae tenetur eius soluta distinctio natus non!
                </p>
            </div>
        </div>

    );
}

export default DescriptionBox