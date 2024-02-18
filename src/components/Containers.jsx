import styles from "../components/Containers.module.css"

const Containers = (props) => {
	return (
		<>
			<div className="container">{props.children}</div>
			Tours
		</>
	)
}

export default Containers
