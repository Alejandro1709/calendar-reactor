function Hero() {
  return (
    <section className='flex justify-center items-center md:h-80 bg-gray-800 text-white'>
      <div className='flex flex-col items-start gap-4 text-center p-4 max-w-2/4'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl md:text-5xl font-bold tracking-wider leading-snug'>
            Comparte tu horario y deja que la gente reaccione!
          </h1>
          <p className='text-1xl md:text-2xl max-w-2/4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            beatae optio odit, officia cum eaque sint voluptatum tempora
          </p>
        </div>
        <button className='bg-gray-500 text-white px-4 py-2 rounded-md mx-auto hover:bg-gray-600'>
          Compartir Horario
        </button>
      </div>
    </section>
  );
}

export default Hero;
