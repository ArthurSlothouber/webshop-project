import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'




class ProductDetails extends PureComponent {
  static propTypes = {
      products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })).isRequired
  }


  render() {
    const {product} = this.props
    // if (!product) return null
        return (
      <div>
        <h1>{ product.name }</h1>
        <p> &euro;{ product.price }.00</p>
        <img src={product.image} alt=""/>
        <p>{product.description}</p>
        <button className="BuyProduct" onClick={this.props.onClick}>Buy this product</button>
      </div>
    )
  }
}


const mapStateToProps = function (state,props) {
  return {
    product: state.products.find(product => Number(props.match.params.id))
  }
}

export default connect(mapStateToProps)(ProductDetails)
