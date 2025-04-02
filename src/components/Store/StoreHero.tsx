

export default function StoreHero(){
  return (
    <div 
      className="relative bg-black text-white py-40 bg-cover bg-center"
      style={{ 
        backgroundImage: `url('/Store/Cover.jpg')`,
      }}
    >
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="container mx-auto text-center relative z-10">
      </div>
    </div>
  );
}