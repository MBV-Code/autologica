export function Card({ title, description }) {
	return (
		<div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-transform duration-200'>
			<a href='#'>
				<div className='p-5'>
					<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
						{title}
					</h5>

					<p className='mb-3 font-normal text-gray-700'>{description}</p>
					<a
						href='#'
						className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#F5333F] rounded-lg hover:bg-[#F1111F] focus:ring-4 focus:outline-none'
					>
						<svg
							className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 14 10'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M1 5h12m0 0L9 1m4 4L9 9'
							/>
						</svg>
					</a>
				</div>
			</a>
		</div>
	)
}
