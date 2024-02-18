import { useState } from "react"

const Card = ({ id, image, price, info, name, removeTour }) => {
	const [readmore, setReadmore] = useState(false)
	const description = readmore ? info : `${info.substring(0, 200)}....`

	const readlessHandler = () => {
		setReadmore(!readmore)
	}
	return (
		<>
			<div className="tour-container">
				<div className="tour-detail">
					<img
						src={image}
						alt=""
						className="images"
					/>
				</div>

				<div className="tour-info">
					<div className="tour-details">
						<h4 className="tour-name">{name}</h4>
						<h4 className="tour-price">{price}</h4>
					</div>

					<div className="description">
						{description}
						<span
							className="readmore"
							onClick={readlessHandler}
						>
							{readmore ? `show less` : `read more`}
						</span>
					</div>
				</div>
				<div
					className="notbtn"
					onClick={() => removeTour(id)}
				>
					Not Interested
				</div>
			</div>
		</>
	)
}

export default Card
