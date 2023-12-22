import Logo from '../assets/autologica-logo.png'

export function Header() {
	return (
		<nav className='w-full border-gray-200 bg-gray-50'>
			<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
				<a href='#' className='flex items-center space-x-3 rtl:space-x-reverse'>
					<img src={Logo} className='h-8' alt='Autologica Logo' />
					<h1 className='text-2xl font-bold tex'>
						Plataforma <span className='text-[#F5333F]'>Auto</span>logica
					</h1>
				</a>
				<button type='button' className='rounded-full'>
					<img
						className='w-8 h-8 rounded-full'
						src='https://ui-avatars.com/api/?name=Maria&color=7F9CF5&background=EBF4FF'
						alt='user photo'
					/>
				</button>
			</div>
		</nav>
	)
}
