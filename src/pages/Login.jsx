import { LoginForm } from '../components/LoginForm'
import { BackgroundShapes } from '../components/BackgroundShapes'

export function LoginPage() {
	return (
		<section className='text-slate-900 relative flex justify-center items-center w-full h-screen overflow-hidden p-5'>
			<div className='w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-10'>
				<div className='flex flex-col justify-center gap-5 text-center md:text-start'>
					<h2 className='text-xl font-bold'>¡Bienvenido!</h2>
					<h1 className='text-5xl font-bold tex'>
						Plataforma <span className='text-[#F5333F]'>Auto</span>logica
					</h1>
					<p className='text-3xl'>Inicia sesión para continuar</p>
				</div>
				<LoginForm />
			</div>
			<div className='absolute top-24 md:-top-24 w-full max-w-7xl h-full -z-10'>
				<BackgroundShapes />
			</div>
		</section>
	)
}
