"use client"
import React from 'react'
import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import Earth from "../../../public/Earth"
import Footer from '../components/Footer'

const Page = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Canvas>
          <ambientLight />
          <OrbitControls enableZoom={false}/>
          <Suspense fallback={null}>
            <Earth/>
          </Suspense>
          <Environment preset='sunset'/>
          <ContactShadows position={[0,-2.5,0]} opacity={0.5} scale={50} blur={1} far={10} resolution={256} color="#00000"/>
        </Canvas>
        <div className="container">
          <h1>About Us</h1>
          <p >
    Hyperspace is an experiential attractions developer, pioneering the creation of physical parks designed for a digital world. We specialize in inventing, building, and operating next-generation attractions that seamlessly integrate with contemporary digital lifestyles. Our innovative parks combine the most engaging elements of video games, social media, and Web3 culture, transforming them into cutting-edge entertainment experiences.

At Hyperspace, we are committed to pushing the boundaries of traditional entertainment by incorporating immersive technology and interactive storytelling into every attraction. Our parks offer a unique blend of virtual and real-world activities, providing visitors with an unparalleled, multi-sensory experience. Whether it’s an adrenaline-pumping adventure, a serene digital art installation, or a collaborative social experience, there’s something for everyone at Hyperspace.

By leveraging the latest advancements in augmented reality (AR), virtual reality (VR), artificial intelligence (AI), and blockchain technology, our attractions offer dynamic environments that evolve with the preferences and behaviors of our guests. Whether it's through gamified experiences, social media integrations, or digital collectibles, Hyperspace ensures that every visit is a new adventure, fostering a deep connection between the physical and digital realms.

Our commitment to innovation extends to the way we design and build our attractions. Utilizing sustainable materials and cutting-edge construction techniques, we create spaces that are not only technologically advanced but also environmentally conscious. Each park is a testament to our dedication to sustainability, ensuring that future generations can enjoy these immersive experiences without compromising the health of our planet.

Hyperspace also offers a variety of exclusive digital and physical merchandise, allowing visitors to take a piece of the adventure home with them. From NFTs and in-game items to custom apparel and collectibles, our merchandise enhances the overall experience and provides lasting memories of the journey through our parks. </p>
  
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Page
"use client"
import React from 'react'
import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import Earth from "../../../public/Earth"
import Footer from '../components/Footer'

const Page = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Canvas>
          <ambientLight />
          <OrbitControls enableZoom={false}/>
          <Suspense fallback={null}>
            <Earth/>
          </Suspense>
          <Environment preset='sunset'/>
          <ContactShadows position={[0,-2.5,0]} opacity={0.5} scale={50} blur={1} far={10} resolution={256} color="#00000"/>
        </Canvas>
        <div className="container">
          <h1>About Us</h1>
          <p >
    Hyperspace is an experiential attractions developer, pioneering the creation of physical parks designed for a digital world. We specialize in inventing, building, and operating next-generation attractions that seamlessly integrate with contemporary digital lifestyles. Our innovative parks combine the most engaging elements of video games, social media, and Web3 culture, transforming them into cutting-edge entertainment experiences.

At Hyperspace, we are committed to pushing the boundaries of traditional entertainment by incorporating immersive technology and interactive storytelling into every attraction. Our parks offer a unique blend of virtual and real-world activities, providing visitors with an unparalleled, multi-sensory experience. Whether it’s an adrenaline-pumping adventure, a serene digital art installation, or a collaborative social experience, there’s something for everyone at Hyperspace.

By leveraging the latest advancements in augmented reality (AR), virtual reality (VR), artificial intelligence (AI), and blockchain technology, our attractions offer dynamic environments that evolve with the preferences and behaviors of our guests. Whether it's through gamified experiences, social media integrations, or digital collectibles, Hyperspace ensures that every visit is a new adventure, fostering a deep connection between the physical and digital realms.

Our commitment to innovation extends to the way we design and build our attractions. Utilizing sustainable materials and cutting-edge construction techniques, we create spaces that are not only technologically advanced but also environmentally conscious. Each park is a testament to our dedication to sustainability, ensuring that future generations can enjoy these immersive experiences without compromising the health of our planet.

Hyperspace also offers a variety of exclusive digital and physical merchandise, allowing visitors to take a piece of the adventure home with them. From NFTs and in-game items to custom apparel and collectibles, our merchandise enhances the overall experience and provides lasting memories of the journey through our parks. </p>
  
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Page
