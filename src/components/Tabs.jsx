import { useState } from 'react'

export function Tabs() {
	const [activeTab, setActiveTab] = useState('1')

	const getClassName = (tab) => {
		if (tab === activeTab) {
			return 'inline-flex items-center justify-center p-4 border-b-2 text-slate-900 border-[#F5333F] rounded-t-lg'
		}

		return 'inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300'
	}

	return (
		<div className='w-full max-w-screen-xl border-b border-gray-200'>
			<ul className='flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500'>
				<li className='me-2' onClick={() => setActiveTab('1')}>
					<a href='#' className={getClassName('1')}>
						<svg
							className='w-4 h-4 me-2 text-[#F5333F]'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 18 18'
						>
							<path d='M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z' />
						</svg>
						Apps
					</a>
				</li>
				<li className='me-2' onClick={() => setActiveTab('2')}>
					<a href='#' className={getClassName('2')} aria-current='page'>
						<svg
							className='w-4 h-4 me-2 text-[#F5333F]'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 20 18'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M10 16.5c0-1-8-2.7-9-2V1.8c1-1 9 .707 9 1.706M10 16.5V3.506M10 16.5c0-1 8-2.7 9-2V1.8c-1-1-9 .707-9 1.706'
							/>
						</svg>
						Academy
					</a>
				</li>
				<li className='me-2' onClick={() => setActiveTab('3')}>
					<a href='#' className={getClassName('3')}>
						<svg
							className='w-4 h-4 me-2 text-[#F5333F]'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							width='21'
							height='20'
							fill='none'
							viewBox='0 0 21 20'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M3.308 9a2.257 2.257 0 0 0 2.25-2.264 2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 1 0 4.5 0C19.058 5.471 16.956 1 16.956 1H3.045S1.058 5.654 1.058 6.736A2.373 2.373 0 0 0 3.308 9Zm0 0a2.243 2.243 0 0 0 1.866-1h.767a2.242 2.242 0 0 0 3.733 0h.767a2.242 2.242 0 0 0 3.733 0h.767a2.247 2.247 0 0 0 1.867 1A2.22 2.22 0 0 0 18 8.649V19H9v-7H5v7H2V8.524c.37.301.83.469 1.308.476ZM12 12h3v3h-3v-3Z'
							/>
						</svg>
						Marketplace
					</a>
				</li>
			</ul>
		</div>
	)
}
