import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'

function App() {
	return (
		<>
			<Canvas>
				<color attach='background' args={['#213547']} />
				<fog attach='fog' args={['#213547', 10, 20]} />
				<Experience />
			</Canvas>
		</>
	)
}

export default App
