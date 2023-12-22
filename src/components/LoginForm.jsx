import { useNavigate } from 'react-router-dom'

export function LoginForm() {
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('Formulario enviado')
		navigate('/')
	}

	return (
		<div className='w-full h-[500px] max-w-sm p-4 flex justify-center items-center bg-white rounded-lg shadow sm:p-6 md:p-8 bg-opacity-5'>
			<form className='w-full space-y-6' onSubmit={handleSubmit}>
				<h5 className='text-xl font-medium text-slate-900 '>Iniciar Sesión</h5>
				<div className='relative z-0 w-full mb-5 group'>
					<input
						type='email'
						name='floating_email'
						id='floating_email'
						className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
						placeholder=' '
						required
					/>
					<label
						htmlFor='floating_email'
						className='peer-focus:font-medium absolute text-sm text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
					>
						Email
					</label>
				</div>
				<div className='relative z-0 w-full mb-5 group'>
					<input
						type='password'
						name='floating_password'
						id='floating_password'
						className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
						placeholder=' '
						required
					/>
					<label
						htmlFor='floating_password'
						className='peer-focus:font-medium absolute text-sm text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
					>
						Contraseña
					</label>
				</div>
				<button
					type='submit'
					className='w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
				>
					Iniciar Sesión
				</button>
				<div className='text-sm font-medium text-slate-900 '>
					¿No estas registrado?{' '}
					<a href='#' className='text-blue-700 hover:underline'>
						Crear cuenta
					</a>
				</div>
			</form>
		</div>
	)
}
