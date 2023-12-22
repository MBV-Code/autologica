import { Header } from '../components/Header'
import { Tabs } from '../components/Tabs'
import { Card } from '../components/Card'
import { cards } from '../data/cards'

export function HomePage() {
	return (
		<section className='w-full flex flex-col items-center justify-center'>
			<Header />
			<Tabs />
			<div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3'>
				{cards.map((card, index) => (
					<Card
						key={index}
						title={card.title}
						description={card.description}
					/>
				))}
			</div>
		</section>
	)
}
