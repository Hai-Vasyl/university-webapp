import React from "react"

const Map: React.FC = () => {
  return (
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10295.334741019109!2d24.00617!3d49.826791!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7df5a9921f%3A0xc59052d9e18b2d4c!2z0IbQn9Cf0KIg0J3QoyAi0JvRjNCy0ZbQstGB0YzQutCwINC_0L7Qu9GW0YLQtdGF0L3RltC60LAiLCDQstGD0LvQuNGG0Y8g0IbQstCw0L3QsCDQk9C-0YDQsdCw0YfQtdCy0YHRjNC60L7Qs9C-LCAxOCwg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1629313450363!5m2!1suk!2sua'
      style={{ border: 0 }}
      loading='lazy'
    ></iframe>
  )
}

export default Map
