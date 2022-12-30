import React from 'react';

const Product = ({product}) => {
  return (
    <section className="products">
      <article className="product">
 
 <img src={product.image} className='img-top' />
 <div className="product__details">
   <h4 className="product__title">product title</h4>
   <p className='Wtite'>Price: $ product price</p>
   <p className='Wtite'>Rating: product rating rate/5</p>
   <p className="product__desc">Description: product.description</p>
   <h4 className="product__title">{product.title}</h4>
   <p className='product__price'>Price: $ {product.price}</p>
   <p className='product__rating'>Rating: {product.rating.rate}/5</p>
   <p className="product__desc">Description: {product.description}</p>
   <button className="product__btn btn">Add to cart</button>
 </div>
</article>
    </section>
  );
};

export default Product;
