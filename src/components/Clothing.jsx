import React from 'react'
import vcold from '../images/vcold.png'
import cold from '../images/cold.png'
import warm from '../images/warm.png'
import hot from '../images/hot.png'

const Clothing = ({ temp }) => {
  function getClothingRecommendation(temperature) {
    if (temperature < 10) {
      return {
        message:
          "Stay warm with layers. Start with a thermal shirt and leggings for a base layer, followed by a cozy sweater or sweatshirt. Top it off with a warm winter jacket to keep the wind out. Don't forget to bundle up your extremities with a hat, scarf, and gloves for added comfort.",
        img: vcold,
      }
    } else if (temperature >= 10 && temperature <= 20) {
      return {
        message:
          'Light layers for cool comfort. Opt for a long-sleeved shirt or a t-shirt with a light sweater or cardigan. Jeans or comfortable pants are perfect for this temperature range. If it feels chilly in the morning or evening, consider a light jacket or windbreaker for extra warmth.',
        img: cold,
      }
    } else if (temperature > 20 && temperature <= 25) {
      return {
        message:
          "Enjoy the comfortable weather in casual wear. A t-shirt paired with shorts or a skirt is ideal for this pleasant temperature. Opt for sandals or light shoes to keep your feet cool. If you'll be spending extended time outdoors, consider a hat for sun protection.",
        img: warm,
      }
    } else {
      return {
        message:
          "Stay cool and breezy with light clothing. Choose breathable fabrics like cotton or linen for your outfit, whether it's a t-shirt and shorts or a skirt. Sandals or light shoes are essential for keeping your feet comfortable in the heat. Don't forget a hat and sunglasses to shield yourself from the sun.",
        img: hot,
      }
    }
  }
  const recommendation = getClothingRecommendation(temp)

  return (
    <section>
      <h2 className='mb-8 text-center font-bold text-2xl'>CLOTHING RECOMMENDATIONS</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <img
          className='p-8 shadow-sm border-[#1a1a1a] bg-[#151515] hover:bg-[#252525] hover:border-neutral-700 transition-all rounded-lg hover:shadow-xl hover:cursor-pointer'
          src={recommendation.img}
          alt='person'
        />
        <p className='text-pretty'>{recommendation.message}</p>
      </div>
    </section>
  )
}

export default Clothing
