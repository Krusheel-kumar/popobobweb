import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import authenticImg from '../assets/authentic transparent.png';
import hongkongImg from '../assets/hongkongtransparent.png';
import matchaImg from '../assets/matcha transparent.png';

const menuData = [
  {
    categoryId: 'classics',
    categoryName: 'Classics',
    drinks: [
      { id: 'c1', label: 'Classic', title: 'Authentic Boba Tea', description: 'Experience the authentic, handcrafted boba pearls and freshly caramelized brown sugar milk.', image: authenticImg, accentColor: 'rgba(212, 175, 55, 0.15)', drinkName: 'AUTHENTIC BOBA TEA' },
      { id: 'c2', label: 'Classic', title: 'Hong Kong Boba Tea', description: 'A bold, robust blend of premium black tea and rich milk.', image: hongkongImg, accentColor: 'rgba(205, 111, 0, 0.12)', drinkName: 'HONG KONG BOBA TEA' },
      { id: 'c3', label: 'Classic', title: 'Matcha Boba Tea', description: 'Ceremonial grade matcha whisked to perfection with creamy milk.', image: matchaImg, accentColor: 'rgba(102, 187, 106, 0.12)', drinkName: 'MATCHA BOBA TEA' },
      { id: 'c4', label: 'Classic', title: 'Brown Sugar Boba Tea', description: 'Our signature brown sugar glaze with fresh milk and chewy boba.', image: authenticImg, accentColor: 'rgba(121, 85, 72, 0.15)', drinkName: 'BROWN SUGAR BOBA TEA' },
      { id: 'c5', label: 'Classic', title: 'Taro Boba Tea', description: 'Sweet and creamy taro root with a hint of vanilla.', image: hongkongImg, accentColor: 'rgba(156, 39, 176, 0.15)', drinkName: 'TARO BOBA TEA' },
    ]
  },
  {
    categoryId: 'fruit-teas',
    categoryName: 'Fruit Teas',
    drinks: [
      { id: 'f1', label: 'Refreshing', title: 'Strawberry Boba Tea', description: 'Fresh strawberries crushed with jasmine green tea.', image: authenticImg, accentColor: 'rgba(229, 57, 53, 0.15)', drinkName: 'STRAWBERRY BOBA TEA' },
      { id: 'f2', label: 'Refreshing', title: 'Blueberry Boba Tea', description: 'Sweet and tangy blueberries mixed with green tea and boba.', image: hongkongImg, accentColor: 'rgba(63, 81, 181, 0.15)', drinkName: 'BLUEBERRY BOBA TEA' },
      { id: 'f3', label: 'Refreshing', title: 'Mango Boba Tea', description: 'Tropical mango blended with premium tea and chewy pearls.', image: matchaImg, accentColor: 'rgba(255, 152, 0, 0.15)', drinkName: 'MANGO BOBA TEA' },
      { id: 'f4', label: 'Refreshing', title: 'Honey Dew Boba Tea', description: 'Light and refreshing honey dew melon with green tea.', image: authenticImg, accentColor: 'rgba(139, 195, 74, 0.15)', drinkName: 'HONEY DEW BOBA TEA' },
      { id: 'f5', label: 'Refreshing', title: 'Lychee Boba Tea', description: 'Floral and sweet lychee mixed with premium tea.', image: hongkongImg, accentColor: 'rgba(233, 30, 99, 0.12)', drinkName: 'LYCHEE BOBA TEA' },
    ]
  },
  {
    categoryId: 'chocolate',
    categoryName: 'Chocolate',
    drinks: [
      { id: 'ch1', label: 'Indulgent', title: 'Chocolate Boba Tea', description: 'Rich chocolate combined with premium milk tea.', image: authenticImg, accentColor: 'rgba(121, 85, 72, 0.15)', drinkName: 'CHOCOLATE BOBA TEA' },
      { id: 'ch2', label: 'Indulgent', title: 'Ferrero Rocher Boba Tea', description: 'Hazelnut chocolate perfection with crushed Ferrero Rocher.', image: hongkongImg, accentColor: 'rgba(141, 110, 99, 0.15)', drinkName: 'FERRERO ROCHER BOBA TEA' },
      { id: 'ch3', label: 'Indulgent', title: 'Nutella Boba Tea', description: 'Creamy Nutella swirled into our signature milk tea.', image: matchaImg, accentColor: 'rgba(93, 64, 55, 0.15)', drinkName: 'NUTELLA BOBA TEA' },
      { id: 'ch4', label: 'Indulgent', title: 'Choco Fantasy Boba Tea', description: 'The ultimate chocolate lover\'s dream loaded with chocolate goodness.', image: authenticImg, accentColor: 'rgba(109, 76, 65, 0.15)', drinkName: 'CHOCO FANTASY BOBA TEA' },
      { id: 'ch5', label: 'Indulgent', title: 'Dark Cocoa Boba Tea', description: 'Rich 70% dark cocoa combined with espresso.', image: hongkongImg, accentColor: 'rgba(62, 39, 35, 0.15)', drinkName: 'DARK COCOA BOBA TEA' },
    ]
  },
  {
    categoryId: 'coffee',
    categoryName: 'Coffee',
    drinks: [
      { id: 'co1', label: 'Energy', title: 'Hazelnut Boba Tea', description: 'Creamy coffee with roasted hazelnut notes and chewy boba.', image: authenticImg, accentColor: 'rgba(141, 110, 99, 0.15)', drinkName: 'HAZELNUT BOBA TEA' },
      { id: 'co2', label: 'Energy', title: 'Mocha Boba Tea', description: 'Espresso and rich chocolate blended perfectly.', image: hongkongImg, accentColor: 'rgba(121, 85, 72, 0.2)', drinkName: 'MOCHA BOBA TEA' },
      { id: 'co3', label: 'Energy', title: 'Desi Coffee Boba Tea', description: 'Authentic desi-style strong coffee with a boba twist.', image: matchaImg, accentColor: 'rgba(161, 136, 127, 0.15)', drinkName: 'DESI COFFEE BOBA TEA' },
    ]
  },
  {
    categoryId: 'iced-teas',
    categoryName: 'Iced Teas',
    drinks: [
      { id: 'it1', label: 'Iced', title: 'Lemon Iced Tea', description: 'Classic refreshing lemon iced tea perfect for a hot day.', image: authenticImg, accentColor: 'rgba(255, 235, 59, 0.15)', drinkName: 'LEMON ICED TEA' },
      { id: 'it2', label: 'Iced', title: 'Blueberry Iced Tea', description: 'Tangy blueberry infused into our cold-brewed iced tea.', image: hongkongImg, accentColor: 'rgba(63, 81, 181, 0.12)', drinkName: 'BLUEBERRY ICED TEA' },
      { id: 'it3', label: 'Iced', title: 'Lychee Iced Tea', description: 'Sweet floral lychee over ice with premium tea.', image: matchaImg, accentColor: 'rgba(233, 30, 99, 0.2)', drinkName: 'LYCHEE ICED TEA' },
      { id: 'it4', label: 'Iced', title: 'Yuzu Berry Iced Tea', description: 'Citrusy yuzu mixed with mixed berries over ice.', image: authenticImg, accentColor: 'rgba(244, 67, 54, 0.15)', drinkName: 'YUZU BERRY ICED TEA' },
      { id: 'it5', label: 'Iced', title: 'Apple Twist Iced Tea', description: 'Crisp apple flavors twisted with cold iced tea.', image: hongkongImg, accentColor: 'rgba(76, 175, 80, 0.15)', drinkName: 'APPLE TWIST ICED TEA' },
      { id: 'it6', label: 'Iced', title: 'Peach Iced Tea', description: 'Sweet and juicy peach mixed with cold-brewed tea.', image: matchaImg, accentColor: 'rgba(255, 152, 0, 0.15)', drinkName: 'PEACH ICED TEA' },
    ]
  },
  {
    categoryId: 'boba-shakes',
    categoryName: 'Boba Shakes',
    drinks: [
      { id: 'bs1', label: 'Creamy', title: 'Mango Boba Shake', description: 'Thick and creamy mango milkshake with chewy boba.', image: authenticImg, accentColor: 'rgba(255, 193, 7, 0.15)', drinkName: 'MANGO BOBA SHAKE' },
      { id: 'bs2', label: 'Creamy', title: 'Blueberry Boba Shake', description: 'Rich blueberry milkshake blended to perfection.', image: hongkongImg, accentColor: 'rgba(63, 81, 181, 0.15)', drinkName: 'BLUEBERRY BOBA SHAKE' },
      { id: 'bs3', label: 'Creamy', title: 'Ferrero Rocher Boba Shake', description: 'Decadent Ferrero Rocher blended into a thick shake.', image: matchaImg, accentColor: 'rgba(141, 110, 99, 0.15)', drinkName: 'FERRERO ROCHER SHAKE' },
      { id: 'bs4', label: 'Creamy', title: 'Nutella Boba Shake', description: 'Creamy Nutella thick shake loaded with boba pearls.', image: authenticImg, accentColor: 'rgba(93, 64, 55, 0.15)', drinkName: 'NUTELLA BOBA SHAKE' },
    ]
  }
];

export function Collections() {
  const [activeCategoryId, setActiveCategoryId] = useState(menuData[0].categoryId);
  const activeCategoryData = menuData.find(c => c.categoryId === activeCategoryId)!;
  const [drinks, setDrinks] = useState(activeCategoryData.drinks);

  const activeDrink = drinks[0];

  const handleCategoryChange = (catId: string) => {
    if (catId === activeCategoryId) return;
    setActiveCategoryId(catId);
    const newCat = menuData.find(c => c.categoryId === catId)!;
    setDrinks(newCat.drinks);
  };

  const handleNext = () => {
    setDrinks((prev) => {
      const newDrinks = [...prev];
      const first = newDrinks.shift();
      if (first) newDrinks.push(first);
      return newDrinks;
    });
  };

  const handlePrev = () => {
    setDrinks((prev) => {
      const newDrinks = [...prev];
      const last = newDrinks.pop();
      if (last) newDrinks.unshift(last);
      return newDrinks;
    });
  };

  return (
    <div className="relative min-h-[100vh] w-full bg-[#fdfaf6] flex flex-col overflow-hidden">
      
      {/* Background Accent that changes based on active drink */}
      <motion.div
        layout
        className="absolute inset-0 pointer-events-none z-0 transition-colors duration-700"
        style={{
          background: `radial-gradient(circle at center, ${activeDrink.accentColor} 0%, transparent 70%)`
        }}
      />

      <div className="w-full flex-1 flex flex-col relative z-10 pt-8 pb-12 lg:py-24">
        
        {/* SECTION HEADING */}
        <div className="text-center mb-6 lg:mb-10 px-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-rich-black tracking-tight">
            Collections
          </h2>
        </div>

        {/* TOP CATEGORY NAVIGATION */}
        <div className="relative w-full mb-4 lg:mb-16">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#fdfaf6] to-transparent z-10 flex items-center justify-start lg:hidden pointer-events-none">
            <ChevronLeft className="w-4 h-4 text-rich-black/40" />
          </div>
          
          <div className="w-full overflow-x-auto no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            <div className="flex flex-nowrap lg:flex-wrap justify-start lg:justify-center gap-x-6 lg:gap-x-12 px-8 lg:px-12 w-max lg:w-auto mx-auto snap-x">
              {menuData.map(cat => (
                <button 
                  key={cat.categoryId}
                  onClick={() => handleCategoryChange(cat.categoryId)}
                  className={`snap-start whitespace-nowrap text-[11px] md:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeCategoryId === cat.categoryId 
                      ? 'text-luxury-gold border-b-2 border-luxury-gold pb-1' 
                      : 'text-rich-black/40 hover:text-rich-black'
                  }`}
                >
                  {cat.categoryName}
                </button>
              ))}
            </div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#fdfaf6] to-transparent z-10 flex items-center justify-end pr-2 lg:hidden pointer-events-none">
            <ChevronRight className="w-5 h-5 text-luxury-gold animate-pulse" />
          </div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="max-w-[95rem] w-full mx-auto px-6 md:px-12 flex-1 flex flex-col justify-start lg:justify-center mt-4 lg:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-12 items-center w-full">
            
            {/* LEFT SIDE: Typography & Info */}
            <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDrink.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col gap-4 lg:gap-6"
                >
                  <div className="flex flex-col gap-2">
                    <span className="text-luxury-gold text-[10px] md:text-xs font-bold tracking-widest uppercase flex items-center gap-3">
                      <span className="w-8 h-[2px] bg-luxury-gold rounded-full" />
                      {activeDrink.label}
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-heading text-rich-black font-bold tracking-tight leading-[1.1]">
                      {activeDrink.title}
                    </h2>
                  </div>
                  
                  <p className="text-warm-dark-gray text-base lg:text-lg font-medium leading-relaxed max-w-md mt-1 lg:mt-2">
                    {activeDrink.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-4 sm:gap-6 mt-2">
                <div className="flex gap-3 lg:gap-4">
                  <button 
                    onClick={handlePrev} 
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-rich-black/15 flex items-center justify-center hover:bg-rich-black hover:border-rich-black hover:text-white transition-all duration-300 group shadow-sm hover:shadow-xl hover:-translate-y-1 bg-[#fdfaf6]"
                  >
                    <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 group-hover:-translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={handleNext} 
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-rich-black/15 flex items-center justify-center hover:bg-rich-black hover:border-rich-black hover:text-white transition-all duration-300 group shadow-sm hover:shadow-xl hover:-translate-y-1 bg-[#fdfaf6]"
                  >
                    <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                {/* ORDER NOW BUTTON */}
                <button className="h-12 lg:h-14 px-8 lg:px-10 bg-rich-black text-white rounded-full font-bold text-[11px] lg:text-xs uppercase tracking-widest hover:bg-luxury-gold transition-colors duration-300 shadow-md hover:shadow-xl flex items-center justify-center whitespace-nowrap">
                  Order Now
                </button>
              </div>
            </div>

            {/* RIGHT SIDE: Horizontal Sliding Drinks */}
            <div className="lg:col-span-8 flex justify-start overflow-visible order-1 lg:order-2 w-full min-h-[300px] lg:min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeCategoryId}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex items-end gap-4 sm:gap-6 lg:gap-12 w-full justify-start"
                >
                  {drinks.map((drink, index) => {
                    const isActive = index === 0;
                    
                    return (
                      <motion.div
                        layout
                        key={drink.id}
                        transition={{ 
                          layout: { type: "spring", stiffness: 50, damping: 14, mass: 1 }
                        }}
                        className={`flex flex-col shrink-0 origin-bottom ${isActive ? 'w-[280px] sm:w-[320px] lg:w-[480px] items-start lg:items-center' : 'w-[160px] sm:w-[180px] lg:w-[280px] items-center'}`}
                      >
                        {isActive ? (
                          // ACTIVE DRINK (Just a massive, gorgeous cup)
                          <motion.div 
                            layoutId={`container-${drink.id}`}
                            className="w-full flex flex-col relative cursor-pointer items-start lg:items-center"
                            onClick={handleNext}
                          >
                            <motion.img 
                              layoutId={`img-${drink.id}`}
                              src={drink.image} 
                              alt={drink.drinkName}
                              className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[480px] mix-blend-multiply z-10 relative drop-shadow-2xl"
                            />
                          </motion.div>
                        ) : (
                          // INACTIVE DRINK (Smaller, faded, with title)
                          <motion.div 
                            layoutId={`container-${drink.id}`}
                            onClick={handleNext}
                            className="w-full flex flex-col items-center relative cursor-pointer group pb-2 lg:pb-4"
                          >
                            <motion.img 
                              layoutId={`img-${drink.id}`}
                              src={drink.image} 
                              alt={drink.drinkName}
                              whileHover={{ scale: 1.05, y: -8 }}
                              className="w-full max-w-[140px] sm:max-w-[180px] lg:max-w-[260px] mix-blend-multiply z-10 relative mb-2 lg:mb-4 opacity-70 group-hover:opacity-100 transition-opacity drop-shadow-xl"
                            />
                            <motion.h3 
                              layoutId={`title-${drink.id}`}
                              className="font-heading font-bold text-[10px] sm:text-xs lg:text-sm text-center text-rich-black uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity"
                            >
                              {drink.drinkName}
                            </motion.h3>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
