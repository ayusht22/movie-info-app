import React from 'react'

export default function AddFav({movie}) {
    return (
        <div>
            <div className="d-flex flex-column">
            {movie.Title&&<span className='mr-2'>{movie.Title}</span>}
            {movie.Type&&<span className='mr-2'>Type:{movie.Type}</span>}
            {movie.Year&&<span className='mr-2'>Year:{movie.Year}</span>}
            <span className='mr-2'>Add to Favourites</span>
            </div>
			<svg
				width='1em'
				height='1em'
				viewBox='0 0 16 16'
				className='bi bi-heart-fill'
				fill='red'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fillRule='evenodd'
					d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
				/>
			</svg>
        </div>
    )
}
