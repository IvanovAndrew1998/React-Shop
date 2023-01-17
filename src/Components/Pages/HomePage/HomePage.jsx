import React from 'react'
import CarouselBlock from './CarouselBlock/CarouselBlock';
import MainCategories from './MainCategories/MainCategories';
import RecomendationBlock from './RecomendationBlock/RecomendationBlock';
import CollectionBlock from './CollectionBlock/CollectionBlock';
import SubscriptionBlock from './SubscriptionBlock/SubscriptionBlock';
import CollectionBlockTwo from './CollectionBlockTwo/CollectionBlockTwo';
import CollectionBlockThree from './CollectionBlockThree/CollectionBlockThree';
import CollectionBlockFour from './CollectionBlockFour/CollectionBlockFour';
import Partners from './Partners/Partners';
import MainCategoriesM from './Mobile/MainCategoriesM/MainCategoriesM';
import CategoriesM from './Mobile/CategoriesM/CategoriesM';
import PartnersM from './Mobile/PartnersM/PartnersM';
import RecomendationBlockM from './Mobile/RecomendationBlockM/RecomendationBlockM';
import FilterLinks from './Mobile/FilterLinks/FilterLinks';
import ProductCard from '../PRODUCTCARD/ProductCard';
import RegisterCard from '../PRODUCTCARD/RegisterCard';

const HomePage = () => {
  return (
    <div>
      <MainCategoriesM />
      <CarouselBlock />
      <CategoriesM />
      <PartnersM />
      <MainCategories />
      <RecomendationBlockM />
      <section className="small-banner hidden">
        <div className="inner">
          <img src="src/small-bnner.png" alt="" />
        </div>
      </section>
      <FilterLinks />
      <RecomendationBlockM />
      <section className="gridsection-hidden">
        <div className="inner">
          <img src="src/grid-1.png" alt="" />
          <img src="src/grid-2.png" alt="" />
        </div>
      </section>

      <section className="ringsection-hidden">
        <div className="inner">
          <img src="src/ringsection-hidden.png" alt="" />
        </div>
      </section>
      <RecomendationBlockM />

      <RecomendationBlock id='newProducts'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <RegisterCard />
      </RecomendationBlock>
      <CollectionBlock />
      <RecomendationBlock id='popularProducts'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <RegisterCard />
      </RecomendationBlock>
      <SubscriptionBlock />
      <RecomendationBlock id='bestPriceProducts'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <RegisterCard />
      </RecomendationBlock>
      <CollectionBlockTwo />
      <CollectionBlockThree />
      <RecomendationBlock id='customProducts'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <RegisterCard />
      </RecomendationBlock>
      <CollectionBlockFour />
      <RecomendationBlock id='birthdayProducts'>
      <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <RegisterCard />
      </RecomendationBlock>
      <Partners />
    </div>
  )
}

export default HomePage