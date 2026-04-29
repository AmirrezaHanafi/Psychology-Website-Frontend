import mentalHealthConditions from '../../../Data/mentalHealthConditions.js'

export default function Services() {
  return (
    <div>
      <div className="container rounded-2xl bg-white/10 py-11">
        <div className="font-PoppinsExtraBold text-xl md:text-2xl">Services</div>
        <div className="mt-12 mb-16 grid gap-5 md:grid-cols-2 md:gap-11 lg:grid-cols-3 xl:grid-cols-4">
          {mentalHealthConditions.map((item, index) => {
            return (
              <div
                className={`rounded-2xl p-4 transition-transform hover:scale-105 ${index % 2 === 0 ? 'bg-white' : 'bg-[#A38E63]/50'}`}
                key={item.id}
              >
                <h2 className="font-PoppinsBold text-lg md:text-2xl">{item.name}</h2>
                <h3 className="font-PoppinsMedium text-base md:text-xl">{item.title}</h3>
                <p className="text-sm md:text-base">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
