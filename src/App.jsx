import { useState } from "react"
import Containers from "./components/Containers"
import Tours from "./components/Tours"
import data from "./data"
import "./App.css"

function App() {
	const [tours, setTours] = useState(data)

	const removeTour = (id) => {
		const newTour = tours.filter((tour) => tour.id !== id)
		setTours(newTour)
	}

	if (tours.length === 0) {
		return (
			<>
				<div className="refresh-card">
					<h4 className="tour-left"> No Tours Left</h4>
					<button
						className="btn-refresh"
						onClick={() => setTours(data)}
					>
						Refresh
					</button>
				</div>
			</>
		)
	}

	return (
		<>
			<Containers>
				<div className="title">
					<h1>Tourist places</h1>
				</div>

				<Tours
					tours={tours}
					removeTour={removeTour}
				></Tours>
			</Containers>
		</>
	)
}

export default App
